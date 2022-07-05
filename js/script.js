
const mario = document.querySelector('.mario');

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

document.addEventListener('keydown', jump);