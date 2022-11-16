var timeCount = document.getElementById('time-count');
var viewScore = document.getElementById('view-score');
var divWelcome = document.querySelector('.welcome');
var btnStart = document.getElementById('start-button')
var answerClass = document.querySelectorAll('.answers')
var questionClass = document.querySelector('.question')
var answerId1 = document.getElementById('answer1')
var answerId2 = document.getElementById('answer2')
var answerId3 = document.getElementById('answer3')
var answerId4 = document.getElementById('answer4')
var showResult = document.createElement('h2');
showResult.textContent = ''
questionClass.appendChild(showResult)
var currentQuestion = 2

var questionObj = [{
    question: 'What is 2 + 2',
    choice1: '5',
    choice2: '4',
    choice3: '10',
    choice4: '6'
} , {

    question: 'What is 4 + 2',
    choice1: '6',
    choice2: '4',
    choice3: '10',
    choice4: '8'
} , {

    question: 'What is 8 + 2',
    choice1: '6',
    choice2: '4',
    choice3: '10',
    choice4: '8'

}
]




function displayQuestion(question) {
    
    
    divWelcome.textContent = question[currentQuestion].question;
    answerId1.textContent = question[currentQuestion].choice1;
    answerId2.textContent = question[currentQuestion].choice2;
    answerId3.textContent = question[currentQuestion].choice3;
    answerId4.textContent = question[currentQuestion].choice4;


    if(currentQuestion === 1) {

    answerId1.addEventListener('click', function(){
        showResult.textContent = 'Correct'
    })
    answerId2.addEventListener('click', function(){
        showResult.textContent = 'Wrong'
    })
    answerId3.addEventListener('click', function(){
        showResult.textContent = 'Wrong'
    })
    answerId4.addEventListener('click', function(){
        showResult.textContent = 'Wrong'
    })
}
    else  if(currentQuestion === 0) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId2.addEventListener('click', function(){
            showResult.textContent = 'Correct'
        })
        answerId3.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId4.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
    }
    else  if(currentQuestion === 2) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId2.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId3.addEventListener('click', function(){
            showResult.textContent = 'Correct'
        })
        answerId4.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
    }
}



// for(var i = 0; i < answerClass.length; i++) {
//     answerClass[i].addEventListener('click',function() {
//         )
//     })
// }




console.log(questionObj[currentQuestion].correct)


function start() {
    displayQuestion(questionObj)
    questionClass.setAttribute('style','display: flex;')
   
    
}



btnStart.addEventListener('click', start)

    






