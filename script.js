var timeCount = document.getElementById('time-count');
var viewScore = document.getElementById('view-score');
var divWelcome = document.querySelector('.welcome');
var questionTitle = document.createElement('h1');
var btnStart = document.getElementById('start-button')
var questionDiv = document.querySelector('.question')
var answerList1 = document.getElementById('answer1')
var answerList2 = document.getElementById('answer2')
var answerList3 = document.getElementById('answer3')
var answerList4 = document.getElementById('answer4')


var answersDiv = document.querySelectorAll('.answers');
console.log(answersDiv)
function showQuestions(question) {

    function styleDisplay() {
        questionDiv.setAttribute('style','display: flex;justify-content:center;flex-direction: column;align-items: center;height: 200px;')
        questionTitle.setAttribute('style','background-color: green; margin-bottom: 5%;')
        for(var i = 0; i < answersDiv.length; i++) {
            answersDiv[i].setAttribute('style','background-color: yellow; margin: 1% 0;')
        }
    
    }

    for(var keys in question) {
        questionTitle.textContent = question['question1']
        answerList1.textContent = question['answer1']
        answerList2.textContent = question['answer2']
        answerList3.textContent = question['answer3']
        answerList4.textContent = question['answer4']
        questionDiv.append(questionTitle,answerList1,answerList2,answerList3,answerList4)
       
    }
    styleDisplay()

}



var quesTionsObj = {
    question1: 'What HTML Stand for?',
    answer1: 'hyper markup text language',
    answer2: 'hooper moon text language',
    answer3: 'hangover man think loud',
    answer4: 'hello thank man lord'
}    

var question1correct = quesTionsObj.answer1


console.log(question1correct)

var quesTionsObj2 = {
    question1: 'Who owns Twitter?',
    answer1: 'Donald Trump',
    answer2: 'Kanye West',
    answer3: 'Bill Gates',
    answer4: 'Elon Musk'
}  


var question2correct = quesTionsObj2.answer4



var quesTionsObj3 = {
    question1: 'How many states does USA have?',
    answer1: '42',
    answer2: '50',
    answer3: '99',
    answer4: '75'
}  

var question3correct = quesTionsObj3.answer2

console.log(question3correct)



// CHECK IF ANSWER IS CORRECT



function hideWelcome() {
    divWelcome.setAttribute('style','display:none;')
}

function shuffleQuestions() {
    var array = [quesTionsObj,quesTionsObj2,quesTionsObj3]

    var randomNum = Math.floor(Math.random() * array.length)

    return array[randomNum]

}

var shuffled = shuffleQuestions()


function countdown() {
    var timer = 10;
    var setTimer = setInterval(() => {
        timer--;
        timeCount.textContent = timer;
        if(timer === 0) {
            clearInterval(setTimer)
            timeCount.textContent = 'GAME OVER'
        }


    }, 1000);
}

    

//  console.log(gameStart())
function startGame() {
    hideWelcome()
    showQuestions(shuffled)
    countdown()



}
   


btnStart.addEventListener('click', startGame)


    






