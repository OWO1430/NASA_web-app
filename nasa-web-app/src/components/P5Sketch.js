import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
// import 'p5/lib/addons/p5.dom';
import { or } from 'three/webgpu';
import { Tube } from '@react-three/drei';

const sunRadius = 696340 * 10 ** -5;
const sunRS = 0.001;

// Time Speed
const timeSpeed = 0.01;
// Camera Moving
let camPosition;
let camRotation;
let isMousePressed = false;
let lastMouseX, lastMouseY;
let moveSpeed = 2;
let sensitivity = 0.002;
// let myModel;

let bgTex, sunTex, earthTex;

class Planet {
  constructor(
    p,
    name,
    a,
    e,
    I,
    L,
    longPeri,
    longNode,
    size,
    tex,
    axialTilt,
    rotationPeriod
  ) {
    this.p = p;
    this.name = name;
    this.a = a * 149597870.7 * 1e-5; // semi-major axis in p5 units
    this.e = e; // eccentricity
    this.I = this.p.radians(I); // inclination in radians
    this.L = this.p.radians(L); // mean longitude in radians
    this.longPeri = this.p.radians(longPeri); // longitude of perihelion in radians
    this.longNode = this.p.radians(longNode); // longitude of ascending node in radians
    this.size = size * 1e-3; // size of the planet in p5 units
    this.tex = tex; // texture for the planet
    this.axialTilt = this.p.radians(axialTilt); // axial tilt
    this.rotationPeriod = rotationPeriod;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rot = 0;
  }

  // planet evolution
  evolution(time) {
    // Calculate mean anomaly M = L - longPeri
    let M =
      this.L + (time * this.p.TWO_PI) / 365.25 - this.longPeri;

    // Solve Kepler's equation for eccentric anomaly E
    let E = M;
    for (let i = 0; i < 5; i++) {
      E = M + this.e * this.p.sin(E);
    }

    // Calculate true anomaly
    let trueAnomaly =
      2 *
      this.p.atan(
        this.p.sqrt((1 + this.e) / (1 - this.e)) *
        this.p.tan(E / 2)
      );

    // Calculate distance r = a * (1 - e^2) / (1 + e * cos(trueAnomaly))
    let r =
      (this.a * (1 - this.e * this.e)) /
      (1 + this.e * this.p.cos(trueAnomaly));

    // Convert polar coordinates (r, trueAnomaly) to 3D Cartesian coordinates (x, y, z)
    this.x =
      r *
      (this.p.cos(this.longNode) *
        this.p.cos(trueAnomaly + this.longPeri) -
        this.p.sin(this.longNode) *
        this.p.sin(trueAnomaly + this.longPeri) *
        this.p.cos(this.I));
    this.z =
      r *
      (this.p.sin(this.longNode) *
        this.p.cos(trueAnomaly + this.longPeri) +
        this.p.cos(this.longNode) *
        this.p.sin(trueAnomaly + this.longPeri) *
        this.p.cos(this.I));
    this.y =
      r *
      this.p.sin(trueAnomaly + this.longPeri) *
      this.p.sin(this.I);

    // Calculate rotation for display
    let angularVelocity =
      this.p.TWO_PI / this.rotationPeriod; // Angular velocity for daily rotation
    this.rot += angularVelocity * (timeSpeed / 365.25);
  }

  // planet orbit
  drawOrbit() {
    this.p.noFill();
    this.p.stroke(255, 100);
    this.p.strokeWeight(1);

    this.p.beginShape();
    for (
      let theta = 0;
      theta < this.p.TWO_PI;
      theta += 0.01
    ) {
      // Calculate the radial distance r for a given theta in polar coordinates
      let r =
        (this.a * (1 - this.e * this.e)) /
        (1 + this.e * this.p.cos(theta));

      // Convert polar coordinates to 3D Cartesian coordinates
      let x =
        r *
        (this.p.cos(this.longNode) *
          this.p.cos(theta + this.longPeri) -
          this.p.sin(this.longNode) *
          this.p.sin(theta + this.longPeri) *
          this.p.cos(this.I));
      let z =
        r *
        (this.p.sin(this.longNode) *
          this.p.cos(theta + this.longPeri) +
          this.p.cos(this.longNode) *
          this.p.sin(theta + this.longPeri) *
          this.p.cos(this.I));
      let y =
        r *
        this.p.sin(theta + this.longPeri) *
        this.p.sin(this.I);

      this.p.vertex(x, y, z);
    }
    this.p.endShape(this.p.CLOSE);
  }

