// Question & answer asignments
const questionsArr =  {

  question: "1. Quesiton",
  answers: ["A", "B", "C", "D"],

  question: "2. Quesiton",
  answers: ["A", "B", "C", "D"],

  question: "3. Quesiton",
  answers: ["A", "B", "C", "D"],

  question: "4. Quesiton",
  answers: ["A", "B", "C", "D"],

  question: "Test",
  answers: ["A) test", "B) test", "C) test", "D) test"],

};
// assigning varibles to specific parts of HTML doc.
var timer = $("#clock");
var mainContent = $(".main-content");

var newBTN = $("<button>");
var greeting = $("#greeting");
var startBtn = $("#start");
var answers = $("#answers");

var timerInterval;
var timeCount = 75;
var idx_question = 0;
var scoreCount;

startBtn.on("click", function (event) {
  event.preventDefault();
  writeQuestions();

  function writeQuestions(){
      startBtn.empty();
      $('#title').empty().append('Question 1');
      $('#question').empty().append(questionsArr.question);
      $('#start').removeClass('btn btn-primary');
      $('#choiceA').addClass('btn btn-primary').append(questionsArr.answers[0]);
      $('#choiceB').addClass('btn btn-primary').append(questionsArr.answers[1]);
      $('#choiceC').addClass('btn btn-primary').append(questionsArr.answers[2]);
      $('#choiceD').addClass('btn btn-primary').append(questionsArr.answers[3]);
  }
});

/* Creating functions:
creates the timer's text & presents time remaining for timeCount var. */
// function setCounterText() {
// timer.append(`Time Remaining: ${timeCount}`);
// }
// // Assining inital text to be presented to user on HTML doc.
// function screen1() {
// h3El.append("Java Script Quiz");
// greeting.append("The timer will begin once you hit start. Your time will go down by 10 seconds for every wrong answer.");
// startBtn.append("Start");
// // answers.style.display = "none";
// }
// // Initiates the screen1 Function.
// screen1();
// // Initiats the time.
// setCounterText();
// // assinging fucniton to be carried out after start button is initiated.
