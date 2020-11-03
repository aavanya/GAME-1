var fixedRect, movingRect;
var aavanya1
var aavanya2
var aavanya3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  aavanya1 = createSprite(200,200,50,50);
  aavanya1.shapeColor="green";
  aavanya2 = createSprite(400,200,50,50);
  aavanya2.shapeColor="green";
  aavanya3 = createSprite(600,200,50,50);
  aavanya3.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,aavanya1)){
  movingRect.shapeColor = "red";
  aavanya1.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  aavanya1.shapeColor = "green";
 }

  drawSprites();
}
function isTouching(aavanya,aavanya0){
  if (aavanya.x - aavanya0.x < aavanya0.width/2 + aavanya.width/2
    && aavanya0.x - aavanya.x < aavanya0.width/2 + aavanya.width/2
    && aavanya.y - aavanya0.y < aavanya0.height/2 + aavanya.height/2
    && aavanya0.y - aavanya.y < aavanya0.height/2 + aavanya.height/2) {
  
      return true;
}
else {
   return false;
}
}