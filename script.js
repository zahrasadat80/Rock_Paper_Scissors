//var take yourSelection with prompt
let gettingPlayerChoice = function(){
    let select = prompt('Rock? Paper? scissors?');
    
    return select;
};

let playerSelection = gettingPlayerChoice();
console.log(playerSelection);
//make variable computerSelection
let computerSelection = '';
//create function called gettingComputerChoice
function gettingComputerChoice (){
    //make var name random number
    //assign var to random number between 0-3
    let randomNumber = Math.floor(Math.random()*3);
    // console.log(randomNumber);
    // if var was 0 return rock
    //if var was 1 return paper
    //if var was 2 return scissors
    switch (randomNumber){
        case 0 :
            computerSelection = 'rock';
            break;
        case 1 :
            computerSelection = 'paper';
            break;
        case 2 :
            computerSelection = 'scissors';       
    }
    return computerSelection;
}
computerSelection = gettingComputerChoice();
console.log(computerSelection);



//create function that take 2 argument computerSelection and yourSelection
//if rock vs paper => paper wins
//if rock vs scissors => rock wins
//if paper vs scissors => scissors wins

let message = '';

let scorePlayer = 0;

let scoreComputer = 0;

function playRound(playerSelection,computerSelection) {

    let playerSelectionCaseInsensitive = playerSelection.toLowerCase();
    // console.log(playerSelectionCaseInsensitive);
    

    if (playerSelectionCaseInsensitive==='rock' && computerSelection==='paper'){
        message = 'you lose! , paper beats rock';
        scoreComputer++;
    }
    else if (playerSelectionCaseInsensitive==='paper' && computerSelection === 'rock'){
        message = 'you win! , paper beats rock';
        scorePlayer++;
    }
    else if (playerSelectionCaseInsensitive ==='paper'&& computerSelection === 'scissors'){
        message = 'you lose! , scissors beats paper';
        scoreComputer++;
    }
    else if (playerSelectionCaseInsensitive === 'scissors' && computerSelection === 'paper'){
        message = ' you win! scissors beats paper';
        scorePlayer++;
    }
    else if (playerSelectionCaseInsensitive ==='scissors' && computerSelection === 'rock'){
        message = 'you lose! rock beats scissors';
        scoreComputer++;
    }
    else if (playerSelectionCaseInsensitive ==='rock' && computerSelection === 'scissors'){
        message = 'you win! rock beats scissors';
        scorePlayer++;
    }
    else{
        message = '';
    }
    
    return message;
    
 }

 console.log(playRound(playerSelection,computerSelection));
 console.log(`your score is ${scorePlayer} and Bot score is ${scoreComputer}`);

 playerSelection = gettingPlayerChoice();
 console.log(playerSelection);
 gettingComputerChoice();
 console.log(computerSelection);
 console.log(playRound(playerSelection,computerSelection));
 console.log(`your score is ${scorePlayer} and Bot score is ${scoreComputer}`);

 playerSelection = gettingPlayerChoice();
 console.log(playerSelection);
 gettingComputerChoice();
 console.log(computerSelection);
 console.log(playRound(playerSelection,computerSelection));
 console.log(`your score is ${scorePlayer} and Bot score is ${scoreComputer}`);

 playerSelection = gettingPlayerChoice();
 console.log(playerSelection);
 gettingComputerChoice();
 console.log(computerSelection);
 console.log(playRound(playerSelection,computerSelection));
 console.log(`your score is ${scorePlayer} and Bot score is ${scoreComputer}`);

 playerSelection = gettingPlayerChoice();
 console.log(playerSelection);
 gettingComputerChoice();
 console.log(computerSelection);
 console.log(playRound(playerSelection,computerSelection));
 console.log(`your score is ${scorePlayer} and Bot score is ${scoreComputer}`);

 if (scorePlayer>scoreComputer){
    console.log('congratulation , you win')
 }
 else if (scoreComputer === scorePlayer){
    console.log('you are equal')
 }
 else{
    console.log('you lose!');
 }