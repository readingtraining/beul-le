//애벌레가 바나나 우유를 먹기를 ...

let ds;
let dsT;
let heart;


function preload() {
    heart = loadImage('/asset/heart.png');
}   

function setup() {
    createCanvas(1000, 330);
}

function draw() {

    background(255);

    //몸
    for(a=90; a<950; a+=40){
        stroke(0);
        line(a, height/2, a, height/2+35);
        line(a, height/2+35, a-8, height/2+35);

        fill(mouseY, 255, (random(255)));
        stroke(mouseY, 255, (random(255)));
        ellipse(a, height/2, 50);
        for(b=height/2-20; b<height/2+25; b+=15){
            fill(0);
            ellipse(a, b, 10);
        }
    }

    //더듬이
    fill(0);
    stroke(0);

    line(40, height/2-21, 30, height/2-35);
    ellipse(30, height/2-35, 5);
    line(60, height/2-21, 70, height/2-35);
    ellipse(70, height/2-35, 5);
    
    for(i=45; i<60; i+=5){
        line(i, height/2-21, i, height/2-30);
        ellipse(i, height/2-30, 2);
    }

    //머리
    fill(0);
    ellipse(50, height/2, 50);

    //얼굴
    stroke(255);
    arc(40, height/2, 10, 10, PI, TWO_PI);
    arc(60, height/2, 10, 10, PI,TWO_PI);
    arc(50, height/2+5, 15, 15, TWO_PI, PI);

    
    ds = dist(mouseX, mouseY, width/2, 50);
    if (ds < 50) {
        fill(100, 255, 100);
    } else {
        fill(0);
    }
    textSize(20);
    textAlign(CENTER, CENTER);
    text('풀먹기', width/2, 50);


    noFill();
    dsT = dist(mouseX, mouseY, width/2, 300);
    if (dsT < 50) {
        for(c=115; c>0; c-=30){
            imageMode(CENTER);
            image(heart, 50, c, 20, 20);
        }
        fill(255, 255, 100);
    } else {
        fill(0);
    }
    text('바나나우유먹기', width/2, 300);
}