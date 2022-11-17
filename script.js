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
var main = document.getElementById('main')
showResult.textContent = '' // correct or incorrect
questionClass.appendChild(showResult)

var myScore = 0;

// function nextQuest() {
    
//     var nextButton = document.createElement('button');
//     nextButton.textContent = 'next question'
    
//     nextButton.setAttribute('style','display:block;background-color:green;width: 70px')
    
//     showResult.appendChild(nextButton)
    
    
// }

//SAVE SCORES

localStorage.setItem('score', myScore)
var score = localStorage.getItem("score")

viewScore.addEventListener('click', function() {
    viewScore.textContent = score
})

var questionObj = [{
    question: 'Who owns Twitter?',
    choice1: 'Bill Gates',
    choice2: 'Elon Musk',
    choice3: 'George Washington',
    choice4: 'Kanye West'
} , {

    question: 'What is the largest city in USA?',
    choice1: 'New York',
    choice2: 'Los Angeles',
    choice3: 'Austin',
    choice4: 'San Francisco'
} , {

    question: 'When is Christmas celebrated?',
    choice1: 'May 26',
    choice2: 'November 1',
    choice3: 'December 25',
    choice4: 'September 4'

} , {

    question: 'What is HTML stand for?',
    choice1: 'Home Town Markup Language',
    choice2: 'Hyper Text Manly Language',
    choice3: 'Hollister Tillys Marshalls Levis',
    choice4: 'Hyper Text Markup Language'

} , {

    question: 'How many seasons are there in a year?',
    choice1: '4',
    choice2: '1',
    choice3: '3',
    choice4: '5'

} , {

    question: 'Who is the first president of USA?',
    choice1: 'Thomas Jefferson',
    choice2: 'Ted Roosevelt',
    choice3: 'George Washington',
    choice4: 'Abraham Lincoln'

} , {

    question: 'What is CSS stand for?',
    choice1: 'Cascading Style Sheet',
    choice2: 'Coding Style Sheet',
    choice3: 'Cool Style Sheet',
    choice4: 'Coding Skill Set'

} , {

    question: 'Who is the governor of California?',
    choice1: 'Nancy Pelosi',
    choice2: 'Ted Cruz',
    choice3: 'Gavin Newsom',
    choice4: 'Ron DeSantis'

}
]
var currentQuestion = Math.floor(Math.random() * questionObj.length)

console.log(currentQuestion)

divWelcome.setAttribute('style','border:3px solid black;width: 50%;margin: auto;border-radius:10px;background-color: #69B8F5')
var timeLeft = 5;

function displayQuestion(question) {
    
    
    divWelcome.textContent = question[currentQuestion].question;
    answerId1.textContent = question[currentQuestion].choice1;
    answerId2.textContent = question[currentQuestion].choice2;
    answerId3.textContent = question[currentQuestion].choice3;
    answerId4.textContent = question[currentQuestion].choice4;


    if(currentQuestion === 1) {

    answerId1.addEventListener('click', function(){
        showResult.textContent = 'Correct'
        currentQuestion++
        timeLeft += 10
        score++
      
        
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
            timeLeft += 10
            score++
            currentQuestion++

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
            score++
            timeLeft += 10
            currentQuestion++
            
        })
        answerId4.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
    } else  if(currentQuestion === 3) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId2.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId3.addEventListener('click', function(){
            showResult.textContent = 'Wrong'  
        })
        answerId4.addEventListener('click', function(){
            
            showResult.textContent = 'Correct'
            score++
            timeLeft += 10
            currentQuestion++
        })
    } else  if(currentQuestion === 4) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Correct'
            timeLeft += 10
            score++
            currentQuestion++
            
          
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
    else  if(currentQuestion === 5) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId2.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
        answerId3.addEventListener('click', function(){
            showResult.textContent = 'Correct'
            score++
            timeLeft += 10
            currentQuestion++
            
        })
        answerId4.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
    }  else  if(currentQuestion === 6) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Correct'
            timeLeft += 10
            score++
            currentQuestion++
            
          
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
    else  if(currentQuestion === 7) {

        answerId1.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
          
        })
        answerId2.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
            
        
        })
        answerId3.addEventListener('click', function(){
            showResult.textContent = 'Correct'
            timeLeft += 10
            score++
            currentQuestion++
            
        })
        answerId4.addEventListener('click', function(){
            showResult.textContent = 'Wrong'
        })
    }
}

//TIMER

function setTimer() {
   
    var timer = setInterval(function(){
        timeLeft--

        timeCount.textContent = timeLeft

        if(timeLeft === 0) {
            clearInterval(timer);
            main.setAttribute('style','display:block; font-size: 150%;font-weight: 700; text-align:center')
         main.textContent = 'GAME OVER'
        }


    },1000)

}

function start() {
    displayQuestion(questionObj)
    setTimer()
    questionClass.setAttribute('style','display: flex;')
   
    
}



btnStart.addEventListener('click', start)

    






