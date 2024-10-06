import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import { or } from 'three/webgpu';

const P5Sketch = () => {
  const sketchRef = useRef(null);
  const [minSize, setMinSize] = useState(1000);
  const [fPlanets, setFPlanets] = useState(null);
  const [orbitVisible, setOrbitVisible] = useState(true);
  const orbitVisibleRef = useRef(orbitVisible);

  const handleMinSizeChange = (e) => {
    if (e.key === 'Enter') {
      setMinSize(Number(e.target.value));
    }
  };
  useEffect(() => {
    orbitVisibleRef.current = orbitVisible;
  }, [orbitVisible]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/celestial-data?minSize=${encodeURIComponent(minSize)}`);
      if (!res.ok) {
        console.error(`Error fetching data: ${res.status} ${res.statusText}`);
        return;
      }
      const data = await res.json();
      setFPlanets(data);
    };

    fetchData();
  }, [minSize]);

  useEffect(() => {
    if (fPlanets != null) {
      // Initialize p5 instance
      const sketch = (p, orbitVisibleRef) => {
        let camPosition;
        let camRotation;
        let isMousePressed = false;
        let lastMouseX, lastMouseY;
        let moveSpeed = 0;
        let maxSpeed = 0.2;
        let acceleration = 0.002;
        let deceleration = 0.0005;
        let sensitivity = 0.002;
        let rotationMaxSpeed = 0.0005;
        let rotationAcceleration = 0.0001;
        let rotationDeceleration = 0.000005;
        let rotationSpeedX = 0;
        let rotationSpeedY = 0;
        let time = 0;
        let timeSpeed = 0.0002;

        let sunRadius = 696340 * 1e-5;
        let sunR = 0;
        let sunRS = 0.001;
        let bgTex, sunTex, saturnRingTex;
        let planetTex = [];
        let planets = [];

        class Planet {
          constructor(
            name,
            a,
            e,
            I,
            L,
            longPeri,
            longNode,
            size,
            axialTilt,
            rotationPeriod,
            tex
          ) {
            this.name = name;
            this.a = a * 149597870.7 * 1e-5; // 半長軸
            this.e = e; // 偏心率
            this.I = p.radians(I); // 軌道傾角
            this.L = p.radians(L); // 平近點角
            this.longPeri = p.radians(longPeri); // 近日點
            this.longNode = p.radians(longNode); // 升交點經度
            this.size = size * 1e-3; // 行星大小
            this.axialTilt = p.radians(axialTilt); // 自轉軸傾角
            this.rotationPeriod = rotationPeriod; // 自轉週期
            this.tex = tex; // skin
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.rot = 0;
          }

          evolution(time) {
            // 算行星位置
            let M = this.L + (time * p.TWO_PI) / 365.25 - this.longPeri;
            let E = M;
            for (let i = 0; i < 5; i++) {
              E = M + this.e * p.sin(E);
            }
            let trueAnomaly =
              2 *
              p.atan(
                p.sqrt((1 + this.e) / (1 - this.e)) * p.tan(E / 2)
              );
            let r =
              (this.a * (1 - this.e * this.e)) /
              (1 + this.e * p.cos(trueAnomaly));
            this.x =
              r *
              (p.cos(this.longNode) * p.cos(trueAnomaly + this.longPeri) -
                p.sin(this.longNode) * p.sin(trueAnomaly + this.longPeri) * p.cos(this.I));
            this.z =
              r *
              (p.sin(this.longNode) * p.cos(trueAnomaly + this.longPeri) +
                p.cos(this.longNode) * p.sin(trueAnomaly + this.longPeri) * p.cos(this.I));
            this.y =
              r *
              p.sin(trueAnomaly + this.longPeri) * p.sin(this.I);

            // 自轉
            let angularVelocity = p.TWO_PI / this.rotationPeriod;
            this.rot += angularVelocity * (timeSpeed / 365.25);
          }

          drawOrbit() {
            if (orbitVisibleRef.current) {
              p.noFill();
              p.stroke(255, 100);
              p.strokeWeight(0.2);

              p.beginShape();
              for (let theta = 0; theta < p.TWO_PI; theta += 0.01) {
                let r =
                  (this.a * (1 - this.e * this.e)) /
                  (1 + this.e * p.cos(theta));
                let x =
                  r *
                  (p.cos(this.longNode) * p.cos(theta + this.longPeri) -
                    p.sin(this.longNode) * p.sin(theta + this.longPeri) * p.cos(this.I));
                let z =
                  r *
                  (p.sin(this.longNode) * p.cos(theta + this.longPeri) +
                    p.cos(this.longNode) * p.sin(theta + this.longPeri) * p.cos(this.I));
                let y =
                  r *
                  p.sin(theta + this.longPeri) * p.sin(this.I);

                p.vertex(x, y, z);
              }
              p.endShape(p.CLOSE);
            }
          }

          show() {
            p.push();
            p.translate(this.x, this.y, this.z);
            p.rotateY(this.rot);
            p.rotateX(this.axialTilt);
            p.texture(this.tex);
            p.sphere(this.size, 32, 32);
            p.pop();
          }

          showSaturnRing() {
            // 土星環
            p.push();
            p.translate(this.x, this.y, this.z);
            p.rotateX(p.HALF_PI);
            p.rotateZ(this.axialTilt);
            p.texture(saturnRingTex);
            p.torus(this.size * 1.72, this.size * 0.3, 100, 2);
            p.pop();
          }
        }

        p.preload = () => {
          bgTex = p.loadImage('/texture/8k_stars_milky_way.jpg');
          sunTex = p.loadImage('/texture/8k_sun.jpg');
          saturnRingTex = p.loadImage('/texture/2k_saturnRing.png');

          let planetTexturePaths = [
            '/texture/2k_mercury.jpg',
            '/texture/2k_venus_surface.jpg',
            '/texture/8k_earth_daymap.jpg',
            '/texture/2k_mars.jpg',
            '/texture/2k_jupiter.jpg',
            '/texture/2k_saturn.jpg',
            '/texture/2k_uranus.jpg',
            '/texture/2k_neptune.jpg',
          ];

          planetTexturePaths.forEach((path) => {
            planetTex.push(p.loadImage(path));
          });
        };

        const loadInfo = () => {
          let planetInfo = [
            ["Mercury", 0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593, 4879, 0.000593, 58.65],
            ["Venus", 0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255, 12104, 3.0962, -243],
            ["Earth", 1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0, 12756, 0.4084, 0.996],
            ["Mars", 1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891, 6792, 0.4398, 1.025],
            ["Jupiter", 5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909, 142984, 0.0541, 0.4125],
            ["Saturn", 9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448, 120536, 0.4660, 0.446],
            ["Uranus", 19.18916464, 0.04725744, 0.77263783, 313.23810451, 170.95427630, 74.01692503, 51118, 1.7069, -0.717],
            ["Neptune", 30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574, 49528, 0.4939, 0.671]
          ];

          for (let i = 0; i < planetInfo.length; i++) {
            let pInfo = planetInfo[i];
            let tex = planetTex[i];
            planets.push(
              new Planet(
                pInfo[0], // name
                pInfo[1], // a
                pInfo[2], // e
                pInfo[3], // I
                pInfo[4], // L
                pInfo[5], // longPeri
                pInfo[6], // longNode
                pInfo[7], // size
                pInfo[8], // axialTilt
                pInfo[9], // rotationPeriod
                tex // texture
              )
            );
          }
        };

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          p.noStroke();
          p.textureWrap(p.REPEAT);
          camPosition = p.createVector(0, -10, 180);
          camRotation = p.createVector(0, 0, 0);
          loadInfo();
        };

        p.draw = () => {
          handleKeyboardInput();
          updateCamera();

          p.background(0);
          p.push();
          p.noStroke();
          let gl = p._renderer.GL;
          gl.disable(gl.DEPTH_TEST);
          p.scale(-1, 1, 1);
          p.texture(bgTex);
          p.sphere(6000, 64, 64);
          gl.enable(gl.DEPTH_TEST);
          p.pop();

          p.push();
          sunR += sunRS;
          p.translate(0, 0, 0);
          p.rotateY(sunR);
          p.texture(sunTex);
          p.sphere(sunRadius, 128, 128);
          p.pop();

          for (let planet of planets) {
            planet.drawOrbit();
            planet.evolution(time);
            planet.show();
            if (planet.name === 'Saturn') {
              planet.showSaturnRing();
            }
          }

          time += timeSpeed;
        };

        function handleKeyboardInput() {
          let forward = p.createVector(0, 0, -1);
          let right = p.createVector(1, 0, 0);
          let rotationMatrix = new p5.Matrix();
          rotationMatrix.rotateY(camRotation.y);
          rotationMatrix.rotateX(camRotation.x);
          forward = applyMatrixToVector(rotationMatrix, forward);
          right = applyMatrixToVector(rotationMatrix, right);
          let moveIntent = p.createVector(0, 0, 0);

          if (p.keyIsDown(87)) { // W
            moveSpeed = Math.min(moveSpeed + acceleration, maxSpeed);
          } else if (p.keyIsDown(83)) { // S
            moveSpeed = Math.max(moveSpeed - acceleration, -maxSpeed * 0.005);
          } else if (moveSpeed > 0) {
            moveSpeed = Math.max(moveSpeed - deceleration, 0);
          } else {
            moveSpeed = Math.min(moveSpeed + deceleration, 0);
          }

          if (p.keyIsDown(65)) { // A
            rotationSpeedY = Math.max(rotationSpeedY + rotationAcceleration * 0.05, rotationMaxSpeed * 0.05);
          } else if (p.keyIsDown(68)) { // D
            rotationSpeedY = Math.min(rotationSpeedY - rotationAcceleration * 0.05, -rotationMaxSpeed * 0.05);
          } else {
            if (rotationSpeedY > 0) {
              rotationSpeedY = Math.max(rotationSpeedY - rotationDeceleration, 0);
            } else {
              rotationSpeedY = Math.min(rotationSpeedY + rotationDeceleration, 0);
            }
          }

          if (p.keyIsDown(81)) { // Q
            rotationSpeedX = Math.min(rotationSpeedX + rotationAcceleration, rotationMaxSpeed);
          } else if (p.keyIsDown(69)) { // E
            rotationSpeedX = Math.max(rotationSpeedX - rotationAcceleration, -rotationMaxSpeed);
          } else {
            if (rotationSpeedX > 0) {
              rotationSpeedX = Math.max(rotationSpeedX - rotationDeceleration, 0);
            } else {
              rotationSpeedX = Math.min(rotationSpeedX + rotationDeceleration, 0);
            }
          }

          camRotation.y += rotationSpeedY;
          camRotation.x += rotationSpeedX;

          if (moveSpeed !== 0) {
            moveIntent.add(forward.copy().mult(moveSpeed));
            camPosition.add(moveIntent);
          }

          if (p.keyIsDown(82)) { // R - Reset camera position
            camPosition = p.createVector(0, -10, 180);
            camRotation = p.createVector(0, 0, 0);
            rotationSpeedX = 0;
            rotationSpeedY = 0;
            moveSpeed = 0;
          }
        }

        function updateCamera() {
          let camDir = p.createVector(0, 0, -1);
          let rotationMatrix = new p5.Matrix();
          rotationMatrix.rotateY(camRotation.y);
          rotationMatrix.rotateX(camRotation.x);
          camDir = applyMatrixToVector(rotationMatrix, camDir);
          let camTarget = p5.Vector.add(camPosition, camDir);
          p.camera(
            camPosition.x,
            camPosition.y,
            camPosition.z,
            camTarget.x,
            camTarget.y,
            camTarget.z,
            0,
            1,
            0
          );
        }

        function applyMatrixToVector(matrix, vector) {
          let x = vector.x;
          let y = vector.y;
          let z = vector.z;
          let result = p.createVector(
            matrix.mat4[0] * x + matrix.mat4[4] * y + matrix.mat4[8] * z,
            matrix.mat4[1] * x + matrix.mat4[5] * y + matrix.mat4[9] * z,
            matrix.mat4[2] * x + matrix.mat4[6] * y + matrix.mat4[10] * z
          );
          return result;
        }
      };

      const p5Instance = new p5((p) => sketch(p, orbitVisibleRef), sketchRef.current);
      return () => {
        p5Instance.remove();
      };
    }
  }, [fPlanets]);

  return (
    <div>
      <div ref={sketchRef} style={{ position: 'relative' }}>
        <p>Min Size: </p>
        <input
          type="number"
          id="min_size_input"
          placeholder="0"
          defaultValue={minSize}
          onKeyDown={handleMinSizeChange}
        />
        <button
          onClick={() => setOrbitVisible((prev) => !prev)}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg"
        >
          {orbitVisible ? 'Hide Orbits' : 'Show Orbits'}
        </button>

      </div>
    </div>
  );
};

export default P5Sketch;
