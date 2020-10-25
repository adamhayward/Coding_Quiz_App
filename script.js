// Question & answer asignments
var questionsArr = { 
    question: "1. Quesiton",
    answers: [
        "A",
        "B",
        "C",
        "D",
    ],

    question: "2. Quesiton",
    answers: [
        "A",
        "B",
        "C",
        "D",
    ],
 
    question: "3. Quesiton",
    answers: [
        "A",
        "B",
        "C",
        "D",
    ],
    
    question: "4. Quesiton",
    answers: [
        "A",
        "B",
        "C",
        "D",
    ],

    question: "5. Quesiton",
    answers: [
        "A",
        "B",
        "C",
        "D",
    ],  
}
// assigning varibles to specific parts of HTML doc.
var timer = document.getElementById("count-down");
var h3El = document.querySelector("h3");
var greeting = document.getElementById("greeting");
var startBtn = document.getElementById("start");
var answers = document.getElementById("answers");

var timerInterval;
var timeCount = 75;
var idx_question = 0;
var scoreCount = 0;

/* Creating functions:
creates the timer's text & presents time remaining for timeCount var. */
function setCounterText() {
timer.textContent = "Time Remaining: " + timeCount;
}
// Assining inital text to be presented to user on HTML doc.
function startScreen() {
h3El.textContent = "Java Script Quiz";
greeting.textContent = "The timer will begin once you hit start quiz. Your time will go down by 10 seconds for every wrong answer.";
startBtn.textContent = "Start";
answers.style.display = "none";
}
// Initiates the startScreen Function. 
startScreen();
// Initiats the time. 
setCounterText();
// assinging fucniton to be carried out after start button is initiated.
startBtn.addEventListener("click", function (event) {
event.preventDefault()
scoreCount = 0;
startBtn.style.display = "none";
answers.style.display = "block";
greeting.textContent = " ";
});
