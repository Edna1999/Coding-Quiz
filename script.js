//Query selectors
var start = document.querySelector('.start');
var questionsContainer = document.querySelector('.questions-container');
var end = document.querySelector('.end');
var input = document.querySelector('.input');
var submit = document.querySelector('.submit');
var questionsElement = document.querySelector('.questions');
var answers = document.querySelectorAll('.answer');
var counter = document.querySelector('.counter');
var instructions= document.querySelector('.container1');
var endBtn = document.querySelector('.end-button');
var conBtn = document.querySelector('.con-button');
var score = document.querySelector('.score');
var rightOrWrong = document.querySelector('.rightOrWrong');
var next = document.querySelector('.next');
;

var choice1 = document.getElementById("A");
var choice2 = document.getElementById("B");
var choice3 = document.getElementById("C");
var choice4 = document.getElementById("D");



//Object of questions
var questions = [
    
    [
        q = 'What does CSS stand for?',
        a1 = 'Cascading styles',
        a2 = 'Cascading Style Sheet',
        a3 = 'Counter Strike Source',
        a4 = 'Customer Support Services',
        correct = 2
    ], 

    [
        q = 'Where is the recommended location for your javaScript link in your html file?',
        a1 = 'Underneath your CSS link',
        a2 = 'Above your CSS link',
        a3 = 'At the end of your body',
        a4 = 'In your head tag',
        correct = 3
    
    ],

    [
        q = 'What is the document method to create a new element?',
        a1 = '.appendChild()',
        a2 = '.createChild()',
        a3 = '.createTag()',
        a4 = '.createElement()',
        correct = 4

    ],

    [
        q = 'What document method is used to set new attributes?',
        a1 = 'document.setAttribute()',
        a2 = 'document.getAttribute()',
        a3 = 'document.addAttribute()',
        a4 = 'document.removeAttribute()',
        correct = 2
    ], 

    [
        q = 'What does API\'s stand for?',
        a1 = 'Application Programming Intelligence',
        a2 = 'Analog Programming Interfaces',
        a3 = 'Application Programming Interfaces',
        a4 = 'Application Platform Interfaces',
       correct = 3
    ],

];
 
var rightAnswers = [questions[0][2], questions[1][3], questions[2][4], questions[3][1], questions[4][3]];
var choices = [choice1, choice2, choice3, choice4];
var currentQ = 0; //variable for questions index
var currentIndex = 0;
var numQuestions = 5;
var displayedQuestion;
var timerCount;
var timer;
var correctAnswers = 0;
var click = false;
var wrongAnswers = 0;
var deduction = -10;
var answerList = [answers.textContent];



//function for when start button is clicked
start.addEventListener('click', function startQuiz() {

    start.setAttribute('style', 'display:none');
    instructions.setAttribute('style', 'display:block');
  
    
})


//function for when end quiz button is clicked
endBtn.addEventListener('click', function(){
       
    instructions.setAttribute('style', 'display:none');
    start.setAttribute('style', 'display:block');

})



//timer 
function startTimer(){

    timer = setInterval(function(){
    timerCount--;

    counter.textContent = timerCount;

    if(timerCount === 0) {
        clearInterval(timer);
        endGame();
        rightOrWrong.textContent = 'Too Slow!';
       
    } 

   
    },1000)

}

//timer to reduce time
function deductTime(){
   
        timerCount-=15
    
        counter.textContent = timerCount;

}

//function for when continue button is clicked
conBtn.addEventListener('click', function(){
    startTimer();
    
    timerCount = 75;
   
 
    instructions.setAttribute('style', 'display:none');
    questionsContainer.setAttribute('style', 'display:block');
   
   nextQuestion();
   
})

 //to go to next question

for (var j = 0; j < answers.length; j++){
 answers[j].addEventListener('click', function(event){
 

        if( event.target.textContent === rightAnswers[0] ||
            event.target.textContent === rightAnswers[1] ||
            event.target.textContent === rightAnswers[2] ||
            event.target.textContent === rightAnswers[3] ||
            event.target.textContent === rightAnswers[4]){

              
                rightOrWrong.textContent = 'Correct!';
                correctAnswers++;
               
            }else {

                rightOrWrong.textContent = 'Wrong!';
                wrongAnswers++;
                deductTime();
             
            }

            nextQuestion();
   
 })

}
//function to generate next question
function nextQuestion() {

   displayedQuestion = questions[currentQ];
  
   currentQ++;
  
    if(currentQ <= numQuestions){
        
        questionsElement.textContent = displayedQuestion[0];
        choice1.textContent = displayedQuestion[1];
        choice2.textContent = displayedQuestion[2];
        choice3.textContent = displayedQuestion[3];
        choice4.textContent = displayedQuestion[4];


    }

    if (currentQ > numQuestions) {
        end.setAttribute('style', 'display: block');
        questionsContainer.setAttribute('style', 'display: none');
    } 
     
  
}


function endGame(){

 questionsContainer.setAttribute('style', 'display: none');
 end.setAttribute('style', 'display: block');

}
//local storage for final score and initials

var initials = input.value.trim();


localStorage.setItem('score', correctAnswers);




function displayedFinalScore() {

var lastScore = localStorage.getItem('score');
console.log(lastScore)
if (lastScore !== null) {

    console.log(lastScore)
   score.textContent = input.value + ':' +  ' your final score is ' + correctAnswers + ' out of 5'

}



}



submit.addEventListener('click', function(){
    
    displayedFinalScore();
    
})





