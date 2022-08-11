//create variables for querey selector
var timer = document.querySelector("#time");
var Scores = document.querySelector("#highscores");
var begin = document.querySelector("#begin");
var questions = document.querySelector("#questions");
var Answers = document.querySelector("#answers");


//Questions in array of objects with answers
//Question and answer bank bank
var questions = [
    {
        question:"Question 1",
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
        ],
        correctAnswerIndex: 1,
    },

    {
        question:"question 2",
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
        ],
        correctAnswerIndex: 1,
    },

    {
        question:"question 3",
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
        ],
        correctAnswerIndex: 1,
    },
]


// functions for buttons/event listeners

Scores.addEventListener("click", listScores);
begin.addEventListener("click", quizStart);


//make the questions appear on the screen
function quizStart () {
    beginTime();

}


//make scores appear



//timer to start and countdown

var timerEl = document.getElementById('time');



function beginTime () {
    var clockTime = 100;
    var timeInterval = setInterval(function () {
        if (clockTime > 1){
            
 }    
}
}
