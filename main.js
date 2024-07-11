noseX=0;
noseY=0;

function preload(){
noseImg=loadImage('https://th.bing.com/th/id/R.d87be25cd0ddb28b62a682a394a0d869?rik=DZ9iuqO2pWSrhQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fm%2fI%2fn%2f1%2fT%2fP%2forange-dot-hi.png&ehk=cFL7wHtP18EQ7jQIdelGFrhADvQbaJpppmjbMOqOMPo%3d&risl=&pid=ImgRaw&r=0');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();  

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x="+noseX);
    console.log("nose y="+noseY);
}
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20)
}