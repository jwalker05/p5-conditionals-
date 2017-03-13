var x = 0;
var speed = 20;

function setup(){
   createCanvas(600,400);
}

function draw(){
    // i wrote this so background changes to pink when clicked
    background(130, 46, 95);
    if(mouseIsPressed){
        background(173, 31, 80);
    }
    
    //makes outline white, 6px thick, no color inside shapes
    
    stroke(255);
    strokeWeight(6);
    noFill();
    
    if(mouseY<150){
        fill(99, 232, 225);
    }
    else{
        noFill();
    }
    
    //a circle
    rect(x,200,100,100);
    
    //this code is going to get the circle to moved on its own 
   
   
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN!!!!"); 
        speed = speed * -1;
    
    }
    x = x + speed;
    console.log(x);
}