const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg_img;
var boy,boyImg;

function preload(){
bg_img=loadImage("snow2.jpg");
boyImg=loadImage("boy pro33.png");
}
function setup() {
  createCanvas(800,400);
  
  boy=createSprite(300,200,20,20);
  boy.addAnimation("boy",boyImg);
  boy.scale=0.3;
  
  
}

function draw() {
  background(bg_img); 
  
  boy.display();
 
  drawSprites();
}
function keyPressed() {

	if(keyCode === LEFT_ARROW){
		boy.x=boy.x-20;
		translation={x:-20,y:0}
	}

	else if(keyCode === RIGHT_ARROW){
		boy.x=boy.x+20;
		translation={x:20,y:0}
	}
  else if(keyCode === DOWN_ARROW){
		boy.y=boy.y+20;
		translation={x:0,y:20}
	}
  else if(keyCode === UP_ARROW){
		boy.y=boy.y-20;
		translation={x:0,y:20}
	}
}