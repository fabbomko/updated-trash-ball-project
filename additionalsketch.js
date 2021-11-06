
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let groundObj;
let leftWall;
let rightWall;
let engine;
let world;

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.8,
		density: 1.5,
	}
	//To add in more properties to diferrentiate it, you use a COMMA in this case where multiple values are for one variable
	//isStatic = OBJECT WILL NOT MOVE (we make it true when we want it to be a FIXED OBJECT)
	//in this case since we want the ball to move we make the isStatic property false

	//Create the Bodies Here.

	ball = Bodies.circle(200, 550, 20, ball_options);
	World.add(world, ball);


	groundObj = new Ground(width / 2, 670, width, 20);
	leftWall = new Ground(1100, 600, 20, 120);
	rightWall = new Ground(1400, 600, 20, 120);

	Engine.run(engine);

}

//update engine here
function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x, ball.position.y, 20);
	//since it is a circle we use the js command which is ellipse in this case
	drawSprites();
	groundObj.display();
	leftWall.display();
	rightWall.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball, ball.position, {
			x: 50,
			y: -45,

		});
	}
	//module bodies is to create the objects
	//so apply properties to the object through bodies
	//ALWAYS use colon in java script function
	//ball.position is reference to INITIAL position
	//third parameters here in apply force is velocity with it in terms of x and y
	//when you want multiple values for one variable you use an ARRAY so it uses COLON in javascript

	//we display the object now through the Body module, and so we NEED it in order to affect the SPECIFIC object which we indicate in the first parameter


}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		Body.applyForce(ball, ball.position, {
			x: -50,
			y: -40,
		})
	}
}


