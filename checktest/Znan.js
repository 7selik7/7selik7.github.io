let taskBlock = document.querySelectorAll(".tasks");
let chooseBtns = document.querySelectorAll(".choose-items");
let countAnwers = 0;
let countBtns = 0;
let results = document.querySelector(".none");
let comentar = document.querySelectorAll(".comentar");
let comentarBtns = document.querySelectorAll("#readComentar");
let checkBtns = document.querySelectorAll("#checkbtn");
let answer-choosing = document.querySelectorAll("#answer-choosing");
let finishTest = document.querySelector('.finishtest');
let main = document.querySelector('.containertop');
let nexttaskBtn = document.querySelectorAll('.nexttask');
let taskNum = document.querySelector('.task-list');
let marks = document.querySelector('.marks');
let congrats = document.querySelector('.congrats');
let x = taskBlock.length - 1;
let array = [];


let finTab = document.querySelectorAll(".finish-items");

console.log(x);
console.log(answer-choosing);
console.log(checkBtns);
function isEquals(index){
    return;
}
let currentTaskIndex = 0;
for (let i=0; i < finTab.length; i++) {
    finTab[i].addEventListener('click', function(Event){
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

for(let i=0; i < nexttaskBtn.length - 1; i++){
    nexttaskBtn[i].addEventListener('click', function(Event){
        Event.preventDefault();
        taskBlock[i + 1].classList.add('visible');
        taskBlock[i].classList.remove('visible');
    })
}

for(let i=0; i < checkBtns.length - 1; i++){
    checkBtns[i].addEventListener('click', function(Event){
        Event.preventDefault();
        let checkAnswer = document.querySelector(`.radio-style${i+1}:checked`);
        if(checkAnswer === null){
            answer-choosing[i].textContent = "ПОЗНАЧТЕ ВІДПОВІДІ!!!";
        }
        else{
        array.push(checkAnswer)
        checkBtns[i].setAttribute("disabled", "disabled");
        taskBlock[i + 1].classList.add('visible');
        taskBlock[i].classList.remove('visible');
        console.log(array[i].value);
        console.log(i);
        }}
)};
checkBtns[19].addEventListener('click', function(Event){
    Event.preventDefault();
    let checkAnswer = document.querySelector(`.radio-style${20}:checked`);
    if(checkAnswer === null){
        answer-choosing[19].textContent = "ПОЗНАЧТЕ ВІДПОВІДІ!!!";
    }
    else{
    array.push(checkAnswer)
    checkBtns[19].setAttribute("disabled", "disabled");
    taskBlock[19].classList.remove('visible');
    for(let i=0; i < array.length; i++){
        if(array[i].value == "true"){
            finTab[i].classList = "finish-items-green"  
        }
        else{
            finTab[i].classList = "finish-items-red" 
        }
    }
    let green = document.querySelectorAll(".finish-items-green");
    taskBlock[19].classList.remove('visible');
    taskBlock[0].classList.add('visible');
    results.classList = "results";
    taskNum.classList = "none"
    if(green.length <= 5){
        congrats.textContent = "В армию!!!"
    }
    if(5 < green.length  && green.length <= 10){
        congrats.textContent = "ПТУ тебе чекає!"
    }
    if(10 < green.length && green.length <= 17){
        congrats.textContent = "180 балів забезпечено!"
    }
    if(17 < green.length && green.length <= 20){
        congrats.textContent = "США тебе чекає!"
    }
    marks.textContent = `Твій результат ${green.length} / 20 `;
    }
});






























