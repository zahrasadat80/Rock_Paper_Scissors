//variables
let botScores = 0;
let playerScores = 0;
let message;

//query selectors
let buttons = document.querySelectorAll('.btn');
let playerChoice = document.querySelector('#your-selection');
let botChoice = document.querySelector('#bot-selection');
let scores = document.querySelector('#scores');

//functions
function gettingBotChoice(){

}
function compareChoices(){
    //logic for who wins in each round
    //return 0 for bot point return 1 for player point 
}
function countPoints(compareChoices){
    //if compare choice is 0 => add to point of bot 
    //if compare choice is 1 => add to points of player
    //return an array from points [bot,player]
}
function determineWinner(countPoints){
    //if array[0] and array[1] was lower than 5 console => bot = array[0] , player = array[1]  ;
    //if array[0] >= 5 console => bot = array[0] , player = array[1] and message = 'you lose , try one more time
    //if array[1] >= 5 consol =>  bot = array[0] , player = array[1] and message = you win , congratulation
}

function restartGame (){
    let restartBtn = document.createElement('button');
    restartBtn.innerText = 'restart';
    //append it to message
}
//add event listener




