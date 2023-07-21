function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses);
}

function draW(){
    background('#969A97');
}

function modelloaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
}