  // show planet
  show() {
    this.p.push();
    this.p.translate(this.x, this.y, this.z);
    this.p.rotateY(this.rot);
    this.p.texture(this.tex);
    this.p.sphere(this.size, 64, 64);
    //   this
    this.p.pop();
  }
}

const P5Sketch = () => {
  const sketchRef = useRef(null);
  const [minSize, setMinSize] = useState(1000);
  const [fPlanets, setFPlanets] = useState(null);
  const [fAster, setFAster] = useState(null);
  const [showPlanet, setShowPlanet] = useState(true);
  const [showAst, setShowAst] = useState(false);
  const [orbitVisible, setOrbitVisible] = useState(true);
  const orbitVisibleRef = useRef(orbitVisible);
  const [flyingMode, setFlyingMode] = useState(true);
  const flyingModeRef = useRef(flyingMode);

  const [selectedPlanet, setSelectedPlanet] = useState('');
  const selectedPlanetRef = useRef(selectedPlanet);

  const handleMinSizeChange = (e) => {
    if (e.key === 'Enter') {
      setMinSize(Number(e.target.value));
    }
  };

  const returnToFlyingMode = () => {
    usingPlanetCamera = false;
    planetIndex = -1;
    setFlyingMode((prev) => !prev);
  };

  useEffect(() => {
    flyingModeRef.current = flyingMode;
  }, [flyingMode]);

  useEffect(() => {
    orbitVisibleRef.current = orbitVisible;
  }, [orbitVisible]);

  useEffect(() => {
    selectedPlanetRef.current = selectedPlanet;
  }, [selectedPlanet]);

  useEffect(() => {
    const fetchData = async () => {
      if (showPlanet) {
        const p_res = await fetch('/data/planet.json');
        if (!p_res.ok) {
          console.error(`Error fetching data: ${p_res.status} ${p_res.statusText}`);
          return;
        }
        var p_data = await p_res.json();
        var p_data = p_data.filter(e => (
          e.size > minSize
        ));

        setFPlanets(p_data);
      } else {
        setFPlanets([]);
      }

      if (showAst) {
        const a_res = await fetch('/data/WISE_202.json');
        if (!a_res.ok) {
          console.error(`Error fetching data: ${a_res.status} ${a_res.statusText}`);
          return;
        }
        var a_data = await a_res.json();
        var a_data = a_data.filter(e => (
          e.PHA === 'Y'
        ));
        setFAster(a_data);
      } else {
        setFAster([]);
      }

    };

    fetchData();
  }, [minSize, showPlanet, showAst]);

  useEffect(() => {
    if (fPlanets != null && fAster != null) {
      // Initialize p5 instance
      const sketch = (p, orbitVisibleRef, selectedPlanetRef, flyingModeRef) => {
        let camPosition;
        let camRotation;
        let camTarget;
        // let isMousePressed = false;
        // let lastMouseX, lastMouseY;
        let moveSpeed = 0;
        let maxSpeed = 0.7;
        let acceleration = 0.002;
        let deceleration = 0.0005;
        // let sensitivity = 0.002;
        let rotationMaxSpeed = 0.0005;
        let rotationAcceleration = 0.0001;
        let rotationDeceleration = 0.000005;
        let rotationSpeedX = 0;
        let rotationSpeedY = 0;
        let time = 0;
        let timeSpeed = 0.0002;

        // Camera Switching
        let originalCamera, planetCamera;
        let usingPlanetCamera = false;
        let planetIndex = -1;
        let lastSelectedPlanet;
        let sunRadius = 696340 * 1e-5;
        let sunR = 0;
        let sunRS = 0.001;
        let bgTex, sunTex, saturnRingTex;
        let planetTex = [];
        let planets = [];
        let asteroids = [];

        // HUD
        let HUDs = [];
        let HUDposition;
        let HUDTex;
        let HUDedge;
        let hudPanel;

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
            this.displayRatio = 1;
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
            p.torus(this.size * 1.72 * this.displayRatio, this.size * 0.3 * this.displayRatio, 100, 2);
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

          fPlanets.forEach((planet) => {
            planetTex.push(p.loadImage(planet.tex));
          });
        };

        const loadInfo = () => {
          for (let i = 0; i < fPlanets.length; i++) {
            planets.push(
              new Planet(
                fPlanets[i].full_name,
                fPlanets[i].a,
                fPlanets[i].e,
                fPlanets[i].I,
                fPlanets[i].L,
                fPlanets[i].longPeri,
                fPlanets[i].longNode,
                fPlanets[i].size,
                fPlanets[i].axialTilt,
                fPlanets[i].rotPeriod,
                planetTex[i],
              )
            );
          }

          for (let i = 0; i < fAster.length; i++) {
            asteroids.push(
              new Planet(
                fAster[i].full_name,
                fAster[i].a,
                fAster[i].e,
                fAster[i].I,
                fAster[i].L,
                fAster[i].longPeri,
                fAster[i].longNode,
                fAster[i].size || 6000,
                1,
                1,
                planetTex[0],
              )
            );
          }
        };

        //HUD
        function HUDset() {

          hudPanel = p.createDiv();
          hudPanel.style('position', 'absolute');
          hudPanel.style('left', '70px');
          hudPanel.style('top', '30%');
          hudPanel.style('padding', '10px');
          hudPanel.style('background-color', 'rgba(0, 0, 0, 0.5)');
          hudPanel.style('color', '#02c002');
          hudPanel.style('font-family', 'digitialix');
          hudPanel.style('font-size', '15px');
          hudPanel.style('border-radius', '5px');

          let cornerDiv10 = p.createDiv();
          let cornerDiv20 = p.createDiv();

          let cornerDiv11 = p.createDiv();
          let cornerDiv21 = p.createDiv();
          let cornerDiv12 = p.createDiv();
          let cornerDiv22 = p.createDiv();
          let cornerDiv13 = p.createDiv();
          let cornerDiv23 = p.createDiv();

          cornerDiv10.style('background-color', '#02c002');
          cornerDiv10.style('position', 'absolute');
          cornerDiv20.style('background-color', '#02c002');
          cornerDiv20.style('position', 'absolute');
          cornerDiv11.style('background-color', '#02c002');
          cornerDiv11.style('position', 'absolute');
          cornerDiv21.style('background-color', '#02c002');
          cornerDiv21.style('position', 'absolute');
          cornerDiv12.style('background-color', '#02c002');
          cornerDiv12.style('position', 'absolute');
          cornerDiv22.style('background-color', '#02c002');
          cornerDiv22.style('position', 'absolute');
          cornerDiv13.style('background-color', '#02c002');
          cornerDiv13.style('position', 'absolute');
          cornerDiv23.style('background-color', '#02c002');
          cornerDiv23.style('position', 'absolute');

          cornerDiv10.style('width', '40px');
          cornerDiv10.style('height', '3px');
          cornerDiv10.style('top', '70px');
          cornerDiv10.style('left', '70px');

          cornerDiv20.style('width', '3px');
          cornerDiv20.style('height', '40px');
          cornerDiv20.style('top', '70px');
          cornerDiv20.style('left', '70px');

          cornerDiv11.style('width', '40px');
          cornerDiv11.style('height', '3px');
          cornerDiv11.style('top', '70px');
          cornerDiv11.style('right', '70px');

          cornerDiv21.style('width', '3px');
          cornerDiv21.style('height', '40px');
          cornerDiv21.style('top', '70px');
          cornerDiv21.style('right', '70px');

          cornerDiv12.style('width', '40px');
          cornerDiv12.style('height', '3px');
          cornerDiv12.style('bottom', '70px');
          cornerDiv12.style('left', '70px');

          cornerDiv22.style('width', '3px');
          cornerDiv22.style('height', '40px');
          cornerDiv22.style('bottom', '70px');
          cornerDiv22.style('left', '70px');

          cornerDiv13.style('width', '40px');
          cornerDiv13.style('height', '3px');
          cornerDiv13.style('bottom', '70px');
          cornerDiv13.style('right', '70px');

          cornerDiv23.style('width', '3px');
          cornerDiv23.style('height', '40px');
          cornerDiv23.style('bottom', '70px');
          cornerDiv23.style('right', '70px');

          let centerCircle = p.createDiv();
          centerCircle.style('width', '30px');
          centerCircle.style('height', '30px');
          centerCircle.style('border', '1px solid #02c002');
          centerCircle.style('border-radius', '50%');
          centerCircle.style('position', 'absolute');
          centerCircle.style('top', '50%');
          centerCircle.style('left', '50%');
          centerCircle.style('transform', 'translate(-50%, -50%)');

          let crossVertical = p.createDiv();
          crossVertical.style('width', '100px');
          crossVertical.style('height', '1px');
          crossVertical.style('background-color', '#02c002');
          crossVertical.style('position', 'absolute');
          crossVertical.style('top', '50%');
          crossVertical.style('left', '50%');
          crossVertical.style('transform', 'translate(-50%, -50%)');

          HUDs = [hudPanel,
            cornerDiv10, cornerDiv20,
            cornerDiv11, cornerDiv21,
            cornerDiv12, cornerDiv22,
            cornerDiv13, cornerDiv23,
            centerCircle, crossVertical];
        }

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          p.noStroke();
          p.textureWrap(p.REPEAT);
          originalCamera = p.createCamera();
          planetCamera = p.createCamera();
          camPosition = p.createVector(0, -10, 180);
          camRotation = p.createVector(0, 0, 0);
          loadInfo();

          let fov = p.PI / 3; // 設置視場角度 (Field of View)
          let aspect = p.width / p.height; // 設置寬高比
          let near = 0.1; // 設置近裁剪平面
          let far = 10000; // 設置遠裁剪平面
          p.perspective(fov, aspect, near, far);

          // HUD
          HUDset();

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
          sunR += sunRS * timeSpeed;
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

          for (let asteroid of asteroids) {
            asteroid.drawOrbit();
            asteroid.evolution(time);
            asteroid.show();
          }

          //HUD
          hudPanel.html(
            'Position:<br>' +
            'x: ' + p.round(camPosition.x * 10 ** 2) + '<br>' +
            'y: ' + p.round(camPosition.y * 10 ** 2) + '<br>' +
            'z: ' + p.round(camPosition.z * 10 ** 2) + '<br>' +
            'Speed: ' + (moveSpeed * 100).toFixed(2) + '  ( ' + p.round(moveSpeed * 500, 2) + '% )'
          );

          if (selectedPlanetRef.current !== lastSelectedPlanet) {
            lastSelectedPlanet = selectedPlanetRef.current;
            if (lastSelectedPlanet) {
              focusOnPlanetByName(lastSelectedPlanet);
            }
            else {
              camPosition = p.createVector(0, -10, 180);
              camTarget = null;
            }
          }
          time += timeSpeed;
        };

        function handleKeyboardInput() {
          if (usingPlanetCamera) {
            // Skip camera movement if using planet camera
            return;
          }
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
            if (!checkCollision(p5.Vector.add(camPosition, moveIntent))) {
              camPosition.add(moveIntent);
            }
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
          if (usingPlanetCamera && planetIndex !== -1) {
            for (let h of HUDs) {
              h.style('display', 'none');
            }
            p.setCamera(planetCamera);
            p.orbitControl();
            timeSpeed = 0;
          }
          else {
            for (let h of HUDs) {
              h.style('display', 'block');
            }
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
            timeSpeed = 0.0002;
          }
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
        function checkCollision(newPosition) {
          for (let planet of planets) {
            let distance = p5.Vector.dist(newPosition, p.createVector(planet.x, planet.y, planet.z));
            let minDistance = planet.size + 2;

            if (distance < minDistance) {
              // collision happens
              return true;
            }
          }
          let distance = p5.Vector.dist(newPosition, p.createVector(0, 0, 0));
          let minDistance = sunRadius + 2;

          if (distance < minDistance) {
            return true;
          }
          return false;
        }
        function focusOnPlanetByName(planetName) {
          if (planetName === 'Sun') {
            usingPlanetCamera = true;
            planetCamera.setPosition(0, 0, 5 + sunRadius * 3);
            planetCamera.lookAt(0, 0, 0);
          }
          else {
            if (planetName === 'Mercury') {
              planetIndex = 1;
            }
            else if (planetName === 'Venus') {
              planetIndex = 2;
            }
            else if (planetName === 'Earth') {
              planetIndex = 3;
            }
            else if (planetName === 'Mars') {
              planetIndex = 4;
            }
            else if (planetName === 'Jupiter') {
              planetIndex = 5;
            }
            else if (planetName === 'Saturn') {
              planetIndex = 6;
            }
            else if (planetName === 'Uranus') {
              planetIndex = 7;
            }
            else if (planetName === 'Neptune') {
              planetIndex = 8;
            }
            else {
              usingPlanetCamera = false;
              planetIndex = -1;
            }
            if (planetIndex !== -1) {
              setFlyingMode((prev) => !prev);
              usingPlanetCamera = true;
              let planet = planets[planetIndex - 1];
              planetCamera.setPosition(planet.x, planet.y, planet.z + 5 + planet.size * 3);
              planetCamera.lookAt(planet.x, planet.y, planet.z);
            }
          }
        }
      };

      const p5Instance = new p5((p) => sketch(p, orbitVisibleRef, selectedPlanetRef, flyingModeRef), sketchRef.current);
      return () => {
        p5Instance.remove();
      };
    }
  }, [fPlanets, fAster]);

  return (
    <div>
      <div ref={sketchRef} style={{ position: 'relative' }}>
        <div
          className="absolute top-5 left-1/2 transform -translate-x-1/2 "
          style={{
            fontSize: 12,
            borderRadius: 10,
            background: 'white',
            opacity: 0.3,
            padding: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
            }}
          >
            <p
              className="font-bold white hover:bg-gray-700 shadow-lg"
              style={{ marginRight: '10px' }}
            >
              Min Size
            </p>
            <input
              type="number"
              id="min_size_input"
              placeholder="0"
              defaultValue={minSize}
              onKeyDown={handleMinSizeChange}
              style={{ width: '90px', paddingLeft: '3px' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignContent: 'center',
            }}>
            <p
              className="font-bold white hover:bg-gray-700 shadow-lg"
              style={{ marginRight: '10px' }}
            >
              Asteroid
            </p>
            <input
              type="checkbox"
              checked={showAst}
              onChange={() => {
                setShowAst(!showAst);
              }}
            />
          </div>
        </div>



        <button
          onClick={() => setOrbitVisible((prev) => !prev)}
          className="absolute bottom-5 left-1/4 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg"
        >
          {orbitVisible ? 'Hide Orbits' : 'Show Orbits'}
        </button>
        <div >
          <select
            value={selectedPlanet}
            onChange={(e) => setSelectedPlanet(e.target.value)}
            className="absolute bottom-5 left-3/4 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg"
          >
            <option value="reset">Choose</option>
            <option value="Sun">Sun</option>
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>
          </select>
        </div>
        <button
          onClick={() => { setSelectedPlanet('reset'); setFlyingMode((prev) => !prev); }}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg"
        >
          {flyingMode ? 'Flying' : 'Return to flying mode'}
        </button>

      </div>
    </div>
  );
};

export default P5Sketch;