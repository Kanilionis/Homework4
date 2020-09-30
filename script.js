// add main element
var mainEl = document.createElement("div", "main");
    document.body.appendChild(mainEl);

// where are we going to store questions, results, etc.
var quizContainer = document.createElement("div", "quiz-container");
    mainEl.appendChild(quizContainer);
var resultsContainer = document.createElement("div", "results");
    mainEl.appendChild(resultsContainer);


var clock = document.createElement("div", "clock");
    clock.setAttribute("id", "timer");
    document.body.appendChild(clock);
var minutesLeft = 10;
var currentTime = Date.parse(new Date());
// console.log(currentTime);
var timerEnd = new Date(currentTime + minutesLeft*60*1000);
// console.log(timerEnd);


// create buttons
var startBtn = document.createElement("button", "start-button");
    startBtn.textContent = "Start Quiz";
    startBtn.addEventListener("click", function(){
        startQuiz();
    });
    quizContainer.appendChild(startBtn);

var submitButton = document.createElement("button", "submit");
    submitButton.textContent = "Submit Answer";
    submitButton.addEventListener("click", function(e){
        e.preventDefault;
        console.log("submit")
    });
    mainEl.appendChild(submitButton);

var resetButton = document.createElement("button", "reset");
    resetButton.textContent = "Reset Score"
    resetButton.addEventListener("click", function(e){
        e.preventDefault;
        console.log("clear-score");
    }); 
    resultsContainer.appendChild(resetButton);

var resultsBtn = document.createElement("button", "results-button");
    resultsBtn.textContent = "Get Final Results";
    resultsBtn.addEventListener("click", function(e){
        e.preventDefault;
        console.log("show results")
    });
    resultsContainer.appendChild(resultsBtn);

// create questions
var question1 = document.createElement("ul", "question1");
    question1.textContent = "Inside which HTML element do we put the JavaScript?";
    quizContainer.appendChild(question1);
    var ulTag = document.createElement("ul");
    question1.appendChild(ulTag)
    var answers1 = ["<script>", "<scripting>", "<js>", "<javascript>"];
    // "<script>"
    for( var i=0; i<answers1.length; i++){
      var choices1 = document.createElement("button");
      choices1.textContent = answers1[i] + "";
      choices1.addEventListener("click", function(){});
      ulTag.appendChild(choices1);}
    
    
var question2 = document.createElement("ul", "question2");
    question2.textContent = "Where is the correct place to insert a JavaScript?";
    quizContainer.appendChild(question2);
    var ulTag = document.createElement("ul");
    question2.appendChild(ulTag)
    var answers2 = ["<head>", "<body>", "both <head> and <body>", "<footer>"];
    // "both <head> and <body>"
      for( var i=0; i<answers1.length; i++){
        var choices2 = document.createElement("button");
        choices2.textContent = answers2[i] + "";
        choices2.addEventListener("click", function(){});
        ulTag.appendChild(choices2);}
          
var question3 = document.createElement("ul", "question3");
    question3.textContent = "How do you create a function in JavaScript?";
    quizContainer.appendChild(question3);
    var ulTag = document.createElement("ul");
    question3.appendChild(ulTag)
    var answers3 = ["function: myFunction()", "function myFunction()", "function = myFunction()", "function function()",];
    // "function: myFunction()"
      for( var i=0; i<answers3.length; i++){
        var choices3 = document.createElement("button");
        choices3.textContent = answers3[i] + "";
        choices3.addEventListener("click", function(){
          console.log(answers3[i])
        });
        ulTag.appendChild(choices3);}

var question4 = document.createElement("ul", "question4");
    question4.textContent = "True or False: JavaScript is the same as Java?";
    quizContainer.appendChild(question4);
    var ulTag = document.createElement("ul");
    question4.appendChild(ulTag)
    var answers4 = ["true", "false"];
    // "false"
      for( var i=0; i<answers4.length; i++){
        var choices4 = document.createElement("button");
        choices4.textContent = answers4[i] + "";
        choices4.addEventListener("click", function(){
          console.log(answers4[i])
        });
        ulTag.appendChild(choices4);}
      
var question5 = document.createElement("ul", "question5");
    question5.textContent = "Which operator is used to assign a value to a variable?";
    quizContainer.appendChild(question5);
    var ulTag = document.createElement("ul");
    question5.appendChild(ulTag)
    var answers5 = ["=", "-", "x", "*"];
    // "="
      for( var i=0; i<answers5.length; i++){
        var choices5 = document.createElement("button");
        choices5.textContent = answers5[i] + "";
        choices5.addEventListener("click", function(){
          console.log(answers5[i])
        });
        ulTag.appendChild(choices5);}
        
var question6 = document.createElement("ul", "question6");
    question6.textContent = "Which of the following function of String object returns the character at the specified index?";
    quizContainer.appendChild(question6);
    var ulTag = document.createElement("ul");
    question6.appendChild(ulTag)
    var answers6 = ["concat()", "charCodeAt()", "charAt()", "indexOf()",];
    // "charAt()"
      for( var i=0; i<answers6.length; i++){
        var choices6 = document.createElement("button");
        choices6.textContent = answers6[i] + "";
        choices6.addEventListener("click", function(){
          console.log(answers6[i])
        });
        ulTag.appendChild(choices6);}
      
var question7 = document.createElement("ul", "question7");
    question7.textContent = "Which of the below is NOT a JavaScript Data type?";
    quizContainer.appendChild(question7);
    var ulTag = document.createElement("ul");
    question7.appendChild(ulTag)
    var answers7 = ["Number", "String", "Boolean", "Counter",];
    // "Counter"
      for( var i=0; i<answers7.length; i++){
        var choices7 = document.createElement("button");
        choices7.textContent = answers7[i] + "";
        choices7.addEventListener("click", function(){
          console.log(answers7[i])
        });
        ulTag.appendChild(choices7);}

var question8 = document.createElement("ul", "question8");
    question8.textContent = "What method would you use to turn a string into an array?";
    quizContainer.appendChild(question8);
    var ulTag = document.createElement("ul");
    question8.appendChild(ulTag)
    var answers8 = [".push()", ".concat()", ".cook()", ".split()"];
    // ".split()"
      for( var i=0; i<answers8.length; i++){
        var choices8 = document.createElement("button");
        choices8.textContent = answers8[i] + "";
        choices8.addEventListener("click", function(){
          console.log(answers8[i])
        });
        ulTag.appendChild(choices8);}


function startQuiz(){
    console.log("start quiz");
    }

 function nextQuestion(){

 }   

 function keepScore(){
// increment and decrement
 }

function showResults(){
  // results button
}

function clearScore(){
   // reset button
}



// create timer
function countdown(endTime){
        var t = Date.parse(endTime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        return {'minutes':minutes, 'seconds':seconds};
}
function runClock(endTime){
    var timeInterval = setInterval(updateClock, 1000);
    var clock = document.getElementById("timer");
    function updateClock(){
        var t = countdown(endTime);
        clock.textContent = "0" + t.minutes + ":" + t.seconds;
        if(t.seconds === 0 && t.minutes === 0){
            clock.textContent = "0" + t.minutes + ":0" + t.seconds;
            clearInterval(timeInterval);
        } else if(t.seconds <10){
            clock.textContent = "0" + t.minutes + ":0" + t.seconds;
        } else if(t.seconds === 0 && t.minutes === 0){
            clearInterval(timeInterval);
            alert("YOU HAVE RUN OUT OF TIME!");
        }
        }
    };
    runClock(timerEnd);







