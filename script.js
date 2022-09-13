/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// Global Access to the Required DIV'S
let playerScore = document.getElementById('player-score')
let hands = document.getElementById('hands')
let result = document.getElementById('result')

// Create a OBJECT to TRACK the TOTALSCORE i.e GLOBAL VARIABLE
const totalScore = {
    computerScore: 0,
    playerScore: 0
}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
    // Put the Array Inside the function so it's not accessible outside of function 
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];  
  const randomSelection = 
  Math.floor(Math.random() * rpsChoice.length)
//   return rps choice and Pass randomSelection
  return rpsChoice[randomSelection]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = []
  
  // All situations where human draws, set `score` to 0
  if(playerChoice == computerChoice) {
    score = 0
  }
  // All situations where human wins, set `score` to 1 
  else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }
  else if(playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
  else if(playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1
  }
  // return 
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
//   grab the div with the 'result' id!

// Use SWITCH Here, Not LOOP... on a score of -1 do result.innerText = 'You Lose!'
switch (score) {
    case -1:
        result.innerText = `You Lose!`
        break;
    case 0:
        result.innerText = `It's a tie!`
        break;
    case 1:
        result.innerText = `Hey..You Win!!`
        break;    
}
// Grab the player-score and hands ID's
playerScore.innerText = `Your Score: ${totalScore['playerScore']}`
 hands.innerText = `👱${playerChoice} vs 🤖${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    // console.log({playerChoice}) //Call it as an Object
    const computerChoice = getComputerChoice()
    // console.log({computerChoice})

    // call the getResult
    const score = getResult(playerChoice, computerChoice)
    // Update the totalScore After getting the Results
    totalScore['playerScore'] += score
    showResult(score, playerChoice, computerChoice)
    // console.log({score})
    // console.log({totalScore})
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  rpsButtons.forEach( (rpsButton) => {
    rpsButton.onclick = () => {
        onClickRPS(rpsButton.value)
    }
  })
  // Add a click listener to the end game button that runs the endGame() function on click
  const clearGameBtn = document.getElementById('clearGameBtn')
  clearGameBtn.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
    // set Scores to Zero so New Game Starts FRESH
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
//   set all DOM DIV's to empty string
 result.innerText = ''
 playerScore.innerText = ''
 hands.innerText = ''
}

playGame()