# Homework4
quiz

## Quiz Navigation
- 


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

# Start of Quiz
GIVEN I am taking a code quiz
WHEN I click the start button
    <img src="startScreen.jpg>
### THEN a timer starts 
- set timer for 100, counting down 1 second at a time
### THEN I am presented with a question (how does this happen? Use setTimeout(initialFunction, 2000)). WHEN I answer a question correctly (how will the code know that it is the correct answer?). THEN I am presented with another question
- added all questions/answer choices/correct answer in an object, then referenced object in for loop when function was called
### WHEN I answer a question incorrectly, THEN time is subtracted from the clock (global variables)
- lose 10 seconds every time the correct answer button is not clicked
### WHEN all questions are answered or the timer reaches 0, THEN the game is over (function)
- added an alert when last question answered with score, moved to endScreen to log results and username
    <img src="endOfGamerAlert.jpg";
### WHEN the game is over, THEN I can save my initials and score
- I need to get more familiar with the localStorage function as I could only figure out how to log the score
    <img src="userResults.jpg">
### Reset Button
- reset button starts clock over and returns to blank screen, but I need to figure out how to restart the quiz








