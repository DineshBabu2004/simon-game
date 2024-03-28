let gameSeq =[];
let userSeq = [];
let start = false;
let level = 0;
let h4 = document.querySelector("h4");
let randBtn =["yellow","red","purple","red"];
let highScore = 0;


//game starts

document.addEventListener("click",function() {
    if(start==false){
        console.log("game is started");
        start=true;
        levelUp();
    }
   
});

function btnFlash(blinkBtn) {
    
    blinkBtn.classList.add("btn-flash");

    setTimeout(() => {
        blinkBtn.classList.remove("btn-flash");
    },250);
}
function indvidualBtnFlash(blinkBtn) {
    
    blinkBtn.classList.add("indBtn");

    setTimeout(() => {
        blinkBtn.classList.remove("indBtn");
    },250);
}

function check(idx) {
    if (userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length){
            setTimeout(() => {
                levelUp();
                highScore++;
            }, 750);
        
        
        }
    } else {
        h4.innerHTML=`Game is over!,Your Score is ${level-1}  pl enter any key to restart  . <br> High score is ${highScore}`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";

            restart();
        }, 200); 
    }
}

function btnPress(){
    let btnFind=this;
    indvidualBtnFlash(btnFind);
    let color = btnFind.getAttribute("id");
    userSeq.push(color);
    let idx = userSeq.length-1;
    check(idx);
}


function levelUp(){
    userSeq=[];
    level++;
    h4.innerText=`level ${level}`;
    let idx = Math.floor(Math.random()*3);
    let btnIdx = randBtn[idx];
    gameSeq.push(btnIdx);
    let blinkBtn = document.querySelector(`.${btnIdx}`);
    console.log(gameSeq);
    btnFlash(blinkBtn);
}


let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click",btnPress)
}


//reset
function restart() {
 gameSeq =[];
 userSeq = [];
 level = 0;
 start = false;
}