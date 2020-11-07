
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1,ground,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1 = new Tree(700,320,70,70)
	ground = new Ground(600,height,1200,20);
	stone = new Stone(500,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

ground.display();
stone.display();
tree1.display();
  drawSprites();
 
}



