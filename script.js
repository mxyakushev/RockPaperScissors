const restartButton = document.querySelector('#restartButton')
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const playerImage = document.querySelector('.player-image');
const computerImage = document.querySelector('.computer-image');
const res = document.querySelector('#res');

let player;
let computer;
let playerWins = 0;
let computerWins = 0;
let itemArr = [];

const button = document.querySelectorAll('.button');

button.forEach((btn) => btn.addEventListener('click', ()=>{
    switch(btn.textContent){
        case 'КАМЕНЬ':{
            player = `<img src="./img/rock1.png">`
            break;
        }
        case 'БУМАГА':{
            player = `<img src="./img/paper1.png">`
            break;
        }
        case 'НОЖНИЦЫ':{
            player = `<img src="./img/scissors1.png">`
            break;
        }
        default:{
            playerWins = 0;
            computerWins = 0;
            playerImage.innerHTML = '';
            computerImage.innerHTML = '';
            res.innerHTML = '';
            return;
        }
    }
    playerImage.innerHTML = player;
    computerImage.innerHTML =  computerTurn();
    res.innerHTML = whoWinner();
}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:{
            computer = `<img src="./img/rock1.png">`
            break;
        }
        case 2:{
            computer = `<img src="./img/paper1.png">`
            break;
        }
        case 3:{
            computer =  `<img src="./img/scissors1.png">`
            break;
        }
    }
    return computer;
}

function whoWinner(){
    if(player == computer){
        return `НИЧЬЯ<br>${++playerWins} : ${++computerWins}`;
    }
    else if(player == `<img src="./img/rock1.png">`){
        return (computer == `<img src="./img/paper1.png">`) ? `КОМПЬЮТЕР ПОБЕДИЛ<br>${playerWins} : ${++computerWins}`: `ТЫ ПОБЕДИЛ<br>${++playerWins} : ${computerWins}`;
    }
    else if(player == `<img src="./img/scissors1.png">`){
        return (computer == `<img src="./img/rock1.png">`) ? `КОМПЬЮТЕР ПОБЕДИЛ<br>${playerWins} : ${++computerWins}`: `ТЫ ПОБЕДИЛ<br>${++playerWins} : ${computerWins}`;
    }
    else if(player == `<img src="./img/paper1.png">`){
        return (computer == `<img src="./img/scissors1.png">`) ? `КОМПЬЮТЕР ПОБЕДИЛ<br>${playerWins} : ${++computerWins}`: `ТЫ ПОБЕДИЛ<br>${++playerWins} : ${computerWins}`;
}
}