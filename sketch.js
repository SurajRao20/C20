var fixed, moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 60, 60);
  fixed.shapeColor = "green";

  moving = createSprite(400,300,80,80);
  moving.shapeColor = "green";

}

function draw() {
  background("Cyan"); 
  
  moving.x = mouseX;
  moving.y = mouseY;

  if (moving.x - fixed.x < 70 && fixed.x - moving.x <70 && moving.y - fixed.y < 70 && fixed.y - moving.y < 70) {
    moving.shapeColor = "red"
    fixed.shapeColor = "red"
  } 
  
  else {

    moving.shapeColor = "green"
    fixed.shapeColor = "green"
    
  }

  drawSprites();
}