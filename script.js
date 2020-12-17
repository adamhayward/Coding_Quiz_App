var questionsArr = [
  {
    question: "Testing 1 question",
    answersChoices: ["A1", "B1", "C1", "D1"],
    correctAnswer: "B",
  },
  {
    question: "Testing 2 question",
    answersChoices: ["a", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question: "Testing 3 question",
    answersChoices: ["A", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question: "Testing 4 question",
    answersChoices: ["A", "B", "C", "D"],
    correctAnswer: "A",
  },
];

// arrau to store asked questions
var userAnswers = [];
var checkedAnswer;
var correctAnswer;

// assigning varibles to specific parts of HTML doc.
var timer = $("#clock");
var mainContent = $(".main-content");

var newBTN = $("<button>");
var greeting = $("#greeting");
var startBtn = $("#start");

var questions = [];

// const answers = $("#answers");

var timerInterval;
var timeCount = 75;
var idx_question = 0;
var scoreCount;

startBtn.on("click", function (event) {
  event.preventDefault();
  startBtn.empty();
  writeQuestions();

  function writeQuestions() {
    $("#start").removeClass("btn btn-primary");
    
    for (var i = 0; i < questionsArr.length; i++) {
      $("#title").empty().text(`Question ${[i]}`);
      $("#question").empty().text(questionsArr[i].question);
      a.addClass("btn btn-primary").text(questionsArr[i].answersChoices[0]);
      b.addClass("btn btn-primary").text(questionsArr[i].answersChoices[1]);
      c.addClass("btn btn-primary").text(questionsArr[i].answersChoices[2]);
      d.addClass("btn btn-primary").text(questionsArr[i].answersChoices[3]);
      correctAnswer = questionsArr[i].correctAnswer;
    }
  }
});

const a = $("#choiceA");
const b = $("#choiceB");
const c = $("#choiceC");
const d = $("#choiceD");

const chooseA = () => {
  userAnswers.push("A");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  selectAnswer();
};
const chooseB = () => {
  userAnswers.push("B");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  selectAnswer();
};
const chooseC = () => {
  userAnswers.push("C");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  selectAnswer();
};
const chooseD = () => {
  userAnswers.push("D");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  selectAnswer();
};

a.on("click", chooseA);
b.on("click", chooseB);
c.on("click", chooseC);
d.on("click", chooseD);

function selectAnswer() {
  if (checkedAnswer === correctAnswer) {
    console.log(`correct, the answer is ${correctAnswer}`);
    // writeQuestions();
  } else {
    console.log("try again");
  }
}
