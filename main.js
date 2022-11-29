https://teachablemachine.withgoogle.com/models/TJ-S3KQJS/
function start(){
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TJ-S3KQJS/model.json",modelReady);
}
var background_noise=0;
var cat=0;
var dog=0;
var goat=0;
var hen=0;

function modelReady(){
     classifier.classify(gotResults);
}
function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
    console.log(results);

    random_r = Math.floor(Math.random() *255)+1;
    random_g = Math.floor(Math.random() *255)+1;
    random_b = Math.floor(Math.random() *255)+1;

    document.getElementById("identified").innerHTML="Detected Dog: "+dog+", Dectected Cat: "+cat+",Dectected Goat: "+goat+",Dectected Hen: "+hen+", ";
    document.getElementById("identified").style.color='rgb('+random_r+','+random_g+','+random_b+')';

    document.getElementById("label").innerHTML='I can hear the voice of - '+results[0].label;
    document.getElementById("label").style.color='rgb('+random_r+','+random_g+','+random_b+')';

    img=document.getElementById("animal_images");

    if(results[0].label == "Cat"){
      img.src= 'cat.jpeg';
    cat= cat+1;}
    else if(results[0].label == "Dog"){
      img.src= 'dog.jpeg';
    dog = dog+1;}
    else if(results[0].label == "Goat"){
      img.src= 'goat.jpeg';
    goat = goat+1;}
    else if(results[0].label == "Hen"){
      img.src= 'hen.jpeg';
    hen = hen+1;}
    else{ 
      img.src= 'sound.png';
    }
    }
}