var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(600,200,70,40);
 fixedRect.shapeColor="green";
 movingRect=createSprite(400,200,40,70);
 movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}