/* PSEUDOCODE */
 
// CREATE QUESTIONS OBJECT THAT WILL HOUSE ALL QUESTIONS FOR THE GAME

var questions = [
    {
        question: "Who is Ann Veal?",
        answerChoices: ["Her? What is she funny or something?", "Michael's sister", "Bluth family rival", "Banana stand employee"],
        answer: 0
    },
    {
        question: "What is always in the banana stand?",
        answerChoices: ["Loose seals", "money", "ice cream sandwiches", "illusions"],
        answer: 1
    },
    {
        question: "Who is the Bluth family attorney?",
        answerChoices: ["Maggie Lizer", "Kitty", "Lucille 2", "Barry Zuckerkorn"],
        answer: 3
    },
    {
        question: "What is the Bluth vehicle of choice?",
        answerChoices: ["Staircar", "Mercedes", "Volvo", "Limo"],
        answer: 0
    },
    {
        question: "What does Gob perform?",
        answerChoices: ["Tricks", "Illusions", "Miracles", "Favors"],
        answer: 1
    }
]

// GLOBAL VARIABLES
var userGuess = ""
var correctAnswer; // variable to track # of correct guesses
var incorrectAnswer; // variable to track # of incorrect guesses
var noAnswer; // variable to store # of guess user ran out of time on
var clock = 15; // timer to keep track of time 
var running = false; // sets default status of timer to !running
var intervalId;
var questionCount = questions.length; // variable to hold number of questions to guess for 1 game
var guess; // the choice the user clicks on
var answerArr = []; // array to hold users answers
var randomPick; // generate random question to select.
var questionIndex; // 


//* CLICK BUTTON TO START THE GAME
function gameStart() {
    $("#button-start").click(function() {
        $("#quiz-box").hide();
    })
}

// TIMER FUNCTION
function timerStart() {
    if (!running) {
        intervalId = setInterval(runClock, 1000);
        running = true;
    }
}

// RUNNING CLOCK
function runClock() {
    $(".clock").html("<h3>Time Left: " + clock + "</h3>");
    clock--;

    if (clock === 0) {
        noAnswer++;
        stopGame();
        $(".answers").html("<p>Sorry. Time is up! The correct answer was:</p>")
    }
}

// stop game function
function stopGame() {
    running = false;
    clearInterval(intervalId);
}

    //CALL FUNCTION
    gameStart();
    timerStart();
    runClock();