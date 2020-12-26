
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbinImg;
var dustbin2;
var dustbin3;
var ground;
var paperball,paperballImg;

function preload(){
	paperballImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1100,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin3 = new Dustbin(810,360,200,200);
	ground = new Ground(550,380,1100,10);
	paperball = new Paperball(50, 100);
	//paperball.addImage(paperballImg);
//	dustbin1.addImage(dustbinImg);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
    paperball.display();
	ground.display();
	dustbin3.display();
	keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:2.5,y:-7});
	}
}

