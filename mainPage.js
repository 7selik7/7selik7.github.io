let subBtn = document.querySelector("#troyan-btn");
let body = document.querySelector("#body");
let messageInfo = document.querySelector("#message-info");
let popUp = document.querySelector("#pop-up");
let clsBtnWin = document.querySelector("#window-close");
let clsBtnPop = document.querySelector("#pop-up-close");
let video = document.querySelector("video");
setTimeout(liza,7000);
function liza() {
    popUp.classList = ("pop-up");
    body.classList = ("opacity");  
}

subBtn.addEventListener('click', function(){
    messageInfo.classList = ("message-info");
    body.classList = ("opacity");   
});
clsBtnWin.addEventListener('click', function(){
    messageInfo.classList = ("none");
    body.classList.remove("opacity"); 
});
clsBtnPop.addEventListener('click', function(){
    popUp.classList = ("none");
    body.classList.remove("opacity");
    video.pause();
});
