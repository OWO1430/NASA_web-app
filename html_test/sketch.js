let planets = [];

let sunRadius = 50;
let sunR = 0;
let sunRS = 0.001;
let earthR = 0;
let earthRS = 0.0365;
let earthRev = 0.0001;

// Time Speed
timeSpeed = 1;
// Camera Moving
let camPosition;
let camRotation;
let isMousePressed = false;
let lastMouseX, lastMouseY;
let moveSpeed = 2;
let sensitivity = 0.002;


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
		let x = this.orbitRadius * cos(this.rev);
    let z = this.orbitRadius * sin(this.rev);
    this.position = createVector(x, 0, z);
  }
	evolution(){
		this.rot = this.rot+this.rotS*timeSpeed;
		this.rev = this.rev+this.rotS*timeSpeed;

    let x = this.orbitRadius * cos(planet.rev);
    let z = this.orbitRadius * sin(planet.rev);
    this.position = createVector(x, 0, z);
	}
  show() {
    push();
 		rotateY(this.rev); 
  	translate(this.radius, 0, 0); 
		rotateY(this.rot);
  	texture(this.tex);
		sphere(this.size, 64, 64); 
  	pop();
		earthR = earthR+earthRS;
  }
}


function preload(){
	// texture
	bgTex = loadImage('2k_stars_milky_way.jpg');
	sunTex = loadImage('2k_sun.jpg');
	earthTex = loadImage('2k_earth_daymap.jpg');
}

function loadInfo(){
	planets.push(new Planet('Earth', 0.0365, 0.0001, 10, 250, earthTex));
	
}

function setup() {
	// createCanvas(windowWidth, windowHeight);
	// background(100);
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
  textureWrap(REPEAT);
	
	// Load Planet
	loadInfo();

  // Init Cam
  camPosition = createVector(0, -500, 500);
  camRotation = createVector(0.84, 0, 0);
	
	
	
}

function drawOrbit(radius) {
  push();
  noFill();
  stroke(200);
  strokeWeight(0.3);

  beginShape();
  for (let angle = 0; angle <= 360; angle += 1) {
    let rad = radians(angle);
    let x = radius * cos(rad);
    let z = radius * sin(rad);
    vertex(x, 0, z);
  }
  endShape(CLOSE);

  pop();
}

function draw() {
	// circle(mouseX, mouseY, 20);
	handleKeyboardInput();
  handleMouseInput();
  updateCamera();
	// orbitControl();
	
	// background
	background(0);
	push();
  resetMatrix();
  noStroke();

  let gl = this._renderer.GL;

  gl.disable(gl.DEPTH_TEST);

  scale(-1, 1, 1);

  texture(bgTex);

  sphere(5000, 64, 64);

  gl.enable(gl.DEPTH_TEST);
  pop();


  // light
  // ambientLight(50);
  // pointLight(255, 255, 255, 0, 0, 0);

  // sun
	sunR = sunR+sunRS;
	push();
  translate(0, 0, 0); 
	rotateY(sunR);
	// emissiveMaterial(255, 204, 0);
  texture(sunTex);
  sphere(sunRadius, 64, 64);
  pop();
	
	//EARTH
	earthR = earthR+earthRS;
	push();
  rotateY(frameCount * earthRev); 
  translate(250, 0, 0); 
	rotateY(earthR);
  texture(earthTex);
	sphere(10, 64, 64); 
  pop();
	
	// orbit

	drawOrbit(250);
	
	
 	// Hide mouse
  if (isMousePressed) {
    cursor('none');
  } else {
    cursor();
  }
	
	// evolution
	for (let planet of planets){
		
	}
}

// Camera Moving

// collision
function checkCollision(newPosition) {
  for (let planet of planets) {
    let distance = p5.Vector.dist(newPosition, planet.position);
    let minDistance = planet.radius - 80;

    if (distance < minDistance) {
      // 发生碰撞
      return true;
    }
  }
	let distance = p5.Vector.dist(newPosition, createVector(0,0,0));
  let minDistance = sunRadius - 80;

  if (distance < minDistance) {
    return true;
  }
  return false;
}

function handleKeyboardInput() {

  // 计算摄像机的前、右、上方向向量
  let forward = createVector(0, 0, -1);
  let right = createVector(1, 0, 0);
  let up = createVector(0, 1, 0);

  // 根据摄像机的旋转调整方向向量
  let rotationMatrix = new p5.Matrix();
  rotationMatrix.rotateY(camRotation.y);
  rotationMatrix.rotateX(camRotation.x);

  forward = applyMatrixToVector(rotationMatrix, forward);
  right = applyMatrixToVector(rotationMatrix, right);

  // 移动意图向量
  let moveIntent = createVector(0, 0, 0);

  if (keyIsDown(87)) { // W
    moveIntent.add(forward);
  }
  if (keyIsDown(83)) { // S
    moveIntent.sub(forward);
  }
  if (keyIsDown(65)) { // A
    moveIntent.sub(right);
  }
  if (keyIsDown(68)) { // D
    moveIntent.add(right);
  }
  if (keyIsDown(81)) { // Q
    moveIntent.sub(up);
  }
  if (keyIsDown(69)) { // E
    moveIntent.add(up);
  }
	

  if (moveIntent.mag() > 0) {
    moveIntent.normalize().mult(moveSpeed);
    let newCamPosition = p5.Vector.add(camPosition, moveIntent);

    if (!checkCollision(newCamPosition)) {
      camPosition = newCamPosition;
    }
  }
	//console.log(camRotation.x, camRotation.y, camRotation.z);
	if (keyIsDown(82)){ // R for reset
		camPosition = createVector(0, -600, 600);
  	camRotation = createVector(0.84, 0, 0);
	}
}

function handleMouseInput() {
  if (isMousePressed) {
    let deltaX = mouseX - lastMouseX;
    let deltaY = mouseY - lastMouseY;

    camRotation.y -= deltaX * sensitivity;
    camRotation.x += deltaY * sensitivity;

    camRotation.x = constrain(camRotation.x, -PI / 2, PI / 2);

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

function updateCamera() {
  // 方向向量
  let camDir = createVector(0, 0, -1);
  let rotationMatrix = new p5.Matrix();
  rotationMatrix.rotateY(camRotation.y);
  rotationMatrix.rotateX(camRotation.x);

  camDir = applyMatrixToVector(rotationMatrix, camDir);

  let camTarget = p5.Vector.add(camPosition, camDir);

  camera(camPosition.x, camPosition.y, camPosition.z,
         camTarget.x, camTarget.y, camTarget.z,
         0, 1, 0);
}

function mousePressed() {
  if (mouseButton === LEFT) {
    isMousePressed = true;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

function mouseReleased() {
  if (mouseButton === LEFT) {
    isMousePressed = false;
  }
}

function applyMatrixToVector(matrix, vector) {
  let x = vector.x;
  let y = vector.y;
  let z = vector.z;

  let result = createVector(
    matrix.mat4[0] * x + matrix.mat4[4] * y + matrix.mat4[8] * z,
    matrix.mat4[1] * x + matrix.mat4[5] * y + matrix.mat4[9] * z,
    matrix.mat4[2] * x + matrix.mat4[6] * y + matrix.mat4[10] * z
  );

  return result;
}