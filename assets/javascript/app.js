// javascript
//Declare our global variables
var totalAnswersCorrect = 0;
var totalAnswersWrong = 0;
var countDown = 10;
var interval;
var quest = 0;
var option = 0;
var answerStatus = 0;

//Game is stored in a large object
var triviaGame = {
//questions array holds each question
    questArr: ["Which president owned a pet billy goat",
     "Which president had approximately over 250 wrestling wins",
      "Which president was recorded being noticably drunk during his inauguration",
      "Which president was the heaviest, weighing in at 350lbs at the end of his term",
      "Which president was the first to be born in the United States",
      "Which president won the electoral college and presidency race by a single vote",
      "Which president became the legal guardian to his friend's daughter, and married her 10 years later"
    ],
// answer options array holds sub array with 3 answer choices and the final index [3]
// holds the correct answer for each question.  Each sub array corresponds to the same quesiton
// index for the questions array above
    optionArr: [
        ["John Tyler", "George Washington", "William Henry Harrison", "William Henry Harrison"],
        ["Abraham Lincoln", "Teddy Roosevelt", "Dwight Eisenhower", "Abraham Lincoln"],
        ["Andrew Johnson", "George Bush Jr", "James Garfield", "Andrew Johnson"],
        ["James Madison", "William Taft","Grover Cleveland", "William Taft"],
        ["James Polk", "John Quincy Adams", "Martin Van Buren", "Martin Van Buren" ],
        ["Ulysses Grant", "Rutherford Hayes", "Benjamin Harrison"],
        ["Donald Trump", "Grover Cleveland", "Woodrow Wilson", "Grover Cleveland"]
    ],
    
    //function is the game beginning home screen
    begin: function() {
        $("#countdown-div").html("<h4>Click play below to begin the game!</h4>")
        $("#question-div").html("<button id='play-button'>P L A Y !</button>")
        $("#play-button").on("click", function() {
            triviaGame.questions();
        });    
    },
    
    questions: function() {
    // if quest is over 6, we have asked all the questions and the else statment ends the game
        if (quest < 7) {
            console.log(quest)
            interval = setInterval(triviaGame.questionTimer, 1000)
            $("#question-div").html("<h3>" + triviaGame.questArr[quest] + "?</h3>")
            $("#answer-1").html("<h4>1.) " + triviaGame.optionArr[quest][0] + "</h4>")
            $("#answer-2").html("<h4>2.) " + triviaGame.optionArr[quest][1] + "</h4>")
            $("#answer-3").html("<h4>2.) " + triviaGame.optionArr[quest][2] + "</h4>")

    // set what answer the user clicked to variable answer1, then check if that answer matches
    // the last index of the corresponding sub array in optionArr holding the answer choices
    // answer status is then set to 1 or 2 if the answer is right or wrong.  Then run the checkAnswer function
            $("#answer-1").on("click", function() {
            var answer1 = $(this).text();
                if (answer1 === "1.) " + triviaGame.optionArr[quest][3]) {
                    answerStatus = 1;
                } else { answerStatus = 2; }
                triviaGame.checkAnswer();
            });
            $("#answer-2").on("click", function() {
                var answer1 = $(this).text();
                if (answer1 === "2.) " + triviaGame.optionArr[quest][3]) {
                    answerStatus = 1;
                } else { answerStatus = 2; }
                triviaGame.checkAnswer();
            });
            $("#answer-3").on("click", function() {
                var answer1 = $(this).text();
                if (answer1 === "3.) " + triviaGame.optionArr[quest][3]) {
                    answerStatus = 1;
                } else { answerStatus = 2; }
                triviaGame.checkAnswer();
            });
        } else triviaGame.endGame();
    },
//timer to set our countdown, also handles event if user runs out of time and doesnt
// make a selection
    questionTimer: function() {
        $("#countdown-div").html("<h4>Time Remaining: " + countDown +" seconds!")
        countDown--;
        if (countDown === -2) {
            clearInterval(interval)
            alert("TIME IS UP!  The correct answer was " + triviaGame.optionArr[quest][3])
            totalAnswersWrong++;
            triviaGame.resets();
        };
    },
//checks the status of answerStatus which holds a 1 or 2 for right or wrong answer
    checkAnswer: function() {
        if (answerStatus === 1) {
            alert("CORRECT!")
            clearInterval(interval)
            answerStatus = 0;
            totalAnswersCorrect++;
            triviaGame.resets();
            console.log("correct")
        } else if (answerStatus === 2) {
            clearInterval(interval)
            alert("Wrong!  The correct answer is " + triviaGame.optionArr[quest][3])
            answerStatus = 0;
            totalAnswersWrong++;
            triviaGame.resets();
            console.log("incorrect")
        }; 
    },
//resets our variables or increases them.  Calls quesions function to start new question
    resets: function() {
        countDown = 10;
        quest++;
        answerStatus = 0;
        triviaGame.questions();
    },
//called when game is over and all questions have been answered
    endGame: function() {
        alert("Game Over!")
        console.log(totalAnswersCorrect + " correct answers")
        console.log(totalAnswersWrong + " wrong answers")
    }

}
 triviaGame.begin()



