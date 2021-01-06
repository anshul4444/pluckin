const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	boys = loadImage("boy.png")
	trees = loadImage("tree.png")
}

function setup() {
	createCanvas(1900, 700);

	boy1= createSprite(200,600,20,20)
	boy1.addImage(boys)
	boy1.scale = 0.15

	tree1 = createSprite(1600,370,20,20)
	tree1.addImage(trees)
	tree1.scale = 0.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(300,690,10000,20)
	stone1 = new Stone(1000,100,20,20)

	launcherObject = new launcher(stone1.body,{x:200,y:600})
	mango1 = new mango(200,300,50,50,{isStatic:true})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();

	ground1.display();
	stone1.display();
	launcherObject.display();
	mango1.display();

 
}