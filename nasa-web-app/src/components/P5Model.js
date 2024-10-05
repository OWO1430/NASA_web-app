import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import p5 from 'p5';

// Dynamically import react-p5 to work with Next.js's SSR
export default function P5Model() {
  let myModel;

  // p5.js preload function to load .glb model
  const preload = (p) => {
    myModel = p.loadModel('/Ares.glb'); // Make sure your .glb file is in the "public" folder
  };

  // p5.js setup function
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 600, p5.WEBGL).parent(canvasParentRef);
  };

  // p5.js draw function
  const draw = (p5) => {
    p5.background(200);

    // Rotate for better visibility
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);

    // Display the 3D model
    p5.scale(0.5); // Adjust scale if needed
    p5.model(myModel);
  };

  return (
    <div>
      <Sketch preload={preload} setup={setup} draw={draw} />
    </div>
  );
}