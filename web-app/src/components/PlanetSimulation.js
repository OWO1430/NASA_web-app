// // components/P5Sketch.js
// import React, { useRef, useEffect } from "react";
// import p5 from "p5";

// const P5Sketch = () => {
//   const sketchRef = useRef();

//   useEffect(() => {
//     const sketch = (p) => {
//       let sunR = 0;
//       let sunRS = 0.001;
//       let earthR = 0;
//       let earthRS = 0.0365;
//       let earthRev = 0.0001;
//       let camPosition, camRotation;

//       p.preload = () => {
//         // Preload assets
//         p.bgTex = p.loadImage("/8k_stars_milky_way.jpg");
//         p.sunTex = p.loadImage("/8k_sun.jpg");
//         p.earthTex = p.loadImage("/8k_earth_daymap.jpg");
//       };

//       p.setup = () => {
//         p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
//         p.noStroke();
//         p.textureWrap(p.REPEAT);

//         // Initialize camera
//         camPosition = p.createVector(0, -500, 500);
//         camRotation = p.createVector(0.84, 0, 0);
//       };

//       p.drawOrbit = (radius) => {
//         p.push();
//         p.noFill();
//         p.stroke(200);
//         p.strokeWeight(0.3);

//         p.beginShape();
//         for (let angle = 0; angle <= 360; angle += 1) {
//           let rad = p.radians(angle);
//           let x = radius * p.cos(rad);
//           let z = radius * p.sin(rad);
//           p.vertex(x, 0, z);
//         }
//         p.endShape(p.CLOSE);

//         p.pop();
//       };

//       p.draw = () => {
//         // Background and stars
//         p.background(0);
//         p.push();
//         p.resetMatrix();
//         p.noStroke();

//         const gl = p._renderer.GL;
//         gl.disable(gl.DEPTH_TEST);

//         p.scale(-1, 1, 1);
//         p.texture(p.bgTex);
//         p.sphere(5000, 64, 64);

//         gl.enable(gl.DEPTH_TEST);
//         p.pop();

//         // Sun
//         sunR += sunRS;
//         p.push();
//         p.translate(0, 0, 0);
//         p.rotateY(sunR);
//         p.texture(p.sunTex);
//         p.sphere(50, 64, 64);
//         p.pop();

//         // Earth
//         earthR += earthRS;
//         p.push();
//         p.rotateY(p.frameCount * earthRev);
//         p.translate(250, 0, 0);
//         p.rotateY(earthR);
//         p.texture(p.earthTex);
//         p.sphere(10, 64, 64);
//         p.pop();

//         // Draw Earth's orbit
//         p.drawOrbit(250);
//       };

//       p.windowResized = () => {
//         p.resizeCanvas(p.windowWidth, p.windowHeight);
//       };
//     };

//     const myp5 = new p5(sketch, sketchRef.current);

//     // Cleanup to remove sketch when component unmounts
//     return () => {
//       myp5.remove();
//     };
//   }, []);

//   return <div ref={sketchRef}></div>;
// };

// export default P5Sketch;
