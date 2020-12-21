const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var ground,ball;

function setup(){
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  var option_ball={
    restitution:1.0
  }
  ball=Bodies.circle(400,200,20,option_ball);
  World.add(world,ball);

  
}
function draw(){
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}