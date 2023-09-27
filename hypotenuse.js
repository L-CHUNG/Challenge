document.getElementById("drop3").addEventListener("mouseover", function() {
    const inputTypes = ["text", "password", "submit", "reset", "radio", "checkbox", "button", "file", "hidden", "image", "range", "color", "date", "datetime-local", "email", "month", "number", "search", "tel", "time", "url", "week"];
    const dropdownContent = document.querySelector(".dropdown-content2");

    // Clear dropdown content
    dropdownContent.innerHTML = "";

    inputTypes.forEach(type => {
        const inputElement = document.createElement("input");
        inputElement.type = type;
        
        // Add a label or a line break to make it clear
        const labelElement = document.createElement("label");
        labelElement.textContent = `Input type: ${type}`;
        dropdownContent.appendChild(labelElement);

        dropdownContent.appendChild(inputElement);
        
        const breakElement = document.createElement("br");
        dropdownContent.appendChild(breakElement);
    });
});


document.getElementById('drop3').addEventListener('mouseover', function() {
  document.querySelector('.dropdown-content2').style.display = 'block';
});

document.getElementById('drop3').addEventListener('mouseout', function() {
  document.querySelector('.dropdown-content2').style.display = 'none';
});

const drop3 = document.getElementById('drop3');
const dropdownContent2 = document.querySelector('.dropdown-content2');

// Show the dropdown when you hover over #drop3
drop3.addEventListener('mouseover', function() {
  dropdownContent2.style.display = 'block';
});

// Hide the dropdown when you move out of #drop3 or .dropdown-content2
document.addEventListener('mouseover', function(event) {
  if (!drop3.contains(event.target) && !dropdownContent2.contains(event.target)) {
    dropdownContent2.style.display = 'none';
  }
});

// Function to update the output below the input
function updateOutput(inputElement) {
  const outputElement = inputElement.nextElementSibling; // Assuming each input has a <p> right after it for output
  if (inputElement.type === 'checkbox' || inputElement.type === 'radio') {
    outputElement.textContent = inputElement.checked ? 'Checked' : 'Not Checked';
  } else {
    outputElement.textContent = `Value: ${inputElement.value}`;
  }
}

// Add event listeners to all inputs in dropdownContent2
dropdownContent2.addEventListener('input', function(event) {
  if (event.target.tagName === 'INPUT') {
    updateOutput(event.target);
  }
});



document.getElementById("drop3").addEventListener("mouseover", function() {
  const inputTypes = ["text", "password", "submit", "reset", "radio", "checkbox", "button", "file", "hidden", "image", "range", "color", "date", "datetime-local", "email", "month", "number", "search", "tel", "time", "url", "week"];

  // Clear dropdown content
  dropdownContent2.innerHTML = "";

  inputTypes.forEach(type => {
    const inputElement = document.createElement("input");
    inputElement.type = type;
    
    const labelElement = document.createElement("label");
    labelElement.textContent = `Input type: ${type}`;
    dropdownContent2.appendChild(labelElement);
    dropdownContent2.appendChild(inputElement);
    
    const outputElement = document.createElement("p");
    dropdownContent2.appendChild(outputElement);
    
    const breakElement = document.createElement("br");
    dropdownContent2.appendChild(breakElement);
  });
});

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                // Function to check who wins
                winner(this.innerText,computerChoice)
                  
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
  
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
       
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
  
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
  
  
    // Calling playGame function inside game
    playGame();
      
}
  
// Calling the game function
game();