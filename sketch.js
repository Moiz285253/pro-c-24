const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle,base, ground, cannon;
var cannonBall;
var balls = [];


function preload() {
  backgroundImg = loadImage("./assets/background.png");
baseImage = loadImage("./assets/base.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

base = Bodies.rectangle(200, 350, 180, 150, { isStatic: true });
  World.add(world,base);
  cannon = new Cannon(250, 160, 130, 100, -90);
  //cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);

  //console.log(balls)
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(baseImage,base.position.x,base.position.y, 180, 150);
  pop();

  for(var i =0; i < balls.length; i++) {
    showcannonballs(balls[i])
  }

  cannon.display();
  //cannonBall.display();
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot()
  }
}

function keyPressed() {

  if(keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall) 
  }

}

function showcannonballs (ball) {

    if(ball) {
      ball.display();
    }

}
