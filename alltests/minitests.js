let taskBlock = document.querySelectorAll(".tasks");
let chooseBtns = document.querySelectorAll(".choose-items");
let countAnwers = 0;
let countBtns = 0;

let comentar = document.querySelectorAll(".comentar");
let comentarBtns = document.querySelectorAll("#readComentar");

let checkBtns = document.querySelectorAll("#checkbtn");
let answerChoosing = document.querySelectorAll("#answerChoosing");

let finishTest = document.querySelector('.finishtest');
let main = document.querySelector('.containertop');

let nexttaskBtn = document.querySelectorAll('.nexttask');
let taskNum = document.querySelector('#description');

let x = taskBlock.length - 1;



console.log(x);
console.log(nexttaskBtn);
console.log(comentarBtns);


function isEquals(index){
    return;
}

let currentTaskIndex = 0;




for (let i=0; i < chooseBtns.length; i++) {
    chooseBtns[i].addEventListener('click', function(Event){
        Event.preventDefault();
        taskBlock[i].classList.add('visible');
        for (let j = 0; j < taskBlock.length; j++) {
            if(j == i){
                
                continue;
            }else{
                taskBlock[j].classList.remove('visible');
                
            }
            
        }
    });
}
for(let i=0; i < nexttaskBtn.length; i++){
    nexttaskBtn[i].addEventListener('click', function(Event){
        Event.preventDefault();
        taskBlock[i + 1].classList.add('visible');
        taskBlock[i].classList.remove('visible');
    })
}

for(let i=0; i < checkBtns.length; i++){
    checkBtns[i].addEventListener('click', function(Event){
        Event.preventDefault();
        let checkAnswer = document.querySelector(`.radio-style${i+1}:checked`);
        if(checkAnswer.value == "true"){
            countAnwers = countAnwers + 1;
            countBtns = countBtns + 1;
            answerChoosing[i].innerHTML = ('Позначте відповіді: вірно <img src="../pictures/check-mark.png" alt="" class="check-mark">') ;
            checkBtns[i].setAttribute("disabled", "disabled");
            checkAnswer.removeAttribute("checked", "checked");
            if(i != x){
                nexttaskBtn[i].classList = "finishtestvis";
            }
            else{
                finishTest.classList = "finishtestvis";
            }
        }
        else{
            countBtns = countBtns + 1;
            answerChoosing[i].innerHTML = ('Позначте відповіді: не вірно <img src="../pictures/close-cross.png" alt="" class="check-mark">') ;
        }
    });
}
for(let i=0; i < comentarBtns.length; i++){
    comentarBtns[i].addEventListener('click', function(Event){
    Event.preventDefault();
    if(comentar[i].className == "comentar"){
        comentarBtns[i].textContent = "Закрити коментар"
        comentar[i].classList.remove('comentar')
        comentar[i].classList.add('comentar1')
        
    }
    else{
        comentarBtns[i].textContent = "Читати коментар"
        comentar[i].classList.remove('comentar1')
        comentar[i].classList.add('comentar')
    }
   
    
    });
}

finishTest.addEventListener('click', function(Event){
    let result = countAnwers / countBtns * 100;
    let resultAnswer = "Погано";
    if(result > 30){ 
        resultAnswer = "Піде"
    }
    if( result > 50){ 
        resultAnswer = "Добре"
    } 
    if(result > 80){ 
        resultAnswer = "Відмінно, красвчик"
    }
    else{
        resultAnswer = "Погано"
    }
    Event.preventDefault();
    taskBlock[6].classList.remove('visible');
    main.innerHTML = (`<div class="results">
    <span class="congrats"> ${resultAnswer}</span>
    <span class="marks">Твій результат ${countAnwers} / ${countBtns} </span>
    <a class="back" href="">Повернутися на сторінку с завданнями</a>
</div>`)
});





























