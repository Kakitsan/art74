var img;
var initials ='jj'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=1; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('banlogo.jpg');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
let current;
let snowflake = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = new Particle(height/2, 0);
}

function draw() {
  translate(width/2, height/2);
  rotate(PI/6);
  background(0);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  // If a particle doesn't move at all we're done
  // This is an exit condition not implemented in the video
  if (count == 0) {
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(height/2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI/3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}

    
  } else if (toolChoice == '2') { // second tool

    stroke(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    stroke(300, 100, 0, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox();
    // make testbox do something!
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    fill(255, 0, 0);
    triangle(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '7') {

    fill(255, 0, 100,80);
    ellipse(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(0, 255, 127, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {
      for (var y = 0; y <= height; y += 40) {    for (var x = 0; x <= width; x += 40) {
      fill(255, 140);      ellipse(x, y, 40, 40);    }  }
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox() {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(200, 20, 20);
  rect(30+x, 120+y, 100, 100);
  fill(20, 20, 200);
  rect(x-34, y-56, 100, 100);
  fill(20, 20, 20);
  rect(x,y,x+34, y+20);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
