
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,400,20);
	b1 = new Bob(300,350,40);
	b2 = new Bob(350,350,40);
	b3 = new Bob(400,350,40);
	b4 = new Bob(450,350,40);
	b5 = new Bob(500,350,40);
	r1 = new Rope(b1.body,roof.body,-60*2,0);
	r2 = new Rope(b2.body,roof.body,-30*2,0);
	r3 = new Rope(b3.body,roof.body,-0*2,0);
	r4 = new Rope(b4.body,roof.body,+30*2,0);
	r5 = new Rope(b5.body,roof.body,+60*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#6A7FAF");
  
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-100})
	}
}



