var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var redBalloons,greenBalloons,blueBalloons,pinkBalloons,arrowgroup;

var score=0;
 
var start=1;
var gameState=start;
//var gameState=play;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    

   redBalloons = new Group();
   greenBalloons = new Group();
   blueBalloons = new Group();
   pinkBalloons = new Group();
   arrowgroup = new Group();


}

function draw() {
 background(0);

  // moving ground
  scene.velocityX = -3 ;

  if (scene.x < 0){
    scene.x = scene.width/2;
  }

//moving bow
bow.y = World.mouseY


   if (keyWentDown("space")) {
    createArrow();
  }


  //creating continous enemies
var select_balloon = Math.round(random(1,4));
  
if (World.frameCount % 100 == 0) {
  if (select_balloon == 1) {
    redBalloon();
  } else if (select_balloon == 2) {
    greenBalloon();
  } else if (select_balloon == 3) {
    blueBalloon();
  } else {
    pinkBalloon();
  }
}  

if (arrowgroup.isTouching(redBalloons)){
  redBalloons.destroyEach();
  arrowgroup.destroyEach();
  score=score+1
}

if (arrowgroup.isTouching(greenBalloons)){
  greenBalloons.destroyEach();
  arrowgroup.destroyEach();
  score=score+2
}

if (arrowgroup.isTouching(blueBalloons)){
  blueBalloons.destroyEach();
  arrowgroup.destroyEach();
  score=score+3
}

if (arrowgroup.isTouching(pinkBalloons)){
  pinkBalloons.destroyEach();
  arrowgroup.destroyEach();
  score=score+4
}


 drawSprites();


  if(gameState===start){
    
    fill("white");
    text("USE SPACE KEY TO ARROW-SMITTEN",100,50);
    text("BURST RED BALLON AND GET 1 POINT",100,80);
    text("BURST GREEN BALLON AND GET 2 POINT",100,110);
    text("BURST BLUE BALLON AND GET 3 POINT",100,140);
    text("BURST PINK BALLON AND GET 4 POINT",100,170);

    text("बाण फेन्कने के लिये SPACE दबाये",100,250);
    text("लाल गुब्बारा फोडें और १ अंक प्राप्त करे",100,280);
    text("हरा गुब्बारा फोडें और २ अंक प्राप्त करे",100,310);
    text("नीला गुब्बारा फोडें और ३ अंक प्राप्त करे",100,340);
    text("गुलाबी गुब्बारा फोडें और ४ अंक प्राप्त करे",100,370);

    fill("blue");
    text("PRESS ENTER TO START GAME",100,200);
    text("खेल शुरू करणे के लिये ENTER दबाये",100,220);

    if(keyDown("enter")){
      gameState="play";
    }//keyDown"enter"


    }//start

    

    fill("0");
  textSize=20;
  text("Score: "+ score, 300,65);


  



}//function draw




  





// Creating  arrows for bow
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;


  arrowgroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  redBalloons.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

  blueBalloons.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;

  greenBalloons.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.5

  pinkBalloons.add(pink);

}

