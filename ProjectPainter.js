var paintBrush = {
    x: 250,
    y: 250,
    img: getImage("avatars/aqualine-sapling")
};


var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};
mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};


