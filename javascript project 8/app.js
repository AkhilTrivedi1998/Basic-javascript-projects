let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameoverAudio = new Audio('gameover.mp3');
let turn = 'X';
let gameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    });
}

// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && gameover === false){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    });
});

// Add onclick listener to reset button
let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    if(gameover){
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
        gameover = false;
    }
    turn = 'X';
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
});