difference = 0;
rightWristX = 0;
leftWristX = 0;
input_name = "";
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(450,450);
    canvas.position(900,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialized!');
}

function draw(){
    background('#969A97');

    fill('#ff0058');
    textSize(difference);
    document.getElementById("name").innerHTML = "Width And Height of the name will be =" + difference + "px";
    text('vaishnavi',50,400);
}

function gotPoses(results){
    if (results.length > 0)
     {
      console.log(results);  
    }
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}

function Go(){
    background('#969A97');

    fill('#ff0058');
    textSize(difference);
    document.getElementById("name").innerHTML = "Width And Height of the name will be =" + difference + "px";
    document.getElementById("username").innerHTML = input_name;
    text('input_name',50,400);
}