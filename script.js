//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var marsScore = 0;
var venusScore = 0;
var jupiterScore = 0;
var saturnScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", mars);
q1a2.addEventListener("click", venus);
q1a3.addEventListener("click", jupiter);
q1a4.addEventListener("click", saturn);

//#TODO: Define quiz functions here
function mars() {
  marsScore += 1;
  questionCount += 1;
  alert("One point to Mars!");
}
function venus() {
  venusScore += 1;
  questionCount += 1;
   alert("One point to Venus!");
}
function jupiter() {
  jupiterScore += 1;
  questionCount += 1;
   alert("One point to Jupiter!");
}
function saturn() {
  saturnScore += 1;
  questionCount += 1;
  alert("One point to Saturn!");
}
