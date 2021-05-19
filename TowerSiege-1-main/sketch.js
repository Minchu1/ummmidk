const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var rope;

function setup(){
var canvas = createCanvas(600,500);
background=background("black")
engine = Engine.create();
world = engine.world;

ground= new Ground(250,350,150,5);
groundo= new Ground(450,250,150,5);


block2 = new Box(220,335,20,30);
block3 = new Box(240,335,20,30);
block4 = new Box(260,335,20,30);
block5= new Box(280,335,20,30);
//lv 2
block6 = new Box(220,310,20,30);
block7 = new Box(240,310,20,30);
block8 = new Box(260,310,20,30);
block9= new Box(280,310,20,30);

ball= new Ball(100,240,30);
rope=new Rope(ball.body,{x:100,y:200});

}

function draw(){
    ground.display();
    groundo.display();
   
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    ball.display();
    rope.display();

}