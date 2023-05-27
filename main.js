var logoStartX = window.innerWidth / 2;
var logoStartY = window.innerHeight / 2;

let min = 1;
let max = 2;
var speedX = Math.random() * (max - min) + min;
var speedY = Math.random() * (max - min) + min;

var redRandom = Math.floor(Math.random() * 256);
var greenRandom = Math.floor(Math.random() * 256);
var blueRandom = Math.floor(Math.random() * 256);

let img;

function preload() {
    // Load the image file
    img = loadImage('thedog.png');
  }

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 20);
}

function windowResized() {
    resizeCanvas(window.innerWidth - 20, window.innerHeight - 20);
    logoStartX = window.innerWidth / 2;
    logoStartY = window.innerHeight / 2;
}

function dvdLogo() {
  // Set text properties
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(redRandom, greenRandom, blueRandom);
  
  // Display text on the canvas
  text("Under Construction", logoStartX, logoStartY);
  
  logoStartX += speedX;
  logoStartY += speedY;
}

function logoRandomColor(){
  redRandom = Math.floor(Math.random() * 256);
  greenRandom = Math.floor(Math.random() * 256);
  blueRandom = Math.floor(Math.random() * 256);
}

function logoUpdate() {
  if (logoStartX > window.innerWidth - 155){
    speedX *= -1;
    logoRandomColor();
  }
  if (logoStartY > window.innerHeight - 30){
    speedY *= -1;
    logoRandomColor();
  }
  if (logoStartX < 145){
    speedX *= -1;
    logoRandomColor();
  }
  if (logoStartY < 14){
    speedY *= -1;
    logoRandomColor();
  }
}

function draw() {
  background(0);
  image(img, 0 - img.width / 2 + width / 2, 0 - img.height / 2 + height / 2);
  dvdLogo();
  logoUpdate();
}
