# Homework4
quiz

# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

 ### Pseudo Code
 
start the timer when the user clicks the button to start the quiz

each question will be an object (keys and values), we will store the answers in an array

custom attributes for the correct answer

create questions
question:
1 answer
2 answer
3 answer
4 answer
which one is correct answer (create custom attributes)

keep track of how many questions have been answered and where the timer is...clear out of timer when game is over

create functions for each step

GIVEN I am taking a code quiz
WHEN I click the start button
**done** THEN a timer starts 
    THEN I am presented with a question (how does this happen? Use setTimeout(initialFunction, 2000))
WHEN I answer a question correctly (how will the code know that it is the correct answer?)
    THEN I am presented with another question
WHEN I answer a question incorrectly
    THEN time is subtracted from the clock (global variables)
    THEN I am presented with another question (function)
WHEN all questions are answered or the timer reaches 0
    THEN the game is over (function)
WHEN the game is over
    THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.



## questions:
Inside which HTML element do we put the JavaScript?
    c - <script>
    <scripting>
    <js>
    <javascript>
Where is the correct plae to insert a JavaScript?
    <head>
    <body>
    c - both <head> and <body>
    <footer>
How do you create a function in JavaScript?
    c - function myFunction()
    function: myFunction()
    function = myFunction()
    function function()
JavaScript is the same as Java.
    true
    c - false
Which operator is used to assign a value to a variable?
    c - =
    -
    x
    *
Which of the following function of String object returns the character at the specified index?
    c - charAt()
    charCodeAt()
    concat()
    indexOf() 
Which of the below is NOT a JavaScript Data type?
    Number
    String
    Boolean
    c - Counter
What method would you use to turn a string into an array?
    c - .string()
    .push()
    .concat()
    .cook()

