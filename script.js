
var time = 100;
var timerId = document.getElementById("timerId");
var start = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questions = document.getElementById("questions");
var quizQuestions = document.getElementById("quizQuestion");
var choicesEl = document.getElementById("choices");
var resultsBtn = document.getElementById("results");
var endScreen = document.getElementById("endScreen");
var userName = document.getElementById("userName");
var resetBtn = document.getElementById("reset");
var userResults = document.getElementById("userResults");
// variable we are changing to change questions (1 to 2, 2 to 3, etc)
var index = 0;
var questionsArray = [
  {
    questionTitle: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<scripting>", "<js>", "<javascript>"],
    correctAnswer: "<script>",
  },
  {
    questionTitle: "Where is the correct place to insert a JavaScript?",
    choices: ["<head>", "<body>", "both <head> and <body> are correct", "<footer>"],
    correctAnswer: "both <head> and <body> are correct",
  },
  {
    questionTitle: "How do you create a function in JavaScript?",
    choices: ["function: myFunction()", "function myFunction()", "function = myFunction()", "function function()"],
    correctAnswer: "function: myFunction()",
  },
  {
    questionTitle: "True or False: JavaScript is the same as Java?",
    choices: ["true", "false"],
    correctAnswer: "false",
  },
  {
    questionTitle: "Which of the following function of String object returns the character at the specified index?",
    choices: ["concat()", "charCodeAt()", "charAt()", "indexOf()"],
    correctAnswer: "charAt()",
  },
  {
    questionTitle: "Which operator is used to assign a value to a variable?",
    choices: ["=", "-", "x", "*"],
    correctAnswer: "=",
  },
  {
    questionTitle: "Which of the below is NOT a JavaScript Data type?",
    choices: ["Number", "String", "Boolean", "Counter"],
    correctAnswer: "Counter",
  },
  {
    questionTitle: "What method would you use to turn a string into an array?",
    choices: [".push()", ".concat()", ".cook()", ".split()"],
    correctAnswer: ".split()",
  },
];


function timer(){
  time--
  timerId.textContent = time;
  if(time <= 0){
  time = 0;
  endQuiz();
  }
  }
  var counter = setInterval(timer, 1000);
function startQuiz(){
  counter.textContent = time;
  start.setAttribute("class", "hidden");
  questions.removeAttribute("class");
  // want time to run each second (1000 miliseconds)
  
  // call next function
getQuestion()
}

function getQuestion(){
  console.log("test")
  var currentQuestion = questionsArray[index];
  quizQuestions.textContent = currentQuestion.questionTitle;
  // clears out div to make empty string
  choices.innerHTML = ""
  currentQuestion.choices.forEach(function(choice,i){
    console.log(choice,i);
    var answerChoice = document.createElement("button");
    answerChoice.setAttribute("value", choice);
    answerChoice.textContent = choice;
    // attach onclick here
    answerChoice.onclick = correctAnswer;
    choicesEl.appendChild(answerChoice);
  })
}

function correctAnswer(){
  if (this.value !== questionsArray[index].correctAnswer){
    time -= 10;
    timerId.textContent = time;
    if (time <= 0){
      // time will never go below 0
      time = 0;
      endQuiz();
    }}
    index++;
    if(index === questionsArray.length){
      endQuiz();
    }else{
      getQuestion();
    }
    }
//e.target - tells us what was clicked on - can add to local storage
function endQuiz(){
 clearInterval(counter);
 questions.setAttribute("class", "hidden");
//  timerId.setAttribute("class", "hidden"); 
//  endScreen.removeAttribute("class");
 logResults();
 endScreen.removeAttribute("class");
  alert("You finished the quiz with " + time + " seconds remaining! Your final score is " + time + "!")
}


function logResults(){
  // var logUser = localStorage.getItem("#userName");
  var logScoreSpan = document.getElementById("logScore");
  localStorage.getItem("time");
  var userNameSpan = document.getElementById("logUser").value;
  localStorage.getItem("userName");
  // localStorage.getItem("logUser");
  resultsBtn.addEventListener("click", function(e){
    e.preventDefault();
    userResults.removeAttribute("class");
        // userNameSpan.textContent = userName;
        logScoreSpan.textContent = time;
      }
  )}

resetGame();

function resetGame(){
  resetBtn.addEventListener("click", function(){
    endScreen.setAttribute("class", "hidden");
    userResults.setAttribute("class", "hidden");
    timerId.textContent= 100;})
    start.removeAttribute("class");

  }

  localStorage.setItem("logUser", logUser);
  localStorage.setItem("time", logScore);


// put at bottom later
startBtn.onclick = startQuiz


// var clock = document.createElement("div", "clock");
//     clock.setAttribute("id", "timer");
//     document.body.appendChild(clock);
// var minutesLeft = 1.5;
// var currentTime = Date.parse(new Date());
// // console.log(currentTime);
// var timerEnd = new Date(currentTime + minutesLeft*60*1000);
// // console.log(timerEnd);


// create timer
// function countdown(endTime){
//         var t = Date.parse(endTime) - Date.parse(new Date());
//         var seconds = Math.floor( (t/1000) % 60 );
//         var minutes = Math.floor( (t/1000/60) % 60 );
//         return {'minutes':minutes, 'seconds':seconds};
// }
// function runClock(endTime){
//     var timeInterval = setInterval(updateClock, 1000);
//     var clock = document.getElementById("timer");
//     function updateClock(){
//         var t = countdown(endTime);
//         clock.textContent = "0" + t.minutes + ":" + t.seconds;
//         if(t.seconds === 0 && t.minutes === 0){
//             clock.textContent = "0" + t.minutes + ":0" + t.seconds;
//             clearInterval(timeInterval);
//         } else if(t.seconds <10){
//             clock.textContent = "0" + t.minutes + ":0" + t.seconds;
//         // } else if(t.seconds === 0 && t.minutes === 0){
//         //     clearInterval(timeInterval);
//         //     alert("YOU HAVE RUN OUT OF TIME!");
//         }
//         }
//     };
//     runClock(timerEnd);







