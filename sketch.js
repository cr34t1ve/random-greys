let circleX;
let circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(10);
}

function draw(){
  circleX = random(0, width);

  circleY = random(0, height);

  fill(random(0, 256));

  ellipse(circleX, circleY, 50, 50);
}