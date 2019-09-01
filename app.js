const main =()=>{
    // UI variables
const rock= document.getElementById('Rock');
const paper= document.getElementById('Paper');
const scissors= document.getElementById('Scissors');
let button= document.querySelector('.btn');
let userChoices= new Array();
userChoices.push(rock, paper,scissors);

// generate a random choice for the computer
const computerChoice =()=>{
    let theComputerChoice;
    console.log(theComputerChoice);
    let x = Math.floor(Math.random()*3) + 1;
    console.log(x);
    switch(x){
        case 1 :
        console.log(`The computer Has choosen rock`);
           return theComputerChoice = 'rock';
           case 2 :
           console.log(`The computer Has choosen paper`);
           return theComputerChoice = 'paper';
           case 3:
           console.log(`The computer Has choosen scissors`);
           return theComputerChoice = 'scissors';
    }
    
}
let computer= computerChoice();

const displayResult =(message)=>{
    const displayCard= document.querySelector('.display-card');
    displayCard.innerHTML= message;
}

const playGame =(computer,user)=>{
   user.forEach(choice =>{
       choice.addEventListener('click', function(){
           let TheUserChoice= choice.innerText.toLowerCase();
           switch(TheUserChoice){
            //    User chooses Rock
               case 'rock':
               if(computer==='rock'){
                
                displayResult(" Both You and the computer chosed Rock, It's a tied Game")
               }
               else if(computer === 'paper'){
                displayResult('You chosed Rock and The computer chosed Paper, You Lose!')

               }
               else{
                displayResult("You chosed Rock and The computer chosed Scissors,You Win!");

               }
               break;

               //    User chooses Paper
               case 'paper':
            if(computer==='paper'){
                displayResult(" Both You and the computer chosed Paper, It's a tied Game")
            }
            else if(computer === 'scissors'){
                displayResult('You chosed Paper and The computer chosed Scissors, You Lose!')

            }
            else{
                displayResult("You chosed Paper and The computer chosed Rock,You Win!");

            }
            break;

            //    User chooses Scissors
            case 'scissors':
            if(computer==='scissors'){
                displayResult(" Both You and the computer chosed Scissors, It's a tied Game")
            }
            else if(computer === 'rock'){
                displayResult('You chosed Scissors and The computer chosed Rock, You Lose!')

            }
            else{
                displayResult('You chosed Scissors and The computer chosed Paper, You Win!')

            }
           }

       })
   })

}
playGame(computer, userChoices);

button.addEventListener('click', function(){
    window.location.reload();
});


}
main();
