var mrect,frect



function setup() {

  createCanvas(windowWidth,windowHeight);
  mrect = createSprite(400, 200, 50, 50);
  frect = createSprite(400,300,80,50);
 // mrect.Y = 
}

function draw() {
  background(0,80,0);  
  mrect.y= mouseY;
  mrect.x= mouseX;
  frect.velocityY=5;
  frect.velocityX=5;
  mrect.velocityX=5;
  mrect.velocityY=5;
  if(frect.x - mrect.x <= frect.width/2 + mrect.width/2&&mrect.x - frect.x <= frect.width/2 + mrect.width/2){
    frect.velocityX=frect.velocityX * -1;
    mrect.velocityX=mrect.velocityX * -1;
    
  }
  if(frect.y - mrect.y <= frect.height/2 + mrect.height/2&&mrect.y - frect.y <= frect.height/2 + mrect.height/2 ){
    frect.velocityY=frect.velocityY * -1;
    mrect.velocityY=mrect.velocityY * -1;
  }
  frect.debug = true 
  mrect.debug = true
  drawSprites();
}