var Rainbow = function(x,y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
};
//first rainbow
var rainbows = new Rainbow(200,200,300);
//second rainbow
var secondrainbows = new Rainbow(203,193,220);
//function to draw the rainbows
var drawRainbow = function(rainbow) {
    noFill();
    //colors and arcs of the rainbows
    strokeWeight(5);
    stroke(255, 0, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius, rainbow.radius, 180, 360);
    stroke(250, 200, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius-10, rainbow.radius-10, 180, 360);
    stroke(240, 255, 102);
    arc(rainbow.x, rainbow.y, rainbow.radius-20, rainbow.radius-20, 180, 360);
    stroke(29, 255, 13);
    arc(rainbow.x, rainbow.y, rainbow.radius-30, rainbow.radius-30, 180, 360);
    stroke(122, 155, 255);
    arc(rainbow.x, rainbow.y, rainbow.radius-40, rainbow.radius-40, 180, 360);
};
//both rainbows are drawin
drawRainbow(rainbows);
drawRainbow(secondrainbows);
