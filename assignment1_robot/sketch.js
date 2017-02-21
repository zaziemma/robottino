function setup() {
  createCanvas(800,800);
}

function draw() {
  background(200);
  translate(width/2, height/2);
 
 
  //neck
  stroke(100);
  strokeWeight(2);
  line(0,-100,0,60);
  line(-10,-100,-10,60);
  line(10,-100,10,60);
  
  //antennas
  line(0,-100,35,-225);
  line(0,-100,70,-80);
  line(0,-100,-45,-145);
  
  //head
  noStroke();
  fill(0);
  ellipse(0,-100,100,100);
  fill(255);
  ellipse(10,-110,40,40);
  fill(0);
  ellipse(10,-110,9,9);
  fill(100);
  ellipse(-22,-110,9,9);
  ellipse(22,-135,7,7);
  ellipse(29,-90,5,5);
 
  
  
  //body
  fill(100);
  ellipse(-20,140,80,80);
  fill(0);
  rect(-70,10,100,140);
  fill(100);
  rect(-70,28,100,8);
  

}