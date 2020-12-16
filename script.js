var questionsArr = [
  {
    question: "Testing 1 question",
    answers: ["w", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question: "Testing 2 question",
    answers: ["a", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question: "Testing 3 question",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question: "Testing 4 question",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A",
  },
];
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

  function writeQuestions() {
    startBtn.empty();
    $("#title").empty().append("Question 1");
    $("#question").empty();
    $("#start").removeClass("btn btn-primary");

    for (var i = 0; i < questionsArr.length; i++) {
      $("#question").text(questionsArr[i].question);
      $("#choiceA").addClass("btn btn-primary").text(questionsArr[i].answers[0]);
      $("#choiceB").addClass("btn btn-primary").text(questionsArr[i].answers[1]);
      $("#choiceC").addClass("btn btn-primary").text(questionsArr[i].answers[2]);
      $("#choiceD").addClass("btn btn-primary").text(questionsArr[i].answers[3]);
    }
  }
});
// console.log(questionsArr[i].question)
//     $("#choiceA")
//       .addClass("btn btn-primary")
//       .append(questionsArr[0].answers[0]);
//     $("#choiceB").addClass("btn btn-primary").append(questionsArr.answers);
//     $("#choiceC").addClass("btn btn-primary").append(questionsArr.answers);
//     $("#choiceD").addClass("btn btn-primary").append(questionsArr};
