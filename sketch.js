var boyIMG,boySprite, ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyIMG = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(50,520,50,50)
	tree = new Tree(550,435,500,500)
	mango1 = new Mango(400,350,40,40)
	mango2 = new Mango(450,320,40,40)
	mango3 = new Mango(550,275,40,40)
	mango4 = new Mango(570,350,40,40)
	mango5 = new Mango(695,370,40,40)

	string = new String(stone.body,{x:125,y:470});

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("brown")

	boySprite = createSprite(200,570,100,100)
	boySprite.scale=0.15
	boySprite.addImage(boyIMG)


	Engine.run(engine);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

}


function draw() {
  rectMode(CENTER);
  background("white");

  stone.display()
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

  string.display()

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    string.fly()
}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance<=mango.r+stone.r){
			mango.body.isStatic=false
		}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:125,y:470})
		launcherObject.attach(stone.body)
	}
}


