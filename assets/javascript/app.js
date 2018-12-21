// javascript
//Declare our global variables
var totalAnswersCorrect = 0;
var totalAnswersWrong = 0;
var countDown = 10;
var interval;
var quest = 0;
var option = 0;
var answerStatus = false;

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
        var answer1 = "";
        var answer2 = "";
        var answer3 = "";
    // if quest is over 6, we have asked all the questions and the else statment ends the game
        if (quest < 7) {
            countDown = 10;
            interval = setInterval(triviaGame.questionTimer, 1000)
            $("#question-div").html("<h3>" + triviaGame.questArr[quest] + "?</h3>")
            $("#answer-1").html("<h4>1.) " + triviaGame.optionArr[quest][0] + "</h4>")
            $("#answer-2").html("<h4>2.) " + triviaGame.optionArr[quest][1] + "</h4>")
            $("#answer-3").html("<h4>3.) " + triviaGame.optionArr[quest][2] + "</h4>")
        } else triviaGame.endGame();
    
    // set what answer the user clicked to variable answer1, then check if that answer matches
    // the last index of the corresponding sub array in optionArr holding the answer choices
    // on clicking each option, code executes to check if it is right or wrong
            
        $("#answer-1").on("click", function() {
                answer1 = $(this).text();
                    if (answer1 === "1.) " + triviaGame.optionArr[quest][3]) {
                        answerStatus = true;
                        $("#yes-no").html("<h3>CORRECT!</h3>")
                        totalAnswersCorrect++;
                    } else { 
                        $("#yes-no").html("<h3> WRONG! The correct answer was " + triviaGame.optionArr[quest][3] + "</h3>")
                        totalAnswersWrong++;
                        answerStatus = true;
                        answer1 = "";
                    }
                });
                $("#answer-2").on("click", function() {
                    answer2 = $(this).text();
                    if (answer2 === "2.) " + triviaGame.optionArr[quest][3]) {
                        answerStatus = true;
                        $("#yes-no").html("<h3>CORRECT!</h3>")
                        totalAnswersCorrect++;
                    } else { 
                        $("#yes-no").html("<h3> WRONG! The correct answer was " + triviaGame.optionArr[quest][3] + "</h3>")
                        totalAnswersWrong++;
                        answerStatus = true;
                    }
                });
                $("#answer-3").on("click", function() {
                    answer3 = $(this).text();
                    if (answer3 === "3.) " + triviaGame.optionArr[quest][3]) {
                        answerStatus = true;
                        $("#yes-no").html("<h3>CORRECT!</h3>")
                        totalAnswersCorrect++;
                    } else { 
                        $("#yes-no").html("<h3> WRONG! The correct answer was " + triviaGame.optionArr[quest][3] + "</h3>")
                        totalAnswersWrong++;
                        answerStatus = true;
                    }
                });

    },
//timer to set our countdown, also handles event if user runs out of time and doesnt
// checks if question has been answered and calls reset function
    questionTimer: function() {
        $("#countdown-div").html("<h4>Time Remaining: " + countDown +" seconds!")
        countDown--;
        if (countDown === -2) {
            clearInterval(interval)
            alert("TIME IS UP!  The correct answer was " + triviaGame.optionArr[quest][3])
            totalAnswersWrong++;
            triviaGame.resets();
        } else if (answerStatus === true) {
            clearInterval(interval)
            setTimeout(triviaGame.resets(), 2000)
        }
    },
//resets our variables or increases them.  Calls quesions function to start new question
    resets: function() {
        $("#yes-no").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#question-div").empty();
        quest++;
        answerStatus = false;
        triviaGame.questions();
    },
//called when game is over and all questions have been answered
    endGame: function() {
        $("#question-div").html("<h3>GAME OVER</h3>")
        $("#answer-1").html("<h3>You got " + totalAnswersCorrect + " answers right</h3>")
        $("#answer-2").html("<h3>You got " + totalAnswersWrong + " answers right</h3>")
        $("#answer-3").html("<button id='play-again-button'>PLAY AGAIN?</button>")
        $("#play-again-button").on("click", function() {
            location.reload()
        })
    }

}
 triviaGame.begin()



