
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new paper(100,600,20,20);
dustbin1 = new dustbin(400,400,200,100);
ground1 = new Ground(400,680,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  ground1.display();
  dustbin1.display();
  drawSprites();
 
}



