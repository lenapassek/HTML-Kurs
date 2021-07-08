
var numbers = document.getElementsByClassName("number");
var shownNumbers = [];
var numberToCompare = 1;



var startButton = document.getElementById('start');
startButton.addEventListener('click',function() {
    showNumbers();

    setTimeout(clearNumbers,1500);

    setTimeout(createEventListener, 1500);
});

function checkRightNumber(fieldName) {
    var fieldNumber = fieldName.slice(5,6);
    var indexNumber = shownNumbers.indexOf(numberToCompare);
    let fieldButton = document.getElementById(fieldName);

    if(indexNumber == fieldNumber - 1) {
        fieldButton.innerText = "Yes";
        console.log('YES');
        numberToCompare ++;

    }else{
        fieldButton.innerText = "No";
    }
}


function showNumbers(){

    var buttonsCount = numbers.length;

    let numbersArray = createArrayOfNumbers(1, buttonsCount);

    for(let i = 1; i <= buttonsCount; i++){
        var fieldName = 'field' + i;
    
        let fieldNumber = document.getElementById(fieldName);
        fieldNumber.style.opacity = 1;
    
        let randomIndex = getRandomNumber(0, numbersArray.length-1);
    
        let randomNumber = numbersArray[randomIndex];
    
        numbersArray.splice(randomIndex, 1);
    
        fieldNumber.innerText = randomNumber;

        shownNumbers.push(randomNumber);

        console.log(shownNumbers);
    
    }
};

function createEventListener(){
    var buttonsCount = numbers.length;

    for(let i = 1; i <= buttonsCount; i++){
        var fieldName = 'field' + i;
    
        let fieldNumber = document.getElementById(fieldName);
    
        fieldNumber.addEventListener('click', function(fieldName) {
            checkRightNumber(fieldName.target.id);
        });
    }
};

function clearNumbers(){
    var buttonsCount = numbers.length;

    for(let i = 1; i <= buttonsCount; i++){
        var fieldName = 'field' + i;
    
        let fieldNumber = document.getElementById(fieldName);
    
        fieldNumber.innerText = "?";
    }
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