const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");


let prevX = 0;
let prevY = 0;

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;

    
    let randomX, randomY;
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (randomX === prevX && randomY === prevY);

    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    
    prevX = randomX;
    prevY = randomY;
});

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay TYSM !! Mwh ";
    gif.src = "https://media.giphy.com/media/LML0GMM5mq9H9aoehn/giphy.gif";
    
});

