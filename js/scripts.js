$(document).ready(function() {
 console.log("readY")
  animations=['animated fadeInLeft','animated fadeInRight','animated zoomInRight','animated jello','animated tada','animated lightSpeedIn','animated flipInX'];
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
    image:"Sketch010.jpg",
    scenario:"how you find being buried alive with your king?",
    responses:["It would make me happy","I WANT TO DIE NOW GOD HELP!!!!!!","meh" ],

    scores:[100,0,50]

   },
   
   {
    image:"Sketch011.jpg",
    scenario:"how smokey are your streets?",
    responses:["what does smoky mean?","I can't see my friend from 3 streets away","I cough" ],

    scores:[0,50,100]

   },
   {
    image:"Sketch009.jpg",
    scenario:"are you scared of mummies?",
    responses:["AAAAAAAAAAAAAAAA","I sleep with one","yes" ],

    scores:[50,50,50]

   },
   {
    image:"Sketch013.jpg",
    scenario:"What is a Pharoah",
    responses:["A God","A King","A holiday destination in Portugal" ],

    scores:[50,100,0]

   },
   {
    image:"rosetta_stone_hieroglyphs.jpg",
    scenario:"how do you write",
    responses:["left to right","right to left","how the heck I want to" ],

    scores:[50,50,100]

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

   }*/]
intro='';
good='Do you have a time machine!?';
notBad='Not bad, you might survive about a year.';
rubbish='Maybe you should try Ancient Greece!'; 
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

a=document.getElementById("illus").src="./images/"+question.image;
 

document.getElementById("question").innerHTML=question.scenario;
document.getElementById("resA").innerHTML=question.responses[0];
document.getElementById("resB").innerHTML=question.responses[1];
document.getElementById("resC").innerHTML=question.responses[2];
console.log(animations[currentQ])
$(illus).addClass(animations[currentQ]);


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
  if (score<(maxTotal/4)){judgement=rubbish;
  document.getElementById("illus").src="./images/rubbish.jpg";}
  else if (score>(maxTotal*0.75)){judgement=good;
document.getElementById("illus").src="./images/good.jpg"}
    else {judgement=notBad;
    document.getElementById("illus").src="./images/notbad.jpg";}
    document.getElementById("resA").innerHTML="";
document.getElementById("resB").innerHTML="";
document.getElementById("resC").innerHTML="";
document.getElementById("question").style.fontSize = "200%";
document.getElementById("question").innerHTML=judgement;
$(illus).addClass('animated hinge');
}