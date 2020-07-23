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
//# Restart Button
var restart = document.getElementById("restart");
//#TODO: Add Event Listeners to your answer choice variables.
//# First Quiz Question
q1a1.addEventListener("click", mars1);
q1a2.addEventListener("click", venus1);
q1a3.addEventListener("click", jupiter1);
q1a4.addEventListener("click", saturn1);
//# Second Quiz Question
q2a1.addEventListener("click", mars2);
q2a2.addEventListener("click", venus2);
q2a3.addEventListener("click", jupiter2);
q2a4.addEventListener("click", saturn2);
//# Third Quiz Question
q3a1.addEventListener("click", mars3);
q3a2.addEventListener("click", venus3);
q3a3.addEventListener("click", jupiter3);
q3a4.addEventListener("click", saturn3);
//# Restart Button
restart.addEventListener("click", restartQuiz);
//#TODO: Define quiz functions here
function mars1() {
  marsScore += 1;
  questionCount += 1;
  //alert("One point to Mars!");
  //Disables Buttons after answering first question
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;

  if (questionCount >= 3) {
    updateResult();
  }
}
function venus() {
  venusScore += 1;
  questionCount += 1;
  //alert("One point to Venus!");
  //Disables Buttons after answering first question
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  if (questionCount >= 3) {
    updateResult();
  }
}
function jupiter() {
  jupiterScore += 1;
  questionCount += 1;
  //alert("One point to Jupiter!");
  //Disables Buttons after answering first question
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  if (questionCount >= 3) {
    updateResult();
  }
}
function saturn() {
  saturnScore += 1;
  questionCount += 1;
  //alert("One point to Saturn!");
  //Disables Buttons after answering first question
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (marsScore >= 2) {
    result.innerHTML = "Mars!";
  } else if (venusScore >= 2) {
    result.innerHTML = "Venus!";
  } else if (jupiterScore >= 2) {
    result.innerHTML = "Jupiter!";
  } else if (saturnScore >= 2) {
    result.innerHTML = "Saturn!";
  } else {
    result.innerHTML =
      "Hmm... It looks like you are an exoplanet! They're beyond our own solar system.";
  }
}
//Restart Button
function restartQuiz() {
  result.innerHTML = "Your result is...";
  var questionCount = 0;
  var marsScore = 0;
  var venusScore = 0;
  var jupiterScore = 0;
  var saturnScore = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;

  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
}
