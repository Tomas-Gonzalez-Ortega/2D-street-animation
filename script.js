/**
 * Lab 9
 * Tomas Gonzalez
 * CPSC 2130 Multimedia and Animation
 **/
var theCanvas = document.querySelector("#theCanvas");
var ctx = theCanvas.getContext("2d");
var xRight = 0;
var xLeft = 0;
var yUp = 0;
var yDown = 0;
var nonClockWise = 0;
var clockWise = 0;
var carX = 0;
var carY = 220;
var carDegree = 0;
var buggy = new Image();
buggy.src = "images/buggy.gif";
buggy.onload = function () {
    animate();
}
var peaceMaker = new Image();
peaceMaker.src = "images/peaceMaker.gif";
peaceMaker.onload = function () {
    //animate();
}

var car = new Image();
car.src = "images/car.png";
car.onload = function () {}

function animate() {
    xRight += 2;
    xLeft -= 2;
    yUp -= 2;
    yDown += 2;
    nonClockWise -= 0.5;
    clockWise += 0.5;
    ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
    // canvas background color grey
    ctx.fillStyle = "#9ea7b8";
    ctx.fillRect(0, 0, 1000, 500);
    theCanvas.style.opacity = '0.8';
    // top green yard
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0, 0, 1000, 100);
    // top white sidewalk top line
    ctx.moveTo(0, 100);
    ctx.lineTo(1000, 100);
    ctx.stroke();
    // top white sidewalk bottom line
    ctx.moveTo(0, 130);
    ctx.lineTo(1000, 130);
    ctx.stroke();
    // bottom left green yard
    ctx.fillRect(0, 350, 350, 400);
    // bottom left white sidewalk top line
    ctx.moveTo(0, 320);
    ctx.lineTo(350, 320);
    ctx.stroke();
    // left arc
    ctx.arc(350, 350, 30, Math.PI * 1.5, Math.PI * 0.05);
    // bottom left white sidewalk bottom line
    ctx.moveTo(0, 350);
    ctx.lineTo(350, 350);
    ctx.stroke();
    // bottom vertical white sidewalk left line - right
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 500);
    ctx.stroke();
    // bottom vertical white sidewalk left line - left
    ctx.moveTo(380, 350);
    ctx.lineTo(380, 500);
    ctx.stroke();
    // bottom right green yard
    ctx.fillRect(650, 350, 1000, 400);
    // bottom right white sidewalk top line
    ctx.moveTo(650, 320);
    ctx.lineTo(1000, 320);
    ctx.stroke();
    // right arc
    ctx.arc(650, 350, 30, Math.PI * 1.5, Math.PI * 1, Math.PI * 0.05);
    // bottom right white sidewalk bottom line
    ctx.moveTo(650, 350);
    ctx.lineTo(1000, 350);
    ctx.stroke();
    // bottom vertical white sidewalk right line - right
    ctx.moveTo(620, 500);
    ctx.lineTo(620, 350);
    ctx.stroke();
    // bottom vertical white sidewalk right line - left
    ctx.moveTo(650, 500);
    ctx.lineTo(650, 350);
    ctx.stroke();
    // Yellow left line
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(0, 220, 300, 5);
    // Yellow right line
    ctx.fillRect(750, 220, 300, 5);
    // pedestrian crosswalks
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(700, 131, 10, 188);
    ctx.fillRect(650, 131, 10, 188);
    // car stop lines
    ctx.fillRect(740, 131, 10, 94);
    ctx.fillRect(300, 220, 10, 98);
    ctx.fillRect(510, 350, 108, 10);
    // traffic lights posts
    ctx.fillStyle = "#000000";
    //top post
    ctx.fillRect(600, 5, 10, 115);
    // right post
    ctx.fillRect(730, 225, 10, 115);
    // left post
    ctx.fillRect(300, 95, 10, 115);
    ctx.fillRect(300, 95, 108, 10);
    // TRAFFIC LIGHTS ! 
    // TOP TRAFFIC LIGHT
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(610, 5, 92, 25);
    //RIGHT TRAFFIC LIGHT
    ctx.fillRect(638, 226, 92, 25);
    // LEFT TRAFFIC LIGHT
    ctx.fillRect(310, 185, 92, 25);
    //Top Traffic light - red
    ctx.beginPath();
    ctx.arc(628, 17, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Top Traffic light - yellow
    ctx.beginPath();
    ctx.arc(656, 17, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Top Traffic light - green
    ctx.beginPath();
    ctx.arc(685, 17, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Right Traffic light - red
    ctx.beginPath();
    ctx.arc(655, 238, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Right Traffic light - yellow
    ctx.beginPath();
    ctx.arc(684, 238, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //RIght Traffic light - green
    ctx.beginPath();
    ctx.arc(715, 238, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Left Traffic light - red
    ctx.beginPath();
    ctx.arc(325, 198, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Right Traffic light - yellow
    ctx.beginPath();
    ctx.arc(355, 198, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    //Right Traffic light - green
    ctx.beginPath();
    ctx.arc(385, 198, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#003300';
    
    ctx.stroke();
    // Cars straight line
    ctx.drawImage(buggy, xRight - 280, 220);
    ctx.drawImage(peaceMaker, xLeft + 1000, 120);
    
    //Turning car
    carX += 2;
    if (carX > 330 && carDegree < 90){
        carDegree += 1;
        carX += 0;
        carY += 2;
        if (carY > 350)
            carY += 4; //the accelerates after turning
    }
    ctx.save();
    ctx.translate(carX, carY);
    ctx.rotate(carDegree*Math.PI/180);
    ctx.drawImage(car, 0, 0);
    ctx.restore();
    window.requestAnimationFrame(animate, 33);
}

/*
if(blueCarY , majorRoadCenterY - majorRoadHeight/5 && bluecarRotateDegree > 0.01) {
    blueCarX -+1.8;
    blueCarY -+ 0.3;
    blueCarRotateDegree -+ 0.02;
}


function updateGame(){
    window.setTimeout(updateGame, 33);
    window.requestAnimationFrame(drawGame, 33);
}

function drawGame(){
    ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
    // draw images
    //draw the intersection
    x =+ 1.8;
    y +=0.3;
    degree += 0.1;
    ctx.save();
    ctx.translate();
    ctx.rotate();
    ctx.drawImage();
    ctx.restore();
    
// ASSUME YOU HAVE 6 MOVES AND YOU WANT THEM TO REPEAT
vars cars = [0, 1, 2];

for(int i = 0; i < 3; i++){
    switch(cars[i]){
        case 0: // make the car move
                // if it reaches the end 
                cars[i]=3;
        case 1:
            :
        case 2:
    }
}
}
*/