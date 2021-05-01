var canvas;
var music;
var Box1,Box2,Box3,Box4;
var movingBox
var edge=createEdgeSprites();

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //creating box sprite 
    Box1=createSprite(680,550,170,20)
    Box1.shapeColor="red"

     Box2=createSprite(480,550,170,20)
     Box2.shapeColor="green "

     Box3=createSprite(280,550,170,20)
     Box3.shapeColor="blue"
    
     Box4=createSprite(90,550,170,20)
     Box4.shapeColor="yellow"

     movingBox=createSprite(random(20,750),300,35,35)
     movingBox.shapeColor="white"
     movingBox.velocityX=-2;
     movingBox.velocityY=5;

     edge[0]
     edge[1]
     edge[2]
     edge[3]

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    drawSprites();

}
