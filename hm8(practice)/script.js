var main = document.getElementById("main");
var quizSection = document.getElementById("allQuiz");

var name = document.getElementById("name");
var surname = document.getElementById("surname");

function startQuiz() {
    main.style.display = "none";
    quizSection.style.display = "flex";
}




var questionBank= [
    {
        question : 'What does HTML stand for?',
        option : ['Hyperlinks and Text Markup Language','Hyper Text Markup Language','Home Tool Markup Language','HTML'],
        answer : 'Hyper Text Markup Language'
    },
    {
        question : 'Which property is used to change the background color?',
        option : ['color','background-color','bgcolor','background'],
        answer : 'background-color'
    },
    {
        question : 'Which property is used to change the left margin of an element?',
        option : ['padding-left','margin-left','indent','No correct answers'],
        answer : 'margin-left'
    },
    {
        question : 'jQuery uses CSS selectors to select elements',
        option : ['True','False','I dont know','No correct answers'],
        answer : 'True'
    },
    {
        question : 'What does CSS stand for?',
        option : ['Creative Style Sheets','Cascading Style Sheets','Computer Style Sheets','Colorful Style Sheets'],
        answer : 'Cascading Style Sheets'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;


function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}


function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}


function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'

        var resultsInner = document.getElementById("resultsInner");
        resultsInner.innerHTML = `
                <h2 id="end">${surname.value}</h2>
                
            `;
    }
}


next.addEventListener('click',nextQuestion);


function backToQuiz(){
    location.reload();
}


function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    

    
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();

