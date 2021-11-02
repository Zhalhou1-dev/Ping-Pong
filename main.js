
function preload() {
    canvas=createCanvas(500,300);
    canvas.center();
	video=createCapture(VIDEO);
	video.size(500,300);
canvas.parent("MyCanvas");

    
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose', gotPoses);
}
function draw(){
 image(video,0,0,500,300);
}
