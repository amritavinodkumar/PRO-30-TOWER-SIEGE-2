const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,
block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon_img;
var ground;
var airGround1,airGround2;
var launchingObject;
var engine,world;
var ball;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup(){
  var canvas = createCanvas(1300,600)
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

 ground = new Ground(650,591.5,1300,15);

 airGround1 = new AirGround(533,465,260,10);
 airGround2 = new AirGround(994,310,195,10);

 ball = Bodies.circle(180,200,20)
 World.add(world,ball)

 block1 = new Block1(468,440,30,40);
 block2 = new Block1(500,440,30,40);
 block3 = new Block1(532,440,30,40);
 block4 = new Block1(564,440,30,40);
 block5 = new Block1(596,440,30,40);
 block6 = new Block1(628,440,30,40);
 block7 = new Block1(436,440,30,40);

 block8 = new Block2(500,399,30,40);
 block9 = new Block2(564,399,30,40);
 block10 = new Block2(596,399,30,40);
 block11 = new Block2(532,399,30,40);
 block12 = new Block2(468,399,30,40);

 block13 = new Block3(500,358,30,40);
 block14 = new Block3(532,358,30,40);
 block15 = new Block3(564,358,30,40);

 block16 = new Block2(532,317,30,40);

 block17 = new Block3(930,285,30,40);
 block18 = new Block3(962,285,30,40);
 block19 = new Block3(994,285,30,40);
 block20 = new Block3(1026,285,30,40);
 block21 = new Block3(1058,285,30,40);

 block22 = new Block2(962,244,30,40);
 block23 = new Block2(994,244,30,40);
 block24 = new Block2(1026,244,30,40);

 block25 = new Block1(994,203,30,40);

 launcherObject = new Launcher(this.ball,{x:180,y:200})
  
}

function draw(){

background(56,44,44)

//image(polygon,180,300,50,50);



ground.display();

airGround1.display();
airGround2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
//fill("lightblue")

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//fill("pink")

block13.display();
block14.display();
block15.display();
//fill("lightcyan")

block16.display();
//fill("gold")

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();

block25.display();

launcherObject.display();

imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40)

}

function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32){
    launcherObject.attach(this.ball);
 }
}