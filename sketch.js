const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var py1, py2, py3, py4, py5;

function setup() {
  createCanvas(1350, 650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 625, 1500, 50);
  box1 = new Box(400, 600, 50, 50);
  box2 = new Box(450, 600, 50, 50);
  box3 = new Box(500, 600, 50, 50);
  box4 = new Box(550, 600, 50, 50);
  box5 = new Box(600, 600, 50, 50);
  box6 = new Box(425, 550, 50, 50);
  box7 = new Box(475, 550, 50, 50);
  box8 = new Box(525,550, 50, 50);
  box9 = new Box(575, 550, 50, 50);
  box10 = new Box(450, 500, 50, 50);
  box11 = new Box(500, 500, 50, 50);
  box12 = new Box(550, 500, 50, 50);
  box13 = new Box(475, 450, 50, 50);
  box14 = new Box(525, 450, 50, 50);
  box15 = new Box(500, 400, 50, 50)
  box16 = new Box(700, 600, 50, 50);
  box17 = new Box(750, 600, 50, 50);
  box18 = new Box(800, 600, 50, 50);
  box19 = new Box(850, 600, 50, 50);
  box20 = new Box(900, 600, 50, 50);
  box21 = new Box(725, 550, 50, 50);
  box22 = new Box(775, 550, 50, 50);
  box23 = new Box(825,550, 50, 50);
  box24= new Box(875, 550, 50, 50);
  box25 = new Box(750, 500, 50, 50);
  box26 = new Box(800, 500, 50, 50);
  box27 = new Box(850, 500, 50, 50);
  box28 = new Box(775, 450, 50, 50);
  box29 = new Box(825, 450, 50, 50);
  box30 = new Box(800, 400, 50, 50);
  box31 = new Box(1000, 600, 50, 50);
  box32 = new Box(1050, 600, 50, 50);
  box33 = new Box(1100, 600, 50, 50);
  box34 = new Box(1150, 600, 50, 50);
  box35 = new Box(1200, 600, 50, 50);
  box36 = new Box(1175, 550, 50, 50);
  box37 = new Box(1125, 550, 50, 50);
  box38 = new Box(1075,550, 50, 50);
  box39 = new Box(1025, 550, 50, 50);
  box40 = new Box(1150, 500, 50, 50);
  box41 = new Box(1100, 500, 50, 50);
  box42 = new Box(1050, 500, 50, 50);
  box43 = new Box(1125, 450, 50, 50);
  box44 = new Box(1075, 450, 50, 50);
  box45 = new Box(1100, 400, 50, 50)
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("red", "pink");
  box2.display("red", "pink");
  box3.display("red", "pink");
  box4.display("red", "pink");
  box5.display("red", "pink");
  box6.display("indigo", "pink");
  box7.display("indigo", "pink");
  box8.display("indigo", "pink");
  box9.display("indigo", "pink");
  box10.display("green", "pink");
  box11.display("green", "pink");
  box12.display("green", "pink");
  box13.display("orange", "pink");
  box14.display("orange", "pink");
  box15.display("saffron", "pink");
  box16.display("red", "pink");
  box17.display("red", "pink");
  box18.display("red", "pink");
  box19.display("red", "pink");
  box20.display("red", "pink");
  box21.display("indigo", "pink");
  box22.display("indigo", "pink");
  box23.display("indigo", "pink");
  box24.display("indigo", "pink");
  box25.display("green", "pink");
  box26.display("green", "pink");
  box27.display("green", "pink");
  box28.display("orange", "pink");
  box29.display("orange", "pink");
  box30.display("saffron", "pink");
  box31.display("red", "pink");
  box32.display("red", "pink");
  box33.display("red", "pink");
  box34.display("red", "pink");
  box35.display("red", "pink");
  box36.display("indigo", "pink");
  box37.display("indigo", "pink");
  box38.display("indigo", "pink");
  box39.display("indigo", "pink");
  box40.display("green", "pink");
  box41.display("green", "pink");
  box42.display("green", "pink");
  box43.display("orange", "pink");
  box44.display("orange", "pink");
  box45.display("saffron", "pink");
 





}