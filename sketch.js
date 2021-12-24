var canvas;
var u1, u1_, u1_a, u1a, u1Group;
var balasImg, balas, balasGroup;
var background0, background0_;
var score;
var num=0;

function preload(){
  u1_= loadImage("p1_.png");
  u1_a= loadImage("p1.png");
  balasImg= loadImage("balas.png");
 // u1_a= loadImage("p1.png");
  background0_ = loadImage("fondo2.png");
}

function setup() {
  canvas = createCanvas(700, 400);
  score = 0;
  u1Group = new Group();
  balasGroup = new Group()
  player(u1)
  
}

function draw() {
  background(background0_);
  super1();
  if(num==360){
  num=0;
  }
  
  drawSprites();
}

function mouseDragged(){
  u1a.x = mouseX
  u1a.y = mouseY
  balas.x = mouseX
  balas.y = mouseY
}

function mouseClicked() {
  u1a = createSprite(640,36,20,20)
  u1a.addImage(u1_a)
  u1a.scale = 0.10; 
  u1Group.add(u1a)
  
  
 }

 function super1(){
    num = num +5;
    u1Group.setRotationEach(num);
    console.log(num)

    switch(num){

      case '90':
              balas(90,0,1)
  
        break;
  
      case '160':
            balas(160,1,0)
        break;
  
      case '270':
            balas(270,0.-1)
        break;
  
      case '360':
            balas(360,-1,0)
        break;
      default: 
        break;    
    }
 }

 function player(player){
  player = createSprite(640,40,20,20)
  player.addImage(u1_)
  player.scale = 0.12;
 }


 function bala(grades,x,y){
  balas = createSprite(u1a.x ,u1a.x ,20,20)
  balas.addImage(balasImg)
  balas.rotation = grades;
  balas.velocityX = x;
  balas.velocityY = y;
  balas.scale = 0.14;
  balas.lifetime = 100;
  balasGroup.add(balas)
 }

