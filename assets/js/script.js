let startEl = document.getElementById("start-el");
let timerEl = document.getElementById("timer-el");
let questionEL = document.getElementById("question-el");
let answerEL = document.querySelectorAll(".answer-el");
let commentEl = document.getElementById("comment-el");
let gameOverEl = document.getElementById("gameover-el");
let highScoreEL = document.getElementById("highscore-el");
let initialEl = document.getElementById("initials-el");
let submitBtn = document.getElementById("btn");

let HS = localStorage.getItem("highscore"); 
let score = 0;
let secondsLeft = 120;
const timerDown = 1;

highScoreEL.textContent = HS;



const qaObject = {
    questionOne: "Which tag do you use to insert a JavaScript file into an HTML file?",
    answerOne: ["<script>", "<link>", "<body>", "</script>"],
    correctAnswerOne: 0,

    questionTwo: "How do you comment out code in a JavaScript file?",
    answerTwo: ["-->", "//", "&&", "||"],
    correctAnswerTwo: 1,

    questionThree: "What are statements in JavaScript?",
    answerThree: ["syntax construct and commands that perform actions", "A storage for data", "Telling someone your opinion", "A type of primitive data type"],
    correctAnswerThree: 0,
   
    questionFour: "Which one is a data type?",
    answerFour: ["number", "string", "boolean", "all of the above"],
    correctAnswerFour: 3,

    questionFive: "When adding a string and number the console will log both as what?",
    answerFive: ["boolean", "string", "string and number", "number"],
    correctAnswerFive: 3,

    questionSix: "If, else statements are rarely used in functions",
    answerSix: ["true", "false"," ", " "],
    correctAnswerSix: 1,

    questionSeven: "This logical operator returns true when both operands are truthy",
    answerSeven: ["what is ||", "what is !", "what is &&", "what is ??"],
    correctAnswerSeven: 2,

    questionEight: "A ____ ____ is used to repeat actions",
    answerEight: ["fruit loop", "for loop", "while loop", "for or while loop"],
    correctAnswerEight: 3
};


function timer() {
let timerStart = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time left: " + secondsLeft;


    if(secondsLeft === 0) {
        clearInterval(timerStart);
        gameOver();
    }
}, 1000)
};

function gameOver() {
    
    gameOverEl.textContent = "Game Over! Your score is: " + score 

    submitBtn.addEventListener("click", function() {
          highScoreEL.textContent = initialEl + score;
          localStorage.setItem("highscore", score);   
})
}

startEl.addEventListener("click",function() {
    timer()
    question1()
});

function question1() {
    questionEL.textContent = qaObject.questionOne

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerOne[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerOne === index) {
                question2();
                score += 5
                commentEl.textContent = "Correct!"
                

            } else {
                question2()
                commentEl.textContent = "Wrong!"
                clearInterval(timerStart);
                secondsLeft -= timerDown
                
            }
        })
    })

}

function question2() {
    questionEL.textContent = qaObject.questionTwo

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerTwo[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerTwo === index) {
                question3();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                question3()
                commentEl.textContent = "Wrong!"
                secondsLeft -= timerDown
            }
        })
    })

}

function question3() {
    questionEL.textContent = qaObject.questionThree

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerThree[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerThree === index) {
                question4();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                question4()
                commentEl.textContent = "Wrong!"
                secondsLeft -= timerDown
            }
        })
    })

}

function question4() {
    questionEL.textContent = qaObject.questionFour

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerFour[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerFour === index) {
                question5();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                question5()
                commentEl.textContent = "Wrong!"
                secondsLeft -= timerDown
            }
        })
    })

}

function question5() {
    questionEL.textContent = qaObject.questionFive

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerFive[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerFive === index) {
                question6();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                question6()
                commentEl.textContent = "Wrong!"
                secondsLeft -= timerDown
            }
        })
    })

}

function question6() {
    questionEL.textContent = qaObject.questionSix

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerSix[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerSix === index) {
                question7();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                question7()
                commentEl.textContent = "Wrong!"
                secondsLeft -= timerDown
            }
        })
    })

}

function question7() {
    questionEL.textContent = qaObject.questionSeven

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerSeven[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerSeven === index) {
                question8();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                question8()
                commentEl.textContent = "Wrong!"
                secondsLeft -= timerDown
            }
        })
    })

}

function question8() {
    questionEL.textContent = qaObject.questionTwo

    answerEL.forEach(function(element, index) {
        element.textContent = qaObject.answerEight[index];

        element.addEventListener('click', function(){

            if (qaObject.correctAnswerEight === index) {
                gameOver();
                score += 5
                commentEl.textContent = "Correct!"

            } else {
                gameOver()
                commentEl.textContent = "Wrong!"
            }
        })
    })

}


