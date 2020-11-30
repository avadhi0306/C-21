var movingRect, fixedRect
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(200, 300, 50, 50);
 fixedRect = createSprite(200, 150, 80, 100);
 fixedRect2= createSprite(300, 150, 80, 100);
 fixedRect3= createSprite(400, 150, 80, 100);
 movingRect.velocityY=-1;


}

function draw() {
  background(255,255,255);

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if (isTouching(movingRect, fixedRect)|| isTouching(movingRect, fixedRect2)|| isTouching( movingRect, fixedRect3)){}

  drawSprites();
}