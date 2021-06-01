const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,wrapper1,wrapper2,bottle,bin;
var wrapper1img,wrapper2img,bottleimg,binimg;
var garbageCollected=0;
var bts,btsimg;
var gamestate=1;
var cleanallimg;
var bgs;

function preload() {
 
  
  bg= loadImage("background.jpg")
  wrapper1img= loadImage("wrapper.png")
  wrapper2img=loadImage("wrapper1.png")
  bottleimg=loadImage("bottle.png")
  binimg=loadImage("bin.png")
  btsimg=loadImage("trashmeme.jpg")
  cleanallimg=loadImage("clean.png")
  bgs=loadSound("bgmusic.mp3")
  
}

function setup() {
  createCanvas(1000,500);
 
  engine = Engine.create();
  world = engine.world;
  
  bin=createSprite(100,380)
  bin.addImage(binimg)

  wrapper1=createSprite(400,400)
  wrapper1.addImage(wrapper1img)
  wrapper1.scale=0.2

  wrapper2=createSprite(700,370)
  wrapper2.addImage(wrapper2img)
  wrapper2.scale=0.4
  
  bottle=createSprite(500,480)
  bottle.addImage(bottleimg)
  bottle.scale=0.4

  bts=createSprite(900,400)
  bts.addImage(btsimg)
  bts.scale=0.5

 

  bgs.loop()
 
  
  
}

function draw() {
  background(cleanallimg);

  if(gamestate=1 && frameCount>240){
    gamestate=2;
 }
 
 if(gameState=1){
   fill("green")
   textSize(20)
  text("welcome to the game fellas!!. you will see a lot of garbage in the next slide  .",100,400)
  text(". you have the power to delete the trash with your finger tips,tap on the trash to delete them .",100,430)
 }

  if(gamestate===2){
    background(bg);
    drawSprites();
 }

  
if(mousePressedOver(wrapper1)){
wrapper1.destroy()
garbageCollected=garbageCollected+1;
}

if(mousePressedOver(wrapper2)){
  wrapper2.destroy()
  garbageCollected=garbageCollected+1;
  }

  if(mousePressedOver(bottle)){
    bottle.destroy()
    garbageCollected=garbageCollected+1;
    }

    if(mousePressedOver(bts)){
      bts.destroy()
      garbageCollected=garbageCollected+100
      }
  
      text("garbageCollected: "+ garbageCollected,400,20)

      if(garbageCollected>103){
        fill("cyan")
        textSize(20)
        text("congratulations you have cleaned the garbage in your surrounding well done",200,250)
      }

}