// Quiz questions
let questionsArr = [
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
    answersChoices: ["A", "B", "C", "D"],
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
// records total number of questions
const totalQuestions = questionsArr.length;
// arrays to store asked questions
let userAnswers = [];
let checkedAnswer;
let correctAnswer;
// varibles assigments for HTML elements
const timer = $("#clock");
let remainingTime = 10 * totalQuestions;
const alert = $("#liveAlertPlaceholder");
const mainContent = $(".main-content");
const greeting = $("#greeting");
const startBtn = $("#start");
const answerChoices = $("#answers");
const a = $("#A");
const b = $("#B");
const c = $("#C");
const d = $("#D");

let idx_question = 1;
let askedQuestions = [];

let scoreCount = 0;
let quizScore = 0;

//sorts questions at random to be pulled in random oreder
const randomQuestion = () => {
  // Math fucntion to sort 'arry' at random
  questionsArr.sort(() => {
    return 0.5 - Math.random();
  });
};
// function to begin timer
const startTimer = () => {
  let timeInterval = setInterval(() => {
    timer.text(remainingTime);
    remainingTime--;

    if (remainingTime == 0 ||idx_question - 2 === totalQuestions ) {
      clearInterval(timeInterval);
    }

  }, 1000);
}

const writeQuestions = (array) => {
  // function to write
  const questionNum = (total) => {
    $("#question-number").text(`Question ${idx_question}`);
    idx_question++;
    // when all questons have been asked grade quiz
    if (idx_question - 2 === total) {
      scoreQuiz();
      $("#question-container")
        .empty()
        .append(
          `Pencils Up!<br> All done, you scored a:<br>${quizScore}% on this quiz!`
        );
    }
  };
  // populate question data
  $("#question-container").hide().delay(2000).fadeIn(1000);
  for (let i = 0; i < array.length; i++) {
    $("#question").text(array[i].question);
    a.addClass("btn btn-primary").text(array[i].answersChoices[0]);
    b.addClass("btn btn-primary").text(array[i].answersChoices[1]);
    c.addClass("btn btn-primary").text(array[i].answersChoices[2]);
    d.addClass("btn btn-primary").text(array[i].answersChoices[3]);
    correctAnswer = questionsArr[i].correctAnswer;
  }

  questionNum(totalQuestions);
};
// funciton to choose the user's answer
const choose = (answer) => {
  userAnswers.push(answer);
  checkedAnswer = userAnswers.pop();
  console.log(checkedAnswer);
  gradeAnswer();
  console.log(scoreCount);
  console.log(idx_question);
  console.log(totalQuestions);
};
// function to grade user's answer choice
const gradeAnswer = () => {
  // function to alert user if answer chosen was correct/incorrect
  const alertGrade = (message, type) => {
    alert.text(message);
    // reset styling to none
    alert.removeAttr("class");
    // assign new styling
    alert.addClass(`alert alert-${type}`);
    alert.fadeIn(1000).fadeOut(1000);
    askedQuestions = questionsArr.pop();
  };
  // logic for correct answer
  if (checkedAnswer === correctAnswer) {
    alertGrade("Correct", "success");
    scoreCount++;
    writeQuestions(questionsArr);
    console.log(`Correct, the answer is ${correctAnswer}`);
  }
  // logic for incorrect answer
  else {
    alertGrade("Incorrect", "danger");
    writeQuestions(questionsArr);
    console.log(`Incorrect, the answer is ${correctAnswer}`);
  }
};
// function to calculate users quiz score
const scoreQuiz = () => {
  let rawGrade = (scoreCount / totalQuestions) * 100;
  quizScore = rawGrade.toFixed(0);
  console.log(quizScore);
};

// page execution:
// choose question in random order

timer.text(remainingTime); 

randomQuestion();
// action to begin quiz
startBtn.on("click", () => {
  $("#greeting").fadeOut(2000);
  writeQuestions(questionsArr);
  startTimer();
});
// actions to submits user's answer choices
a.on("click", () => choose("A"));
b.on("click", () => choose("B"));
c.on("click", () => choose("C"));
d.on("click", () => choose("D"));


