let hideBtn = document.querySelectorAll("button");
let testItems = document.querySelectorAll(".test-items");

for(let i=0; i < hideBtn.length; i++){
    hideBtn[i].addEventListener('click', function(eval){
        eval.preventDefault();
        let visCon = document.querySelectorAll(`.visible${i + 1}`) 
        let invisCon = document.querySelectorAll(`.invisible${i + 1}`)
        visCon.forEach(function(element){
            element.classList = `invisible${i + 1}`
        });
        eval.preventDefault();
        invisCon.forEach(function(element){
            element.classList = `visible${i + 1}`
        });
    })
}


