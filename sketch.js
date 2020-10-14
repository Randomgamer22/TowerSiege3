
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ground;
var polygon, slingshot;
var score = 0;
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 500, 400, 10);

	box1 = new Box(340, 480, 80, 80);
	box2 = new Box(420, 480, 80, 80);
	box3 = new Box(500, 480, 80, 80);
	box4 = new Box(580, 480, 80, 80);
	box5 = new Box(660, 480, 80, 80);
	box6 = new Box(420, 400, 80, 80);
	box7 = new Box(500, 400, 80, 80);
	box8 = new Box(580, 400, 80, 80);
	box9 = new Box(500, 320, 80, 80);

	polygon = new Polygon(100, 300, 80, 80);

	slingshot = new SlingShot(polygon.body, {x: 100, y: 300});

	Engine.run(engine);
  
}


function draw() {
	background("#785038");

	fill("black")
	text("SCORE: "+score, 600, 40);

	ground.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();

	box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	box7.score();
	box8.score();
	box9.score();

	polygon.display();

	slingshot.display();

	drawSprites();
 
}

function mouseDragged(){
    if(slingshot.sling.bodyA){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
        Matter.Body.setPosition(polygon.body, {x: 100, y: 300});
        Matter.Body.setAngle(polygon.body, 0);
        Matter.Body.setVelocity(polygon.body, {x: 0, y: 0});
        Matter.Body.setAngularVelocity(polygon.body, 0);
    }
}







