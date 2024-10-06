import { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
// import 'p5/lib/addons/p5.dom';

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

  const handleMinSizeChange = (e) => {
    if (e.key == 'Enter') {
      console.log("Min size changed to", Number(e.target.value));
      setMinSize(Number(e.target.value));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`api/celestial-data?minSize=${encodeURIComponent(minSize)}`, {
        method: "GET",
      });

      // NOTE: maybe handle response error here

      const data = await res.json();
      setFPlanets(data.planets);
      setFAster(data.asteroids);
    };

    fetchData();
    return () => { };
  }, [minSize]);

  useEffect(() => {
    if (fPlanets != null && fAster != null) {
      console.log(fPlanets);
      console.log(fAster);

      // Initialize p5 instance
      const sketch = (p) => {
        let planets = [];
        let all_planets = [];
        let planet_texes = [];
        let all_aster = [];
        let aster_texes = [];

        let sunR = 0;
        let time = 0;

        // Camera Moving
        let camPosition;
        let camRotation;
        let isMousePressed = false;
        let lastMouseX, lastMouseY;
        let moveSpeed = 2;
        let sensitivity = 0.002;

        let bgTex, sunTex;

        p.preload = () => {
          bgTex = p.loadImage('/texture/8k_stars_milky_way.jpg');
          sunTex = p.loadImage('/texture/8k_sun.jpg');
          for (var i = 0; i < fPlanets.length; i++) {
            planet_texes.push(p.loadImage(fPlanets[i].tex));
          }
        };

        const loadInfo = () => {
          for (var i = 0; i < fPlanets.length; i++) {
            all_planets.push(
              new Planet(
                p,
                fPlanets[i].full_name,
                fPlanets[i].a,
                fPlanets[i].e,
                fPlanets[i].I,
                fPlanets[i].L,
                fPlanets[i].longPeri,
                fPlanets[i].longNode,
                fPlanets[i].size,
                planet_texes[i],
                fPlanets[i].axialTilt,
                fPlanets[i].rotPeriod,
              )
            );
          }

          for (var i = 0; i < fAster.length; i++) {
            all_aster.push(
              new Planet(
                p,
                fAster[i].full_name,
                fAster[i].a,
                fAster[i].e,
                fAster[i].I,
                fAster[i].L,
                fAster[i].longPeri,
                fAster[i].longNode,
                fAster[i].size,
                sunTex,
                1,
                1,
              )
            );
          }
        };

        let triangleButton;
        let showWindow = false; // 控制小視窗的顯示
        let buttonWindow;
        let colorDiv; // 用來顯示顏色名稱的div

        // 顯示/隱藏按鈕小視窗
        const toggleButtonWindow = () => {
          showWindow = !showWindow; // 切換視窗顯示狀態
          if (showWindow) {
            buttonWindow.style('display', 'flex'); // 顯示小視窗
          } else {
            buttonWindow.style('display', 'none'); // 隱藏小視窗
          }
        };

        // 顯示按鈕對應的顏色文字在div中
        const showColorDiv = (colorName) => {
          colorDiv.html(colorName); // 更新 div 內容為顏色名稱
          colorDiv.style('display', 'block'); // 顯示 div
        };

        p.setup = () => {
          // 星球按鈕
          // 創建三角形按鈕
          triangleButton = p.createDiv().style('width', '0')
            .style('height', '0')
            .style('border-left', '20px solid transparent')
            .style('border-right', '20px solid transparent')
            .style('border-top', '40px solid blue')
            .style('position', 'absolute')
            .style('bottom', '100px') // 三角形位於畫布底部
            .style('left', 'calc(50% - 20px)') // 水平居中，讓三角形保持在畫布中央
            .style('cursor', 'pointer');

          // 當點擊三角形時，顯示/隱藏按鈕小視窗
          triangleButton.mousePressed(toggleButtonWindow);

          // 創建按鈕小視窗，但初始設置為隱藏
          buttonWindow = p.createDiv().style('display', 'none')
            .style('border', '1px solid green')
            .style('background-color', 'lightgray')
            .style('position', 'absolute')
            .style('bottom', '0px')
            .style('left', '0')
            .style('width', '100%')
            .style('height', '100px')
            .style('display', 'flex')
            .style('justify-content', 'space-around')
            .style('align-items', 'center');

          // 創建多個按鈕，按下按鈕會顯示對應顏色的文字
          p.createButton('太陽').parent(buttonWindow).mousePressed(() => showColorDiv('太陽'));
          p.createButton('水星').parent(buttonWindow).mousePressed(() => showColorDiv('水星'));
          p.createButton('金星').parent(buttonWindow).mousePressed(() => showColorDiv('金星'));
          p.createButton('地球').parent(buttonWindow).mousePressed(() => showColorDiv('地球'));
          p.createButton('火星').parent(buttonWindow).mousePressed(() => showColorDiv('火星'));

          // 創建一個用來顯示顏色名稱的 div，初始為隱藏
          colorDiv = p.createDiv('').style('display', 'none')
            .style('border', '1px solid black')
            .style('padding', '10px')
            .style('background-color', 'white')
            .style('position', 'absolute')
            .style('top', '20px')
            .style('left', 'calc(50% - 50px)')
            .style('width', '100px')
            .style('text-align', 'center');

          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          p.noStroke();
          p.textureWrap(p.REPEAT);
          camPosition = p.createVector(0, -500, 500);
          camRotation = p.createVector(0.84, 0, 0);
          loadInfo();
        };

        p.checkCollision = function (newPosition) {
          for (let planet of planets) {
            let distance = p5.Vector.dist(newPosition, planet.position);
            let minDistance = planet.radius - 80;

            if (distance < minDistance) {
              // Collision occurs
              return true;
            }
          }
          let distance = p5.Vector.dist(newPosition, p.createVector(0, 0, 0));
          let minDistance = sunRadius - 80;

          if (distance < minDistance) {
            return true;
          }
          return false;
        };

        p.handleKeyboardInput = function () {
          // Compute forward, right, up vectors
          let forward = p.createVector(0, 0, -1);
          let right = p.createVector(1, 0, 0);
          let up = p.createVector(0, 1, 0);

          // Adjust direction vectors based on camera rotation
          let rotationMatrix = new p5.Matrix();
          rotationMatrix.rotateY(camRotation.y);
          rotationMatrix.rotateX(camRotation.x);

          forward = p.applyMatrixToVector(rotationMatrix, forward);
          right = p.applyMatrixToVector(rotationMatrix, right);

          // Move intent vector
          let moveIntent = p.createVector(0, 0, 0);

          if (p.keyIsDown(87)) {
            // W
            moveIntent.add(forward);
          }
          if (p.keyIsDown(83)) {
            // S
            moveIntent.sub(forward);
          }
          if (p.keyIsDown(65)) {
            // A
            moveIntent.sub(right);
          }
          if (p.keyIsDown(68)) {
            // D
            moveIntent.add(right);
          }
          if (p.keyIsDown(81)) {
            // Q
            moveIntent.sub(up);
          }
          if (p.keyIsDown(69)) {
            // E
            moveIntent.add(up);
          }

          if (moveIntent.mag() > 0) {
            moveIntent.normalize().mult(moveSpeed);
            let newCamPosition = p5.Vector.add(camPosition, moveIntent);

            if (!p.checkCollision(newCamPosition)) {
              camPosition = newCamPosition;
            }
          }
          if (p.keyIsDown(82)) {
            // R for reset
            camPosition = p.createVector(0, -600, 600);
            camRotation = p.createVector(0.84, 0, 0);
          }
        };

        p.handleMouseInput = function () {
          if (isMousePressed) {
            let deltaX = p.mouseX - lastMouseX;
            let deltaY = p.mouseY - lastMouseY;

            camRotation.y -= deltaX * sensitivity;
            camRotation.x += deltaY * sensitivity;

            camRotation.x = p.constrain(
              camRotation.x,
              -p.PI / 2,
              p.PI / 2
            );

            lastMouseX = p.mouseX;
            lastMouseY = p.mouseY;
          }
        };

        p.updateCamera = function () {
          // Direction vector
          let camDir = p.createVector(0, 0, -1);
          let rotationMatrix = new p5.Matrix();
          rotationMatrix.rotateY(camRotation.y);
          rotationMatrix.rotateX(camRotation.x);

          camDir = p.applyMatrixToVector(rotationMatrix, camDir);

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
        };

        p.mousePressed = function () {
          if (p.mouseButton === p.LEFT) {
            isMousePressed = true;
            lastMouseX = p.mouseX;
            lastMouseY = p.mouseY;
          }
        };

        p.mouseReleased = function () {
          if (p.mouseButton === p.LEFT) {
            isMousePressed = false;
          }
        };

        p.applyMatrixToVector = function (matrix, vector) {
          let x = vector.x;
          let y = vector.y;
          let z = vector.z;

          let result = p.createVector(
            matrix.mat4[0] * x +
            matrix.mat4[4] * y +
            matrix.mat4[8] * z,
            matrix.mat4[1] * x +
            matrix.mat4[5] * y +
            matrix.mat4[9] * z,
            matrix.mat4[2] * x +
            matrix.mat4[6] * y +
            matrix.mat4[10] * z
          );

          return result;
        };

        p.draw = () => {
          p.handleKeyboardInput();
          p.handleMouseInput();
          p.updateCamera();

          p.background(0);
          p.push();
          p.resetMatrix();
          p.noStroke();
          let gl = p._renderer.GL;
          gl.disable(gl.DEPTH_TEST);
          p.scale(-1, 1, 1);
          p.texture(bgTex);
          p.sphere(5000, 64, 64);
          gl.enable(gl.DEPTH_TEST);
          p.pop();

          // Update and display the sun
          sunR += sunRS;
          p.push();
          p.translate(0, 0, 0);
          p.rotateY(sunR);
          p.texture(sunTex);
          p.sphere(sunRadius, 64, 64);
          p.pop();

          // Update and display Earth
          for (var i = 0; i < all_planets.length; i++) {
            all_planets[i].drawOrbit();
            all_planets[i].evolution(time);
            all_planets[i].show();
          }

          for (var i = 0; i < all_aster.length; i++) {
            all_aster[i].drawOrbit();
            all_aster[i].evolution(time);
            all_aster[i].show();
          }

          time += timeSpeed;

          // Hide mouse when dragging
          if (isMousePressed) {
          } else {
            p.cursor();
          }
        };
      };

      const p5Instance = new p5(sketch, sketchRef.current);

      // Clean up the p5 instance on component unmount
      return () => {
        p5Instance.remove();
      };
    }

    return () => { };
  }, [fPlanets]);

  return <div>
    <div ref={sketchRef}>
      <p>Min Size: </p>
      <input
        type="value"
        id="min_size_input"
        placeholder="0"
        defaultValue={minSize}
        onKeyDown={handleMinSizeChange}
      />
    </div>
  </div>;
};

export default P5Sketch;
