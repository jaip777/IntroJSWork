noStroke();
var x = 135;
var y = 269;
var faceSize = 394;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
var eyeSize = faceSize/8;
ellipse(x-faceSize/4, y-faceSize/8, eyeSize, eyeSize);
ellipse(x+faceSize/4, y-faceSize/8, eyeSize, eyeSize);



//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

