/* PSEUDOCODE */
 
// CREATE QUESTIONS OBJECT THAT WILL HOUSE ALL QUESTIONS FOR THE GAME

var questions = [
    {
        question: "Who is Ann Veal?",
        answerChoices: ["Her? What is she funny or something?", "Michael's sister", "Bluth family rival", "Banana stand employee"],
        answer: answerChoices[0] 
    },
    {
        question: "What is always in the banana stand?",
        answerChoices: ["Loose seals", "money", "ice cream sandwiches", "illusions"],
        answer = answerChoices[1];
    },
    {
        question: "Who is the Bluth family attorney?",
        answerChoices: ["Maggie Lizer", "Kitty", "Lucille 2", "Barry Zuckerkorn"],
        answer: answerChoices[3];
    },
    {
        question: "What is the Bluth vehicle of choice?",
        answerChoices: ["Staircar", "Mercedes", "Volvo", "Limo"],
        answer: answerChoices[0];
    }
    {
        question: "What does Gob perform?",
        answerChoices: ["Tricks", "Illusions", "Miracles", "Favors"],
        answer: answerChoices[1];
    }
]

// GLOBAL VARIABLES
var userGuess;
var correctAnswer;
var incorrectAnswer;
var timer = 15;
var running = false; // sets default status of timer to !running
var intervalId;

//* CLICK BUTTON TO START THE GAME
$(document).ready(function() {
    $("#button-start").click(function() {
        $(".container").hide();
    })  
})

//TIMER FUNCTION
function timerStart() {
    if(!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}



//* WHEN CLICKED, INSTRUCTIONS DIV IS HIDDEN

//* 1ST QUESTION POPULATES ON CLICK AS WELL

// TIMER COUNTS DOWN FROM 10 AT START OF EACH QUESTIONS

// IF USER CLICKS THE RIGHT ANSWER
  // HIGHLIGHT THAT ANSWER AND ADD 1 TO THE CORRECT ANSWER ARRAY
  // DISPLAY MESSAGE SAYING PLAYER GUESSED CORRECTLY

// IF USER CLICKS WRONG ANSWER
  // HIGHLIGHT THE CORRECT ANSWER
  // DISPLAY MESSAGE SAYING PLAYER GOT ANSWER WRONG
  // ADD 1 TO THE INCORRECT ANSWERS ARRAY

  // WHEN QUESTION IS ANSWERED AND SCORE IS DETERMINED
    // HIDE CURRENT QUESTION DISPLAY THE NEXT QUESTION
    //REPEAT FUNCTIONS FOR DETERMINING SCORE