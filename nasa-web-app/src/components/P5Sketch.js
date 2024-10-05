import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    // Initialize p5 instance
    const sketch = (p) => {
      let planets = [];
      let earth;
      let time = 0;

      let sunRadius = 696340 * 10 ** -5;
      let sunR = 0;
      let sunRS = 0.001;

      // Time Speed
      let timeSpeed = 0.01;
      // Camera Moving
      let camPosition;
      let camRotation;
      let isMousePressed = false;
      let lastMouseX, lastMouseY;
      let moveSpeed = 2;
      let sensitivity = 0.002;

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
        show() {
          this.p.push();
          this.p.translate(this.x, this.y, this.z);
          this.p.rotateY(this.rot);
          this.p.texture(this.tex);
          this.p.sphere(this.size, 64, 64);
          this.p.pop();
        }
      }

      p.preload = () => {
        bgTex = p.loadImage('/texture/8k_stars_milky_way.jpg');
        sunTex = p.loadImage('/texture/8k_sun.jpg');
        earthTex = p.loadImage('/texture/8k_earth_daymap.jpg');
      };

      const loadInfo = () => {
        earth = new Planet(
          p,
          'Earth',
          1.00000261,
          0.01671123,
          -0.00001531,
          100.46457166,
          102.93768193,
          0,
          6371,
          earthTex,
          23.5,
          1
        );
      };

      p.setup = () => {
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
        earth.drawOrbit();
        earth.evolution(time);
        earth.show();

        time += timeSpeed;

        // Hide mouse when dragging
        if (isMousePressed) {
          p.cursor('none');
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
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
