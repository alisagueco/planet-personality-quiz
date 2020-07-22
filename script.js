//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var marsScore = 0;
var venusScore = 0;
var jupiterScore = 0;
var saturnScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
//# First Quiz Question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//# Second Quiz Question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//# Third Quiz Question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//# Results
var result = document.getElementById("result");
//#TODO: Add Event Listeners to your answer choice variables.
//# First Quiz Question
q1a1.addEventListener("click", mars);
q1a2.addEventListener("click", venus);
q1a3.addEventListener("click", jupiter);
q1a4.addEventListener("click", saturn);
//# Second Quiz Question
q2a1.addEventListener("click", mars);
q2a2.addEventListener("click", venus);
q2a3.addEventListener("click", jupiter);
q2a4.addEventListener("click", saturn);
//# Third Quiz Question
q3a1.addEventListener("click", mars);
q3a2.addEventListener("click", venus);
q3a3.addEventListener("click", jupiter);
q3a4.addEventListener("click", saturn);
//#TODO: Define quiz functions here
function mars() {
  marsScore += 1;
  questionCount += 1;
  alert("One point to Mars!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function venus() {
  venusScore += 1;
  questionCount += 1;
  alert("One point to Venus!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function jupiter() {
  jupiterScore += 1;
  questionCount += 1;
  alert("One point to Jupiter!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function saturn() {
  saturnScore += 1;
  questionCount += 1;
  alert("One point to Saturn!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function 