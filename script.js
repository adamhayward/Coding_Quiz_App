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
const time = 10 * totalQuestions;
let remainingTime = time;
let attempt = 0;
const alert = $("#liveAlertPlaceholder");
const mainContent = $(".main-content");
const greeting = $("#greeting");
const startBtn = $("#start");
const answerChoices = $("#answers");

const statsContainer = $("#stats-container");
const statsTable = $("#stats-table");
const reQuizBtn = $("#retake-quiz");

let idx_question = 1;
let askedQuestions = [];

let scoreCount = 0;
let quizScore = 0;
let incorrectAnswersCount = 0;

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
    // when time runs out or all questons have been asked grade quiz
    if (remainingTime < 0 || idx_question - 2 === totalQuestions) {
      let timeTaken = time - remainingTime - 1;
      clearInterval(timeInterval);
      scoreQuiz();
      $("#question-container").empty();
      statsContainer.delay(2000).fadeIn(1000);
      attempt++;
      statsTable.append(
        `<tr>
          <th>${attempt}</th>
          <th>${quizScore}%</th>
          <th>${timeTaken} s</th>
          <th>${incorrectAnswersCount}</th>
          </tr>`
      );
    }
  }, 1000);
};

let writeQuestions = (array) => {
  const row = $("<div></div>").addClass("row");
  const col1 = $("<div></div>").addClass("col-12");
  const col2 = $("<div></div>").addClass("col-12");
  const newH3El = $("<h3></h3>").attr("id", "question-number");
  const currentQuestion = $("<p></p>").attr("id", "question");
  const answerA = $("<a></a>").attr("id", "A").addClass("choices m-1");
  const answerB = $("<a></a>").attr("id", "B").addClass("choices m-1");
  const answerC = $("<a></a>").attr("id", "C").addClass("choices m-1");
  const answerD = $("<a></a>").attr("id", "D").addClass("choices m-1");

    mainContent.append(row);
    row.attr("id", "question-container");
    $("#question-container").append(col1, col2);
    col1.append(newH3El, currentQuestion, answerA, answerB);
    col2.append(answerC, answerD);
  // function to write
  let questionNum = (total) => {
    $("#question-number").text(`Question ${idx_question}`);
    idx_question++;
  };
  // populate question data
  $("#question-container").hide().delay(2000).fadeIn(1000);
  for (let i = 0; i < array.length; i++) {
    $("#question").text(array[i].question);
    $("#A").addClass("btn btn-primary").text(array[i].answersChoices[0]);
    $("#B").addClass("btn btn-primary").text(array[i].answersChoices[1]);
    $("#C").addClass("btn btn-primary").text(array[i].answersChoices[2]);
    $("#D").addClass("btn btn-primary").text(array[i].answersChoices[3]);
    correctAnswer = questionsArr[i].correctAnswer;
  }

  // funciton to choose the user's answer
  const choose = (answer) => {
    userAnswers.push(answer);
    checkedAnswer = userAnswers.pop();
    gradeAnswer();
  } 


  let a = $("#A");
  let b = $("#B");
  let c = $("#C");
  let d = $("#D");
  // actions to submits user's answer choices
  a.on("click", () => choose("A"));
  b.on("click", () => choose("B"));
  c.on("click", () => choose("C"));
  d.on("click", () => choose("D"));
  questionNum(totalQuestions);
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
    askedQuestions.push(questionsArr.pop()) ;
  };
  // logic for correct answer
  if (checkedAnswer === correctAnswer) {
    alertGrade("Correct", "success");
    scoreCount++;
    $("#question-container").remove();
    writeQuestions(questionsArr);
    
  }
  // logic for incorrect answer
  else {
    alertGrade("Incorrect", "danger");
    incorrectAnswersCount++;
    $("#question-container").remove();
    writeQuestions(questionsArr);
  }
};
// function to calculate users quiz score
const scoreQuiz = () => {
  let rawGrade = (scoreCount / totalQuestions) * 100;
  quizScore = rawGrade.toFixed(0);
  console.log(askedQuestions)
  console.log(questionsArr)
  console.log(quizScore);
};

// page execution:
// choose question in random order
randomQuestion();
timer.text(remainingTime);

// action to begin quiz
startBtn.on("click", () => {
  $("#greeting").fadeOut(2000);
  writeQuestions(questionsArr);
  startTimer();
});

reQuizBtn.on("click", () => {
  statsContainer.fadeOut(2000);
  questionsArr = askedQuestions.slice(0);
  askedQuestions = [];
  console.log(askedQuestions)
  console.log(questionsArr)
  randomQuestion;
  idx_question = 1;
  scoreCount = 0;
  writeQuestions(questionsArr);
  remainingTime = time;
  startTimer();
});
