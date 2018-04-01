$(document).ready(function() {
 console.log("readY")
 theQuestions= [{
    image:"pic1.jpg",
    scenario:"Your favourite 3D solid is...",
    responses:["pyramid","cube","sphere" ],

    scores:[100,50,0]

   },{
    image:"pic2.jpg",
    scenario:"what food do you like...",
    responses:["Pizza","Fish","Honey" ],

    scores:[0,50,100]

   },{
    image:"pic3.jpg",
    scenario:"how you find being buried alive with your king?",
    responses:["happy","I WANT TO DIE NOW GOD HELP!!!!!!","meh" ],

    scores:[100,0,50]

   },
  /* {
    image:"placehold.jpg",
    scenario:"",
    responses:["a","b","c" ],

    scores:[50,50,50]

   },
   {
    image:"placehold.jpg",
    scenario:"",
    responses:["a","b","c" ],

    scores:[50,50,50]

   },
   {
    image:"placehold.jpg",
    scenario:"",
    responses:["a","b","c" ],

    scores:[50,50,50]

   },
   {
    image:"placehold.jpg",
    scenario:"",
    responses:["a","b","c" ],

    scores:[50,50,50]

   },
   {
    image:"placehold.jpg",
    scenario:"",
    responses:["a","b","c" ],

    scores:[50,50,50]

   },
   {
    image:"placehold.jpg",
    scenario:"",
    responses:["a","b","c" ],

    scores:[50,50,50]

   }*/]
score=0;
maxQs=theQuestions.length;
currentQ=0;
restart=false;
start=true;
document.getElementById("buttA").addEventListener("click", function(){
    onSubmit(0);
});
document.getElementById("buttB").addEventListener("click", function(){
    onSubmit(1);
});
document.getElementById("buttC").addEventListener("click", function(){
    onSubmit(2);
});
 

});

 
var displayQuestion=(question)=>{

document.getElementById("illus").src="./images/"+question.image;


document.getElementById("question").innerHTML=question.scenario;
document.getElementById("resA").innerHTML=question.responses[0];
document.getElementById("resB").innerHTML=question.responses[1];
document.getElementById("resC").innerHTML=question.responses[2];



}

var onSubmit=(choice)=>{
if(start){displayQuestion(theQuestions[currentQ]);start=false;}
else if(restart){
     score=0;
     currentQ=0;
     restart=false;
     document.getElementById("buttA").innerHTML="A";
     document.getElementById("buttB").innerHTML="B";
     document.getElementById("buttC").innerHTML="C";
     document.getElementById("question").style.fontSize = "100%";
     displayQuestion(theQuestions[currentQ]);

 }   
 else{
score+=theQuestions[currentQ].scores[choice];
currentQ++;
console.log("score "+score+"currentQ "+currentQ)
if (currentQ===maxQs){
    finish();
}
  else{
  displayQuestion(theQuestions[currentQ]);
}
}
}

var finish=()=>{
    sumUp();
    console.log("GAME OVER")
    document.getElementById("buttA").innerHTML="CLICK";
document.getElementById("buttB").innerHTML="TO";
document.getElementById("buttC").innerHTML="RESTART";
restart=true;

    
}

var sumUp=()=>{
  var maxTotal=maxQs*100;
  var judgement="";
  if (score<(maxTotal/4)){judgement="Rubbish";
  document.getElementById("illus").src="./images/rubbish.jpg";}
  else if (score>(maxTotal*0.75)){judgement="Super";
document.getElementById("illus").src="./images/good.jpg"}
    else {judgement="not bad";
    document.getElementById("illus").src="./images/notbad.jpg";}
    document.getElementById("resA").innerHTML="";
document.getElementById("resB").innerHTML="";
document.getElementById("resC").innerHTML="";
document.getElementById("question").style.fontSize = "200%";
document.getElementById("question").innerHTML=judgement;
}