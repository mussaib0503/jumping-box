var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(100,570,170,40);
box1.shapeColor="blue";
box2=createSprite(260,570,170,40);
box2.shapeColor="red";
box3=createSprite(420,570,170,40);
box3.shapeColor="yellow";  
box4=createSprite(580,570,170,40);
box4.shapeColor="green";

ball=createSprite(40,20,50,50);
ball.shapeColor="white";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    ball.x=mouseX;
    ball.y=mouseY;

if(ball.isTouching(box1)){
    ball.shapeColor="blue";
}
if(ball.isTouching(box2)){
    ball.shapeColor="red";
}
if(ball.isTouching(box3)){
    ball.shapeColor="yellow";
}
if(ball.isTouching(box4)){
    ball.shapeColor="green";
}
music.play();

    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}
