/*
Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/


const getUserChoice = userInput =>  { // function to read a userInput and determine whether it's valid
  userInput = userInput.toLowerCase();
  
  if(userInput === 'rock' || userInput === 'paper' || userInput === "scissors" || userInput === 'bomb')  {
    return userInput;
  } else  {
    console.log('You need to input a valid argument - rock/paper/scissors!');
  }
}


const getComputerChoice = () => { // function to randomly assign a computerChoice.
  computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice)  {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Something went wrong');
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === 'bomb') {
    return 'User. He has placed a secret weapon - bomb, that always wins.'; // secret weapon introduced that wins every fight
  }
  if(userChoice === computerChoice) {
    return 'No one. The game is tied.';
  } 

  if(userChoice === 'rock') { // rock
    if(computerChoice === 'paper')  {
      return 'Computer.';
    } else  {
      return 'User.';
    }
  }

  if(userChoice === 'paper')  { // paper
    if(computerChoice === 'scissors')  {
      return 'Computer.';
    } else  {
      return 'User.';
    }
  }

  if(userChoice === 'scissors')  { // scissors
    if(computerChoice === 'rock')  {
      return 'Computer.';
    } else  {
      return 'User.';
    }
  }
}

const playGame = () =>  { // joining all functions into one final - playGame.
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice('rock');
  console.log('User\'s choice = ' + userChoice + '; Computer\'s choice = ' + computerChoice + '. The game begins.');

  console.log('And the winner is ... ' + determineWinner(userChoice, computerChoice));
}

playGame();
