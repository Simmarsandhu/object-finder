var status="";
function preload(){

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(500,300);
    video= createCapture(VIDEO);
    video.hide()

}
function draw(){
    image(video,0,0,600,500);
}
function start(){
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    detect=document.getElementById("input_detect").value;
}
function modelLoaded() {
	console.log('Model Loaded!');
    status=true;
  }