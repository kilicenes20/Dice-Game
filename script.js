const word = ['', 'one', 'two', 'three', 'four', 'five', 'six'];

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const refreshBtn = document.querySelector('.refresh');
const conBtn = document.querySelector('.continue');

const player1 = document.querySelectorAll('.gamer')[0];
const player2 = document.querySelectorAll('.gamer')[1];
const menuPlayer1 = document.querySelectorAll('.player')[0];
const menuPlayer2 = document.querySelectorAll('.player')[1];

const dice1 = document.querySelector('.one-dice');
const dice2 = document.querySelector('.two-dice');

const vol1 = document.querySelector('.open');
const vol2 = document.querySelector('.close');

let score1 = 0;
let score2 = 0;

document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play();
    backgroundMusic.volume = 1;

    vol1.addEventListener('click', function () {
        vol1.classList.add('active');
        vol2.classList.remove('active');
        backgroundMusic.volume = 0;  
    });
    vol2.addEventListener('click', function () {
        vol2.classList.add('active');
        vol1.classList.remove('active');
        backgroundMusic.volume = 1;  
    });
});

function checkWinner() {
    const a = menuPlayer1.value;
    const b = menuPlayer2.value;
    player1.textContent = a;
    player2.textContent = b;

    if (player1Rolled && player2Rolled) {
        if (randomNumber1 > randomNumber2) {
            document.querySelector('h1').innerHTML = `${player1.textContent} Wins!`;
            score1++;
            document.getElementById('score-player1').textContent = score1;
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector('h1').innerHTML = `${player2.textContent} Wins!`;
            score2++;
            document.getElementById('score-player2').textContent = score2;
        } else {
            document.querySelector('h1').innerHTML = 'Draw!';
        }

        player1Rolled = false;
        player2Rolled = false;
        btn1.disabled = false;
        btn2.disabled = false;
    }
}

function resetGame() {
    document.querySelector('h1').innerHTML = 'Shake It';
    dice1.setAttribute('class', 'fa-solid fa-dice-six');
    dice2.setAttribute('class', 'fa-solid fa-dice-six');
    player1Rolled = false;
    player2Rolled = false;
    btn1.disabled = false;
    btn2.disabled = false;
    document.getElementById('score-player1').textContent = 0;
    document.getElementById('score-player2').textContent = 0;
}

setTimeout(function () {
    document.querySelector('.front').style.display = 'none';
    document.querySelector('.menu').style.display = 'block';
}, 7000);

conBtn.addEventListener('click', () => {
    document.querySelector('.dice-container').style.display = 'block';
    document.querySelector('.menu').style.display = 'none';

    const a = menuPlayer1.value;
    const b = menuPlayer2.value;
    player1.textContent = a;
    player2.textContent = b;

    document.getElementById('score-player1').style.display = 'block';
    document.getElementById('score-player2').style.display = 'block';
});

let randomNumber1;
let randomNumber2;
let player1Rolled = false;
let player2Rolled = false;

btn1.addEventListener('click', () => {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage1 = 'fa-solid fa-dice-' + word[randomNumber1];
    dice1.setAttribute('class', randomDiceImage1);
    btn1.disabled = true;
    player1Rolled = true;
    checkWinner();
});

btn2.addEventListener('click', () => {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage2 = 'fa-solid fa-dice-' + word[randomNumber2];
    dice2.setAttribute('class', randomDiceImage2);
    btn2.disabled = true;
    player2Rolled = true;
    checkWinner();
});

refreshBtn.addEventListener('click', () => {
    document.querySelector('.front').style.display = 'none';
    document.querySelector('.dice-container').style.display = 'block';
    resetGame();
});