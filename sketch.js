 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint 

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,Top,chain1,chain2,chain3,chain4,chain5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new bob(400,450,30);
	bobObject2= new bob(450,450,30);
	bobObject3= new bob(500,450,30);
	bobObject4= new bob(350,450,30);
	bobObject5= new bob(300,450,30);

	Top= new Roof(400,240,310,20);

	chain1 = new Chain(bobObject1.body,{x:400,y:240});
	chain2 = new Chain(bobObject2.body,{x:450,y:240});
	chain3 = new Chain(bobObject3.body,{x:500,y:240});
	chain4 = new Chain(bobObject4.body,{x:350,y:240});
	chain5 = new Chain(bobObject5.body,{x:300,y:240});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Top.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-75,y:-90});
	}
}



