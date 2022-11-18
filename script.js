var timeCount = document.getElementById("time-count");
var viewScore = document.getElementById("view-score");
var divWelcome = document.querySelector(".welcome");
var btnStart = document.getElementById("start-button");

var questionClass = document.getElementById("question");
var questionCont = document.querySelector(".question-container");
var answerId1 = document.getElementById("answer1");
var answerId2 = document.getElementById("answer2");
var answerId3 = document.getElementById("answer3");
var answerId4 = document.getElementById("answer4");
var showResult = document.getElementById("show-result");
var main = document.getElementById("main");

// showResult.textContent = '' // correct or incorrect

var timeLeft = 50;
var myScore = 0;

//SAVE SCORES

localStorage.setItem("score", myScore);
var score = localStorage.getItem("score");

viewScore.addEventListener("click", function () {
  viewScore.textContent = score;
});


//QUESTIONS
var questionObj = [
  {
    question: "Who owns Twitter?",
    choice1: "Bill Gates",
    choice2: "Elon Musk",
    choice3: "George Washington",
    choice4: "Kanye West",
  },
  {
    question: "What is the largest city in USA?",
    choice1: "New York",
    choice2: "Los Angeles",
    choice3: "Austin",
    choice4: "San Francisco",
  },
  {
    question: "When is Christmas celebrated?",
    choice1: "May 26",
    choice2: "November 1",
    choice3: "December 25",
    choice4: "September 4",
  },
  {
    question: "What is HTML stand for?",
    choice1: "Home Town Markup Language",
    choice2: "Hyper Text Manly Language",
    choice3: "Hollister Tillys Marshalls Levis",
    choice4: "Hyper Text Markup Language",
  },
  {
    question: "How many seasons are there in a year?",
    choice1: "4",
    choice2: "1",
    choice3: "3",
    choice4: "5",
  },
  {
    question: "Who is the first president of USA?",
    choice1: "Thomas Jefferson",
    choice2: "Ted Roosevelt",
    choice3: "George Washington",
    choice4: "Abraham Lincoln",
  },
  {
    question: "What is CSS stand for?",
    choice1: "Cascading Style Sheet",
    choice2: "Coding Style Sheet",
    choice3: "Cool Style Sheet",
    choice4: "Coding Skill Set",
  },
  {
    question: "Who is the governor of California?",
    choice1: "Nancy Pelosi",
    choice2: "Ted Cruz",
    choice3: "Gavin Newsom",
    choice4: "Ron DeSantis",
  },
];

// var currentQuestion = Math.floor(Math.random() * questionObj.length) //USED FOR INDEX

//WELCOME MESSAGE DISPLAY WILL HIDE ONCE THE GAME STARTS
function hideWelcome() {
  divWelcome.setAttribute(
    "style",
    "display:none;border:3px solid black;width: 50%;margin: auto;border-radius:10px;background-color: #69B8F5"
  );
}

function displayQuestion1() {
  questionClass.textContent = questionObj[0].question;
  answerId1.textContent = questionObj[0].choice1;
  answerId2.textContent = questionObj[0].choice2;
  answerId3.textContent = questionObj[0].choice3;
  answerId4.textContent = questionObj[0].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion2();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion2();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion2();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion2();
  });

}

function displayQuestion2() {
  questionClass.textContent = questionObj[1].question;
  answerId1.textContent = questionObj[1].choice1;
  answerId2.textContent = questionObj[1].choice2;
  answerId3.textContent = questionObj[1].choice3;
  answerId4.textContent = questionObj[1].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion3();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion3();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion3();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion3();
  });
}

function displayQuestion3() {
  questionClass.textContent = questionObj[2].question;
  answerId1.textContent = questionObj[2].choice1;
  answerId2.textContent = questionObj[2].choice2;
  answerId3.textContent = questionObj[2].choice3;
  answerId4.textContent = questionObj[2].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion4();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion4();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion4();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion4();
  });
}

function displayQuestion4() {
  questionClass.textContent = questionObj[3].question;
  answerId1.textContent = questionObj[3].choice1;
  answerId2.textContent = questionObj[3].choice2;
  answerId3.textContent = questionObj[3].choice3;
  answerId4.textContent = questionObj[3].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion5();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion5();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion5();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion5();
  });
}

function displayQuestion5() {
  questionClass.textContent = questionObj[4].question;
  answerId1.textContent = questionObj[4].choice1;
  answerId2.textContent = questionObj[4].choice2;
  answerId3.textContent = questionObj[4].choice3;
  answerId4.textContent = questionObj[4].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion6();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion6();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion6();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion6();
  });
}

function displayQuestion6() {
  questionClass.textContent = questionObj[5].question;
  answerId1.textContent = questionObj[5].choice1;
  answerId2.textContent = questionObj[5].choice2;
  answerId3.textContent = questionObj[5].choice3;
  answerId4.textContent = questionObj[5].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion7();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion7();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion7();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion7();
  });
}

function displayQuestion7() {
  questionClass.textContent = questionObj[6].question;
  answerId1.textContent = questionObj[6].choice1;
  answerId2.textContent = questionObj[6].choice2;
  answerId3.textContent = questionObj[6].choice3;
  answerId4.textContent = questionObj[6].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
    displayQuestion8();
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion8();
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion8();
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
    displayQuestion8();
  });
}

function displayQuestion8() {
  questionClass.textContent = questionObj[7].question;
  answerId1.textContent = questionObj[7].choice1;
  answerId2.textContent = questionObj[7].choice2;
  answerId3.textContent = questionObj[7].choice3;
  answerId4.textContent = questionObj[7].choice4;

  answerId1.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
  });
  answerId2.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
  });

  answerId3.addEventListener("click", function () {
    showResult.textContent = "Correct";
    timeLeft++;
    score++;
  });

  answerId4.addEventListener("click", function () {
    showResult.textContent = "Wrong";
    timeLeft--;
  });
}

//TIMER

function setTimer() {
  var timer = setInterval(function () {
    timeLeft--; //TIME DECREMENTS

    timeCount.textContent = timeLeft; //DISPLAYS CURRENT TIME

    if (timeLeft === 0 || timeLeft < 0) { //IF TIME IS 0 OR NEGATIVE
      timeCount.textContent = 0; // DISPLAY 0 
      clearInterval(timer); // CLEARS TIMER
      main.setAttribute( //AFTER TIME CLEARS, MAIN ID WILL SHOW UP
        "style",
        "display:block; font-size: 150%;font-weight: 700; text-align:center; height: 200px;"
      );
      main.textContent = "GAME OVER\n Your Score: " + score; //INSIDE MAIN GAME OVER AND SCORE
    }
  }, 1000);
}

function start() {
  //EVERYTHING THAT NEEDS TO HAPPEN
  setTimer(); //1ST
  hideWelcome(); //2ND
  questionCont.setAttribute("style", "display: flex;");
  displayQuestion1();
}

btnStart.addEventListener("click", start); //START GAME
