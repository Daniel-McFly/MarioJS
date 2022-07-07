const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const cloud3 = document.querySelector('.cloud3');

const jump = () => {
    mario.classList.add('jump');
    mario.src = "./images/jump.png";
    mario.style.height = "130px";
    mario.style.width = "70px";
    mario.style.marginLeft = "50px";
    
    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = "./images/mario.gif";
        mario.style.width = "150px";
        mario.style.height = "auto";
        mario.style.marginLeft = "0";
    }, 590);
}

const mudanca = 10;
const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const cloud1Position = cloud1.offsetLeft;
    const cloud2Position = cloud2.offsetLeft;
    const cloud3Position = cloud3.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px', "");

    

    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        
        cloud1.style.animation = "none";
        cloud1.style.left = `${cloud1Position}px`;
        cloud2.style.animation = "none";
        cloud2.style.left = `${cloud2Position}px`;
        cloud3.style.animation = "none";
        cloud3.style.left = `${cloud3Position}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = "50px"
    }
}, 10)

document.addEventListener('keydown', jump);