//variables
let scores = [0,0];

let message = document.querySelector('#message');
let playerChoice = '';
let botChoice = '';
// let botScore=0;
// let playerScore=0;

//query selectors
let buttons = document.querySelectorAll('.btn');
let playerChoiceText = document.querySelector('#your-selection');
let botChoiceText = document.querySelector('#bot-selection');
let scoresText = document.querySelector('#scores');
let container = document.querySelector('.container');
let botScore = document.querySelector('#bot-scores');
let playerScore = document.querySelector('#player-scores')


//add event listener

buttons.forEach(function(btn){
    btn.addEventListener('click', function(){ 
        playerChoice = btn.value;
        console.log(`player:${playerChoice}`); // test of player choice
        playerChoiceText.innerText=playerChoice;
        countPoints();
        determineWinner();
        
     } )  
})
//its ok



//functions
function gettingBotChoice(){
    let randomNumber = Math.floor(Math.random()*3); 
    switch (randomNumber){
        case 0 :
            botChoice = 'rock';
            break;
        case 1 :
            botChoice = 'paper';
            break;
        case 2 :
            botChoice = 'scissors';       
    }
    return botChoice;
}
//test bot choice
// console.log(gettingBotChoice()); // its OK


function compareChoices(getBotChoice,PlayerChoice){
    //logic for who wins in each round
    botChoice = getBotChoice();
    console.log(`bot:${botChoice}`);
    botChoiceText.innerText= botChoice;
    if (playerChoice==='rock' && botChoice==='paper'){
        return 0;
    }
    else if (playerChoice==='paper' && botChoice === 'rock'){
        return 1;
    }
    else if (playerChoice ==='paper'&& botChoice === 'scissors'){
        return 0;
    }
    else if (playerChoice === 'scissors' && botChoice === 'paper'){
        return 1;
    }
    else if (playerChoice ==='scissors' && botChoice === 'rock'){
         return 0;
    }
    else if (playerChoice ==='rock' && botChoice === 'scissors'){
        return 1;
    }
    return -1;
    //return 0 for bot point return 1 for player point 
}
function countPoints(){
    //if compare choice is 0 => add to point of bot 
    let result = compareChoices(gettingBotChoice,playerChoice);
    if (result===0){
        scores[0]++;
    }
    else if(result===1){
        scores[1]++;
    }
    return scores;
    //if compare choice is 1 => add to points of player
    //return an array from points [bot,player]
}
function determineWinner(){
    //if array[0] and array[1] was lower than 5 console => bot = array[0] , player = array[1]  ;
    if (scores[0]<5 && scores[1]<5){
        console.log (`your scores = ${scores[1]} and bot scores = ${scores[0]}`);
        botScore.innerText = scores[0];
        playerScore.innerText=scores[1];
    }
    //if array[0] >= 5 console => bot = array[0] , player = array[1] and message = 'you lose , try one more time
    else if (scores[0]>=5){
        botScore.innerText = scores[0];
        playerScore.innerText=scores[1];
        console.log('you lose, Try again');
        message.innerText='you lose, Try again';
        restartGame();
    }
    //if array[1] >= 5 consol =>  bot = array[0] , player = array[1] and message = you win , congratulation
    else if (scores[1]>=5){
        botScore.innerText = scores[0];
        playerScore.innerText=scores[1];
        console.log(`you win , congratulation`);
        message.innerText=`you win , congratulation`;
        restartGame();
        
    }
}

function restartGame (){
    let restartBtn = document.createElement('button');
    restartBtn.innerText = 'restart';
    restartBtn.classList.add('restartBtn');
    //append it to message
    container.appendChild(restartBtn);
    restartBtn.addEventListener('click',function(){
        scores[0]=0;
        scores[1]=0;
        botScore.innerText = scores[0];
        playerScore.innerText=scores[1];
        message.innerText='';
        restartBtn.remove();
    })
    

}





