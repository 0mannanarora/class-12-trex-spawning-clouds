var trex, trex_running, edges;
var groundImage;
var ground_1;
var invisibleground
var cloud
var cloud_1

function preload()
{
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");

  groundImage = loadImage("ground2.png");

  cloud_1 = loadImage("cloud.png")

}

function setup()
{
  createCanvas(600,200);
  
  // creating trex
  //adding scale and position to trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50

  edges = createEdgeSprites();

  ground_1 = createSprite(300,190,600,10)
  ground_1.addImage(groundImage);
  ground_1.velocityX = -5

  invisibleground = createSprite(300,200,600,10);
  invisibleground.visible = false;

  
}


function draw()
{
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)

  if (ground_1.x<0)
  {
    ground_1.x=300
  }
  
  //jump when space key is pressed
  if(keyDown("space") && (trex.y>171))
  {

    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleground)


   
  spawnCloud();
  drawSprites();
}

function spawnCloud ()
{
  
  
  if (frameCount%35===0)
   {
    cloud = createSprite(600,25,10,10)
    cloud.velocityX = -5
    cloud.y = Math.round(random(10,50))
    cloud.addImage(cloud_1)
    cloud.scale = 0.5
    cloud.depth = trex.depth;
    trex.depth=trex.depth+1
   }
}