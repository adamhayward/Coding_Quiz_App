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
var totalQuestions = questionsArr.length;

// Math fucntion to sort 'arry' at random
questionsArr.sort(function () {
  return 0.5 - Math.random();
});
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

var idx_question = 1;
var askedQuestions = [];
var scoreCount;


function writeQuestions(array) {
  
  
  for (let i = 0; i < array.length; i++) {
    $("#start").removeClass("btn btn-primary");
    $("#question").empty().text(array[i].question);
    a.addClass("btn btn-primary").text(array[i].answersChoices[0]);
    b.addClass("btn btn-primary").text(array[i].answersChoices[1]);
    c.addClass("btn btn-primary").text(array[i].answersChoices[2]);
    d.addClass("btn btn-primary").text(array[i].answersChoices[3]);
    correctAnswer = questionsArr[i].correctAnswer;
    
   
  }

  questionNum();
  
  function questionNum() {
    $("#title").text(`Question ${idx_question}`);
    idx_question++;
    if (idx_question - 1 > totalQuestions) {
      mainContent
        .empty()
        .append("Pencils Up!<br>Your time has expired");
    }
  }
}

function selectAnswer() {
  if (checkedAnswer === correctAnswer) {
    console.log(`correct, the answer is ${correctAnswer}`);
  } else {
    console.log("try again");
  }
  
  askedQuestions = questionsArr.pop();
  writeQuestions(questionsArr);
  
  console.log(questionsArr);
  console.log(askedQuestions);
}

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

startBtn.on("click", (event) => {
  event.preventDefault();
  startBtn.empty();
  writeQuestions(questionsArr);
});

a.on("click", chooseA);
b.on("click", chooseB);
c.on("click", chooseC);
d.on("click", chooseD);
