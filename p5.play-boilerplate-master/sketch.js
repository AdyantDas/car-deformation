var car,wall;
var speed,weight;
var Deformation;


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(5,200,50,50);
  wall=createSprite(380,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  car.collide(wall);
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
Deformation=0.5*weight*speed*speed/22500
  }
  if(Deformation<100){
    car.shapeColor="green";
  }
  if(Deformation>100 && Deformation<180){
    car.shapeColor="yellow";
  }
  if(Deformation>180){
    car.shapeColor="red";
  }
  drawSprites();
}