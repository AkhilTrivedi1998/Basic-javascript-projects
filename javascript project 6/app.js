let choice = ['rock', 'paper', 'scissor'];
computerChoice = document.getElementById('computer-choice');
playerChoice = document.getElementById('player-choice');
result = document.getElementById('result');
btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        let compChoice = choice[getRandom()];
        let playChoice = e.target.id;
        computerChoice.innerText = compChoice;
        playerChoice.innerText = playChoice;
        result.innerText = getResult();
    });
});

function getRandom(){
    return Math.floor(Math.random()*3);
}

function getResult(){
    let compChoice = computerChoice.innerText;
    let playChoice = playerChoice.innerText;
    if(compChoice == playChoice){
        return 'Draw';
    }
    else if(compChoice == 'rock' && playChoice == 'scissor'){
        return 'You Lose';
    }
    else if(compChoice == 'rock' && playChoice == 'paper'){
        return 'You Win';
    }
    else if(compChoice == 'paper' && playChoice == 'rock'){
        return 'You Lose';
    }
    else if(compChoice == 'paper' && playChoice == 'scissor'){
        return 'You Win';
    }
    else if(compChoice == 'scissor' && playChoice == 'rock'){
        return 'You Win';
    }
    else if(compChoice == 'scissor' && playChoice == 'paper'){
        return 'You Lose';
    }
}