const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const userScoreDisplay=document.getElementById('user-score')
const computerScoreDisplay=document.getElementById('computer-score')


let userChoice
let computerChoice
let result
let userScore=0
let computerScore=0

const possibleChoices=document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
userChoice=e.target.id
userChoiceDisplay.innerHTML=userChoice
generateComputerChoice()
getResult()
score()
}))


function generateComputerChoice(){
const randomNumber=Math.floor(Math.random()*3)

switch(randomNumber){
    case 1:
        computerChoice='rock'
        break;
    case 2:
        computerChoice='paper'
        break;
    case 3:
        computerChoice='scissors'
        break;
}
computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(userChoice === computerChoice){
        result='It`s a draw!'
    }
    else if(userChoice =='rock' && computerChoice =='paper'){
        result='You loser!'
    }
    else if(userChoice =='rock' && computerChoice =='scissors'){
        result='You winer'
    }

    else if(userChoice =='paper' && computerChoice =='rock'){
        result='You winer!'
    }
    else if(userChoice =='paper' && computerChoice =='scissors'){
        result='You loser!'
    }
    else if(userChoice =='scissors' && computerChoice =='rock'){
        result='You loser!'
    }
    else if(userChoice =='scissors' && computerChoice =='paper'){
        result='You winer!'
    }

    resultDisplay.innerHTML=result
}

function score() {
if(result=='You winer!'){
    userScore++
}
else {
    computerScore++
}
computerScoreDisplay.innerHTML=computerScore
userScoreDisplay.innerHTML=userScore
}