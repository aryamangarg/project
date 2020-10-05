const constraint=matter.constraint
const engine=matter.engine
const bodies =matter.bodies
const world =matter.world
var hex,heximg
var engine,world
var box,ground
var platform
var SlingShot
function preload(){
  heximg=loadImage("hex.png")
}


function setup() {
  createCanvas(800,400);
 hex= createSprite(50,100);
 hex.addImage(heximg)
   ground=new ground(400,300,800,5)
  SlingShot= new SLingShot(hex.body,{x:50,y:100})
  /*level1*/
  box= new box(300,275,30,40)
   box2= new box(330,275,30,40)
    box3= new box(360,275,30,40)
     box4= new box(390,275,30,40)
     box5=new box(420,275,30,40)
     box6= new box(450,275,30,40)
     box7= new box(480,275,30,40)
  //level2
  box8=new box(330,235,30,40)
  box9=new box(360,235,30,40)
  box10=new box(390,235,30,40)
  box11=new box(420,235,30,40)
box12= new box(450,235,30,40)
/*level3*/
box13=new box(360,195,30,40)
box14=new box(390,195,30,40)
box15=new box(420,195,30,40)
//top
box16=new box(390,155,30,40)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}