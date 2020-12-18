var questionsArr = [
  {
    question: "JS is short for:",
    answersChoices: [
      "A) JavaScript",
      "B) JavaSide",
      "C) JamesSyco",
      "D) titledwave",
    ],
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

// arrau to store asked questions
var userAnswers = [];
var checkedAnswer;
var correctAnswer;

// assigning varibles to specific parts of HTML doc.
const timer = $("#clock");
const mainContent = $(".main-content");
const greeting = $("#greeting");
const startBtn = $("#start");
const a = $("#choiceA");
const b = $("#choiceB");
const c = $("#choiceC");
const d = $("#choiceD");

var newBTN = $("<button>");

var idx_question = 1;
var askedQuestions = [];

var scoreCount = 0;
var quizScore = 0;

const randomQuestion = () => {
  // Math fucntion to sort 'arry' at random
  questionsArr.sort(function () {
    return 0.5 - Math.random();
  });
};
const writeQuestions = (array) => {
  for (let i = 0; i < array.length; i++) {
    $("#start").removeClass("btn btn-primary");
    $("#question").empty().text(array[i].question);
    a.addClass("btn btn-primary").text(array[i].answersChoices[0]);
    b.addClass("btn btn-primary").text(array[i].answersChoices[1]);
    c.addClass("btn btn-primary").text(array[i].answersChoices[2]);
    d.addClass("btn btn-primary").text(array[i].answersChoices[3]);
    correctAnswer = questionsArr[i].correctAnswer;
  }

  questionNum(totalQuestions);

  function questionNum(total) {
    $("#title").text(`Question ${idx_question}`);
    idx_question++;
    if (idx_question - 1 > total) {
      console.log(scoreCount)
      console.log(askedQuestions.length)
      scoreQuiz();
      mainContent
        .empty()
        .append(`Pencils Up!<br> All done, you scored a:<br>${quizScore}% on this quiz!`);
    }
  }
};
const chooseA = () => {
  userAnswers.push("A");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  gradeAnswer();
};
const chooseB = () => {
  userAnswers.push("B");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  gradeAnswer();
};
const chooseC = () => {
  userAnswers.push("C");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  gradeAnswer();
};
const chooseD = () => {
  userAnswers.push("D");
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  gradeAnswer();
};
const gradeAnswer = () => {
  if (checkedAnswer === correctAnswer) {
    scoreCount++;
    console.log(`correct, the answer is ${correctAnswer}`);
  } else {
    console.log("try again");
  }
  askedQuestions = questionsArr.pop();
  writeQuestions(questionsArr);
};
const scoreQuiz = () => {
  let rawGrade = (scoreCount/idx_question) * 100;
  quizScore = rawGrade.toFixed(0);
}

randomQuestion();

startBtn.on("click", (event) => {
  event.preventDefault();
  startBtn.empty();
  writeQuestions(questionsArr);
});

a.on("click", chooseA);
b.on("click", chooseB);
c.on("click", chooseC);
d.on("click", chooseD);
