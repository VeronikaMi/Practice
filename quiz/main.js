const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');

const numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestions = document.getElementById('number-of-all-questions');

let indexOfQuestion,
    indexOfPage=0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score =0;

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
  {
    question:'Сколько месяцев в году содержат по 28 дней?',
    options : [
      '1',
      '2',
      '12',
      '10'
    ],
    rightAnswer:2
  },
  {
    question:'Какого газа в атмосфере Земли больше всего??',
    options : [
      'Кислород',
      'Углекислый газ',
      'Азот',
      'Водород'
    ],
    rightAnswer:2
  },
  {
    question:'Какой римской цифры не существует?',
    options : [
      '1000',
      '0',
      '10000',
      '100000'
    ],
    rightAnswer:1
  },
  {
    question:'В какой стране более одной столицы?',
    options : [
      'ЮАР',
      'Алжир',
      'Тунис',
      'Италия'
    ],
    rightAnswer:0  
  },
  {
    question:'Назовите столицу Европейского Союза?',
    options : [
      'Вена',
      'Брюссель',
      'Кёльн',
      'Париж'
    ],
    rightAnswer:1
  }

];

numberOfAllQuestions.innerHTML = questions.length;

const load = () =>{
  question.innerHTML = questions[indexOfQuestion].question; //question
  
  //answers
  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  //number of question for user
  numberOfQuestion.innerHTML = indexOfPage + 1; 
  
  //next page load
  indexOfPage++;

}

let completedQuestions = [];

const randomQuestion = ()=>{
  randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = false;
  
  if(indexOfPage == questions.length){
    quizOver();
  }
  else{
    if(completedQuestions.length > 0){
      completedQuestions.forEach(item =>{
        if(item == randomNumber){
          hitDuplicate = true;
        }
      });
      if(hitDuplicate){
        randomQuestion();
      }
      else{
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if(completedQuestions.length == 0){
      indexOfQuestion = randomNumber;
      load();
    }
  }
  completedQuestions.push(indexOfQuestion);
}


const checkAnswer = el =>{
  if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  }
  else{
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');

  }

  disabledOptons();
}

for(option of optionElements){
  option.addEventListener('click',e => checkAnswer(e));
}

const disabledOptons = ()=>{
  optionElements.forEach(item =>{
    item.classList.add('disabled');
    if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
      item.classList.add('correct');
    }
  })
}

const enabledOptons = ()=>{
  optionElements.forEach(item =>{
    item.classList.remove('disabled','correct','wrong');
  })
}

const validate = ()=>{
  if(!optionElements[0].classList.contains('disabled')){
    alert('Вы должны выбрать ответ');
  }
  else{
    randomQuestion();
    enabledOptons();
  }
}

const answerTracker = ()=>{
  questions.forEach(()=>{
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
}

const updateAnswerTracker = status =>{
  answersTracker.children[indexOfPage-1].classList.add(`${status}`);
}

const tryAgain = ()=>{
  window.location.reload(); //reload page to start again 
}

btnTryAgain.addEventListener('click',tryAgain);

btnNext.addEventListener('click',()=>{
  validate();
})

const quizOver = ()=>{
  document.querySelector('.quiz-over-modal').classList.add('active');
  numberOfAllQuestions2.innerHTML = questions.length;
  correctAnswer.innerHTML = score;
}

window.addEventListener('load', ()=>{
  randomQuestion();
  answerTracker();
})