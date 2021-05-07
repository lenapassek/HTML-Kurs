var wordsArray1 = ['Hola', 'nombre', 'espanol'];
//var wordsArray2 = ['Max', 'Lena', 'Louis'];

let getRandomWord = function (Words){
    const randomWord = Words[Math.round(Math.random() * (Words.length - 1))];
    return randomWord;
}

let word = getRandomWord(wordsArray1);

let showWord = function(word){
    var newD = document.createElement("Div");
    newD.id='div';
    document.body.appendChild(newD);

    for ( let i = 0; i < word.length; i++){
        console.log(word[i]);
        var newP = document.createElement("p");
        newP.innerHTML = word[i];
        newD.appendChild(newP);   
    }
}

showWord(word);

let elemente = document.querySelectorAll('p');
const area = [40, 40];
offset = 20;
const reArrange = function () {
    for (let i = 0; i < elemente.length; i++) {
        const newTop = Math.floor(Math.random() * area[1]) + offset;
        const newLeft = Math.floor(Math.random() * area[0]) + offset;
        elemente[i].style.top = newTop + 'vh';
        elemente[i].style.left = newLeft + 'vw';
    }
}

setTimeout(reArrange, 500);
setInterval(reArrange, 7000);

let button = document.querySelector("#button");
button.addEventListener("click", function(event) {
    let x = document.getElementById('input').value;
    console.log(x)
    if (x === word) {
        console.log('Gewonnen!');
        document.querySelector('#result').innerHTML="Gewonnen!";
        word = getRandomWord(wordsArray1);
        var deleteDiv = document.getElementById("div");
        deleteDiv.remove();  
        showWord(word); 
        elemente = document.querySelectorAll('p');
        setTimeout(reArrange, 500);
        setInterval(reArrange, 7000);
    } else {
        console.log('falsches Wort');
        document.querySelector('#result').innerHTML="falsches Wort!";  
    }
});