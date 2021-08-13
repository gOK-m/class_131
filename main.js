img = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#4d4dff");
    text("dog", 150, 75);
    stroke("#b30000");
    noFill();
    rect(30, 60, 412, 498);
}