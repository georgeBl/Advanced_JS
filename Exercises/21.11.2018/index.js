function setup(){
  createCanvas(400,400);
  background(0);
  //old code to create circles, now we create them when we click the mouse
  // for(let i=0; i<100;i++){
  //   let circle = new Circle();
  //   circles.push(circle);
  // }
}
//array to store all the circles in the world
let circles =[];

function draw(){
  background(0);
  for(let i=0; i<circles.length; i++){
    circles[i].move();
    circles[i].draw();
  }
}

function mousePressed(){
  //draw a bouncing circle if the mouse is on the right of the screen or normal circle if it is on the other side
  if(mouseX>width/2){
    let bouncingCircle = new BouncingCircle(mouseX,mouseY,50,"green");
    circles.push(bouncingCircle);
  }else{
    let circle = new Circle(mouseX,mouseY);
    circles.push(circle);
  }
}

function Circle(x=50, y=50, r=100, col='#f00'){
  this.x = x;
  this.y = y;
  this.r = r;
  this.col = col;
  this.vx = random(-5,5);
  this.vy = random(-5,5);
}

Circle.prototype.move = function() {
  this.x += this.vx;
  this.y += this.vy;
}

Circle.prototype.draw = function(){
  fill(this.col);
  ellipse(this.x,this.y,this.r,this.r);
}

//defining the new class which is a sub class
function BouncingCircle(x,y,r,col,vx,vy){
  Circle.call(this,x,y,r,col,vx,vy);
}
//inherit from class
BouncingCircle.prototype = Object.create(Circle.prototype);
//inherit the constructor from mama class
BouncingCircle.prototype.constructor = Circle;
//inherit the methods inside the mama class
BouncingCircle.prototype.draw = function(){
  Circle.prototype.draw.call(this);
}
BouncingCircle.prototype.move = function(){
  Circle.prototype.move.call(this);
  if(this.x>width-this.r/2 || this.x<this.r/2){this.vx=this.vx*-1;}
  if(this.y>height-this.r/2 || this.y <this.r/2){this.vy=this.vy*-1;}
}
