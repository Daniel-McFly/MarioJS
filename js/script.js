const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

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
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "");

    

    if(pipePosition <= 90 && marioPosition < 50){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = "50px"
    }
}, 10)

document.addEventListener('keydown', jump);