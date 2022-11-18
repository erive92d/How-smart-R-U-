var timeCount = document.getElementById('time-count');
var viewScore = document.getElementById('view-score');
var divWelcome = document.querySelector('.welcome');
var btnStart = document.getElementById('start-button')
var answerClass = document.querySelectorAll('.answers')
var questionClass = document.getElementById('question')
var questionCont = document.querySelector('.question-container')
var answerId1 = document.getElementById('answer1')
var answerId2 = document.getElementById('answer2')
var answerId3 = document.getElementById('answer3')
var answerId4 = document.getElementById('answer4')
var showResult = document.getElementById('show-result')
var main = document.getElementById('main')
// showResult.textContent = '' // correct or incorrect
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
// var currentQuestion = Math.floor(Math.random() * questionObj.length) //USED FOR INDEX

// console.log(currentQuestion)
function hideWelcome() {
    divWelcome.setAttribute('style','display:none;border:3px solid black;width: 50%;margin: auto;border-radius:10px;background-color: #69B8F5')

}
var timeLeft = 5;


function displayQuestion1() {

    questionClass.textContent = questionObj[0].question;
    answerId1.textContent = questionObj[0].choice1;
    answerId2.textContent = questionObj[0].choice2;
    answerId3.textContent = questionObj[0].choice3;
    answerId4.textContent = questionObj[0].choice4;
    

    
    answerId1.addEventListener('click', function(){
        showResult.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion2()

    })
    answerId2.addEventListener('click', function(){
        showResult.textContent = 'Correct'
        timeLeft += 3
        score++
        displayQuestion2()
    })

    answerId3.addEventListener('click', function(){
        showResult.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion2()

    })
 
    answerId4.addEventListener('click', function(){
        showResult.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion2()

    })
}



function displayQuestion2() {

    questionClass.textContent = questionObj[1].question;
    answerId1.textContent = questionObj[1].choice1;
    answerId2.textContent = questionObj[1].choice2;
    answerId3.textContent = questionObj[1].choice3;
    answerId4.textContent = questionObj[1].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft ++
        score++
        displayQuestion3()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion3()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion3()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion3()
    })
    
}

function displayQuestion3() {

    questionClass.textContent = questionObj[2].question;
    answerId1.textContent = questionObj[2].choice1;
    answerId2.textContent = questionObj[2].choice2;
    answerId3.textContent = questionObj[2].choice3;
    answerId4.textContent = questionObj[2].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft--
        displayQuestion4()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion4()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft ++
        score++
        displayQuestion4()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion4()
    })
}



function displayQuestion4() {

    questionClass.textContent = questionObj[3].question;
    answerId1.textContent = questionObj[3].choice1;
    answerId2.textContent = questionObj[3].choice2;
    answerId3.textContent = questionObj[3].choice3;
    answerId4.textContent = questionObj[3].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion5()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion5()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion5()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft += 3
        score++
        displayQuestion5()
    })
}

function displayQuestion5() {

    questionClass.textContent = questionObj[4].question;
    answerId1.textContent = questionObj[4].choice1;
    answerId2.textContent = questionObj[4].choice2;
    answerId3.textContent = questionObj[4].choice3;
    answerId4.textContent = questionObj[4].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft += 3
        score++
        displayQuestion6()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion6()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion6()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion6()
    })
}

function displayQuestion6() {

    questionClass.textContent = questionObj[5].question;
    answerId1.textContent = questionObj[5].choice1;
    answerId2.textContent = questionObj[5].choice2;
    answerId3.textContent = questionObj[5].choice3;
    answerId4.textContent = questionObj[5].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion7()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion7()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft += 3
        score++
        displayQuestion7()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion7()
    })
}


function displayQuestion7() {

    questionClass.textContent = questionObj[6].question;
    answerId1.textContent = questionObj[6].choice1;
    answerId2.textContent = questionObj[6].choice2;
    answerId3.textContent = questionObj[6].choice3;
    answerId4.textContent = questionObj[6].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft += 3
        score++
        displayQuestion8()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion8()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion8()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion8()
    })
}

function displayQuestion8() {

    questionClass.textContent = questionObj[7].question;
    answerId1.textContent = questionObj[7].choice1;
    answerId2.textContent = questionObj[7].choice2;
    answerId3.textContent = questionObj[7].choice3;
    answerId4.textContent = questionObj[7].choice4;
    

    
    answerId1.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion1()
    })
    answerId2.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion1()
    })

    answerId3.addEventListener('click', function(){
        questionClass.textContent = 'Correct'
        timeLeft += 3
        score++
        displayQuestion1()
    })
 
    answerId4.addEventListener('click', function(){
        questionClass.textContent = 'Wrong'
        timeLeft -= 2
        displayQuestion1()
    })
}





//TIMER

function setTimer() {
   
    var timer = setInterval(function(){
        timeLeft--

        timeCount.textContent = timeLeft

        if(timeLeft === 0 || timeLeft < 0) {
            clearInterval(timer);
        main.setAttribute('style','display:block; font-size: 150%;font-weight: 700; text-align:center; height: 200px;')
        main.textContent = 'GAME OVER\n Your Score: '  + score
       
        }


    },1000)

}

function start() { //SECOND 
    hideWelcome()
    questionCont.setAttribute('style','display: flex;')
    displayQuestion1()
    setTimer()
    
   
    
}



btnStart.addEventListener('click', start) //START GAME

    






