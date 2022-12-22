
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var left;
var right;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	left = Bodies.rectangle(30,50,40,100);
	right = Bodies.rectangle(50,40,60,100);

	ball=Bodies.circle(20,20,20,ball_options);


	Engine.run(engine);

	var ball_options={
		isStatic : false,
		restitution : 0.9,
		friction : 0,
		density : 1.2

	}

	rectMode(CENTER);
	ellipseMode(RADIUS);

	World.add(world,ball);

	function keyPressed() {
		if(keyCode === UP_ARROW){
			ball.v_force;

		}
	}

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  left.show;
  right.show;
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  
  
  drawSprites();
 
}

function v_force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.06});
}


