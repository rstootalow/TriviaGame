/* PSEUDOCODE */
 
// CREATE QUESTIONS OBJECT THAT WILL HOUSE ALL QUESTIONS FOR THE GAME
    var options = [
        {
            question: "Who is Ann Veal?",
            choice: ["Michael's sister", "Bluth family rival",  "Banana stand employee", "Her? What is she funny or something?"],
            answer: 3
        },
        {
            question: "What is always in the banana stand?",
            choice: ["Loose seals", "money", "ice cream sandwiches", "illusions"],
            answer: 1
        },
        {
            question: "Who is the Bluth family attorney?",
            choice: ["Maggie Lizer", "Kitty", "Lucille 2", "Barry Zuckerkorn"],
            answer: 3
        },
        {
            question: "What is the Bluth vehicle of choice?",
            choice: ["Mercedes", "Volvo", "Staircar", "Limo"],
            answer: 2
        },
        {
            question: "What does Gob perform?",
            choice: ["Tricks", "Illusions", "Miracles", "Favors"],
            answer: 1
        }
    ]

    // GLOBAL VARIABLES
    var userGuess = "";
    var correctAnswer = 0; // variable to track # of correct guesses
    var incorrectAnswer = 0; // variable to track # of incorrect guesses
    var noAnswer; // variable to store # of guess user ran out of time on
    var clock = 15; // timer to keep track of time 
    var running = false; // sets default status of timer to !running
    var intervalId;
    var questionCount = options.length; // variable to hold number of questions to guess for 1 game
    var userGuess; // the choice the user clicks on
    var randomPick; // generate random question to select.
    var questionIndex; // 
    var questionContainer = [];
    var nextQuestionArr = [];


    $(".game-container").hide();
    $("#button-reset").hide();
    //* CLICK BUTTON TO START THE GAME
    function gameStart() {
        $("#button-start").click(function() {
            $("#quiz-box").hide();
            $(".game-container").show();
            showQuestion();
            timerStart();
            for (var i = 0; i < options.length; i++) {
                questionContainer.push(options[i]);
            }
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
        $("#clock").html("<h3>Time Left: " + clock + "</h3>");
        clock--;
            if (clock === 0) {
                incorrectAnswer++;
                setTimeout(function () {
                    // alert("Sorry. Time is up!");
                    stopGame();
                    nextQuestion();
                    clock = 15;
                    timerStart();
                }, 2000);
            }
        }

    // stop game function
    function stopGame() {
        running = false;
        clearInterval(intervalId);
    }

    function showQuestion() {
        questionIndex = Math.floor(Math.random()*options.length);
        pick = options[questionIndex];
        

        $("#questions").html("<h2>" + pick.options + "</h2>");
        for (var i = 0; i < pick.choice.length; i++) {
            var userChoices = $("<button>");
            userChoices.addClass("possibleanswers");
            userChoices.html(pick.choice[i]);
            userChoices.attr("data-guess", i);
            $("#user-answers").append(userChoices);
        }
    }

    // ANSWER CHECK FUNCTION
    $(".possibleanswers").on("click", function() {
        userGuess = parseInt($(this).attr("data-guess"));

        if (userGuess === choice) {
            stopGame();
            correctAnswer++;
            userGuess="";
            $("#user-answers").html("<p>Correct!</p>");
        } else {
            stopGame();
            incorrectAnswer++;
            userGuess="";
            $(".answers").html("<h3>Wrong! The correct answer is: " + randomPick.choice[randomPick.answer] + "</h3>");
        }
    });

    function nextQuestion() {

        nextQuestionArr.push(randomPick);
        options.splice(questionIndex, 1);

        if ((incorrectAnswer + correctAnswer === questionCount)) {
            $("#clock").hide();
            $("#questions").empty();
            $("#questions").html("<h3>Game Over!");
            $("#user-answers").append("<h4> Correct: " + correctAnswer + "</h4>");
            $("#user-answer").append("<h4> Incorrect: " + incorrectAnswer + "</h4>");
            $("#button-reset").show();
            correctAnswer = 0;
            incorrectAnswer = 0;
        } else {
            showQuestion();
        }
    }

    $("#button-reset").on("click", function(){
        $("#button-reset").hide();
        $("#user-answer").empty();
        $("#questions").empty();
        for (var i = 0; i < options.length; i++) {
            options.push(questionContainer[i]);
        }
    })

        //CALL FUNCTION
    gameStart()
    timerStart();
    runClock();
    showQuestion();
    nextQuestion();
