
/*
TO DO:
- add Winning Screen
- Max Häschen Spiel :D
*/


var numbers = document.getElementsByClassName("number");
var shownNumbers = [];
var numberToCompare = 1;
var userLevel = 1;
var inputLock = true;
var timeout = 1500;
var countdown = document.getElementById("countdown");
var gameOverScreen = document.getElementById("gameOverScreen");
var resetButton = document.getElementById("reset");
const gitter = document.querySelector('#gitter');
const lives = document.querySelector('#lives');
const levels = {
    'current': document.querySelector('#levels .current'),
    'total': document.querySelector('#levels .total')
}
var solvedSound = new Audio("audio/solved_audio.wav");
var lostSound = new Audio("audio/lost_audio.wav");
var gameOverSound = new Audio("audio/gameOver_audio.wav");
var countdownSound = new Audio("audio/countdown_audio.wav");


gitter.addEventListener('click', function (e) {

    if (inputLock) return;

    if (e.target.classList.contains('number')) {
        console.log('btn click', e.target);
        checkRightNumber(e.target);
    }
});

var startButton = document.getElementById('start');
startButton.addEventListener('click',function() {
    startGame();
    startButton.classList.add('hidden');
});  

resetButton.addEventListener('click', function(){
    window.location.reload();
})

function startGame () {

    countdownSound.load();
    countdownSound.play();
    
    //reset values
    numberToCompare = 1;

    gitter.classList.remove('lost');
    gitter.classList.remove('solved');

    const numbers = gitter.querySelectorAll('.number');
    for (const num of numbers) {
        num.remove();
    }

    levels.current.textContent = userLevel;

    countdown.classList.remove('hidden');

    var counter = 3;
    countdown.querySelector('span').innerText = counter;
    var intervalId = setInterval(function(){

        counter--;
        countdown.querySelector('span').innerText = counter;

        if (counter < 1) {
            window.clearInterval(intervalId);
            countdown.classList.add('hidden');
            createGrid((Math.floor(userLevel/3.1)+1)*3);
            
            if (userLevel%3===1){
                timeout = 1500;
            }else{
                timeout = timeout - 500;
            }

            console.log(timeout);
            setTimeout(clearNumbers, timeout);
        }

    },1000);

}

function createGrid (amount) {
    if (!amount) amount = 9;

    const fieldQuantity = createArrayOfNumbers(1, amount);

    for (let i = 0; i < amount; i++) {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.setAttribute('id', 'field'+(i+1));
        btn.classList.add('number');

        const randomIndex = getRandomNumber(0, fieldQuantity.length-1);
        const randomNumber = fieldQuantity[randomIndex];

        btn.textContent = randomNumber;

        fieldQuantity.splice(randomIndex, 1);

        btn.setAttribute('data-number', randomNumber);
        btn.style.opacity = 1;

        li.appendChild(btn);
        gitter.appendChild(li);
    }
}


function checkRightNumber(fieldTarget) {

    const number = fieldTarget.getAttribute('data-number');
    fieldTarget.innerText = number;

    if(number == numberToCompare) {
        fieldTarget.classList.add('solved');
        numberToCompare ++;

    }else{

        fieldTarget.classList.add('lost');

        for(var i=0; i<numbers.length; i++){
            numbers[i].classList.add('lost');
            numbers[i].classList.remove('solved');
        }

        inputLock = true;

        userLevel = (userLevel > 1) ? userLevel-1 :1;

        const remainingLives = lives.querySelectorAll('svg:not(.empty)');

        remainingLives[remainingLives.length-1].classList.add('empty');

        if (remainingLives.length > 1) {
            lostSound.load();
            lostSound.play();
            setTimeout(startGame, 1500);
        }else{
            gameOverSound.load();
            gameOverSound.play();

            gameOverScreen.classList.remove("hidden");
            gitter.classList.add("hidden");
            resetButton.classList.remove("hidden");
        }
    }

    if (numberToCompare === gitter.querySelectorAll('.number').length+1 ) {

        gitter.classList.add('solved');

        inputLock = true;
        solvedSound.load();
        solvedSound.play();
        userLevel += 1;
        setTimeout(startGame, 1500);
    }

    return;
}


function showNumbers(){

    createGrid(4);

};

function clearNumbers(){
    var buttons = gitter.querySelectorAll('.number');

    for(let i = 0; i < buttons.length; i++) { 
        buttons[i].innerText = "?";
    }

    inputLock = false;
};


function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
};

function createArrayOfNumbers(start, end) {
    let myArray = [];

    for(let i = start; i<= end; i++){
        myArray.push(i);
    }

    return myArray;
};