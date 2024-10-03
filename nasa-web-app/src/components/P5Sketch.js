import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Sketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    let planets = [];
    let sunRadius = 50;
    let sunR = 0;
    let sunRS = 0.001;
    let earthR = 0;
    let earthRS = 0.0365;
    let earthRev = 0.0001;
    let timeSpeed = 100;
    let camPosition;
    let camRotation;
    let isMousePressed = false;
    let lastMouseX, lastMouseY;
    let moveSpeed = 2;
    let sensitivity = 0.002;
    let bgTex, sunTex, earthTex;

    // const sketch = (p) => {
    //   class Planet {
    //     constructor(name, rotSpeed, revSpeed, size, radius, tex) {
    //       this.name = name;
    //       this.rev = 0;
    //       this.rot = 0;
    //       this.rotS = rotSpeed;
    //       this.revS = revSpeed;
    //       this.size = size;
    //       this.radius = radius;
    //       this.tex = tex;
    //       let x = this.radius * p.cos(this.rev);
    //       let z = this.radius * p.sin(this.rev);
    //       this.position = p.createVector(x, 0, z);
    //     }
    //     evolution() {
    //       this.rot += this.rotS * timeSpeed;
    //       this.rev += this.revS * timeSpeed;
    //       let x = this.radius * p.cos(this.rev);
    //       let z = this.radius * p.sin(this.rev);
    //       this.position = p.createVector(x, 0, z);
    //     }
    //     show() {
    //       p.push();
    //       p.rotateY(this.rev);
    //       p.translate(this.radius, 0, 0);
    //       p.rotateY(this.rot);
    //       p.texture(this.tex);
    //       p.sphere(this.size, 64, 64);
    //       p.pop();
    //     }
    //   }

    //   p.preload = () => {
    //     bgTex = p.loadImage('/texture/8k_stars_milky_way.jpg');
    //     sunTex = p.loadImage('/texture/8k_sun.jpg');
    //     earthTex = p.loadImage('/texture/8k_earth_daymap.jpg');
    //   };

    //   const loadInfo = () => {
    //     planets.push(new Planet('Earth', 0.0365, 0.0001, 10, 250, earthTex));
    //   };

    //   p.setup = () => {
    //     p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    //     p.noStroke();
    //     p.textureWrap(p.REPEAT);
    //     loadInfo();
    //     camPosition = p.createVector(0, -500, 500);
    //     camRotation = p.createVector(0.84, 0, 0);
    //   };

    //   p.drawOrbit = (radius) => {
    //     p.push();
    //     p.noFill();
    //     p.stroke(200);
    //     p.strokeWeight(0.3);
    //     p.beginShape();
    //     for (let angle = 0; angle <= 360; angle += 1) {
    //       let rad = p.radians(angle);
    //       let x = radius * p.cos(rad);
    //       let z = radius * p.sin(rad);
    //       p.vertex(x, 0, z);
    //     }
    //     p.endShape(p.CLOSE);
    //     p.pop();
    //   };

    //   p.draw = () => {
    //     p.background(0);
    //     p.push();
    //     p.resetMatrix();
    //     p.noStroke();
    //     let gl = p._renderer.GL;
    //     gl.disable(gl.DEPTH_TEST);
    //     p.scale(-1, 1, 1);
    //     p.texture(bgTex);
    //     p.sphere(5000, 64, 64);
    //     gl.enable(gl.DEPTH_TEST);
    //     p.pop();

    //     sunR += sunRS;
    //     p.push();
    //     p.translate(0, 0, 0);
    //     p.rotateY(sunR);
    //     p.texture(sunTex);
    //     p.sphere(sunRadius, 64, 64);
    //     p.pop();

    //     earthR += earthRS;
    //     p.push();
    //     p.rotateY(p.frameCount * earthRev);
    //     p.translate(250, 0, 0);
    //     p.rotateY(earthR);
    //     p.texture(earthTex);
    //     p.sphere(10, 64, 64);
    //     p.pop();

    //     p.drawOrbit(250);
    //   };


      
    // };

    // Initialize p5 instance
    const sketch = (p) => {
        let camPosition;
        let camRotation;
        let moveSpeed = 5;
        let timeSpeed = 1;
        let sensitivity = 0.005;
        let lastMouseX;
        let lastMouseY;
        let isMousePressed = false;
        let sunRadius = 50;
        let sunR = 0;
        let sunRS = 0.01;
        let planets = [];
        let bgTex, sunTex, earthTex;
      
        class Planet {
          constructor(name, rotSpeed, revSpeed, size, radius, tex) {
            this.name = name;
            this.rev = 0;
            this.rot = 0;
            this.rotS = rotSpeed;
            this.revS = revSpeed;
            this.size = size;
            this.radius = radius;
            this.tex = tex;
            let x = this.radius * p.cos(this.rev);
            let z = this.radius * p.sin(this.rev);
            this.position = p.createVector(x, 0, z);
          }
          evolution() {
            this.rot += this.rotS * timeSpeed;
            this.rev += this.revS * timeSpeed;
            let x = this.radius * p.cos(this.rev);
            let z = this.radius * p.sin(this.rev);
            this.position = p.createVector(x, 0, z);
          }
          show() {
            p.push();
            p.translate(this.position.x, this.position.y, this.position.z);
            p.rotateY(this.rot);
            p.texture(this.tex);
            p.sphere(this.size, 64, 64);
            p.pop();
          }
        }
      
        p.preload = () => {
          bgTex = p.loadImage('/texture/8k_stars_milky_way.jpg');
          sunTex = p.loadImage('/texture/8k_sun.jpg');
          earthTex = p.loadImage('/texture/8k_earth_daymap.jpg');
        };
      
        const loadInfo = () => {
          planets.push(new Planet('Earth', 0.0365, 0.0001, 10, 250, earthTex));
        };
      
        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          p.noStroke();
          p.textureWrap(p.REPEAT);
          loadInfo();
          camPosition = p.createVector(0, -500, 500);
          camRotation = p.createVector(0.84, 0, 0);
        };
      
        p.drawOrbit = (radius) => {
          p.push();
          p.noFill();
          p.stroke(200);
          p.strokeWeight(0.3);
          p.beginShape();
          for (let angle = 0; angle <= 360; angle += 1) {
            let rad = p.radians(angle);
            let x = radius * p.cos(rad);
            let z = radius * p.sin(rad);
            p.vertex(x, 0, z);
          }
          p.endShape(p.CLOSE);
          p.pop();
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
      
            camRotation.x = p.constrain(camRotation.x, -p.PI / 2, p.PI / 2);
      
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
            matrix.mat4[0] * x + matrix.mat4[4] * y + matrix.mat4[8] * z,
            matrix.mat4[1] * x + matrix.mat4[5] * y + matrix.mat4[9] * z,
            matrix.mat4[2] * x + matrix.mat4[6] * y + matrix.mat4[10] * z
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
          sunR += sunRS * timeSpeed;
          p.push();
          p.translate(0, 0, 0);
          p.rotateY(sunR);
          p.texture(sunTex);
          p.sphere(sunRadius, 64, 64);
          p.pop();
      
          // Update and display planets
          for (let planet of planets) {
            planet.evolution();
            planet.show();
            p.drawOrbit(planet.radius);
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
