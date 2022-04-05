function game() {
  selection = prompt("Please enter Rock, Paper, or Scissors:");
  if (selection == "Rock" || selection == "Paper" || selection == "Scissors") {
    document.getElementById("test").innerHTML = "You picked: " + selection;
    computer = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (computer == 1) {
      computerGuess = "Rock";
    } else if (computer == 2) {
      computerGuess = "Scissors";
    } else if (computer == 3) {
      computerGuess = "Paper";
    }
    document.getElementById("computerGuess").innerHTML =
      "Computer picked: " + computerGuess;
    console.log("Computer made a guess");
    if (selection == "Rock") {
      if (computerGuess == "Rock") {
        document.getElementById("outcome").innerHTML = "You won!";
      } else if (computerGuess == "Scissors") {
        document.getElementById("outcome").innerHTML = "You lost!";
      } else if (computerGuess == "Paper") {
        document.getElementById("outcome").innerHTML = "Draw!";
      }
    } else if (selection == "Scissors") {
      if (computerGuess == "Rock") {
        document.getElementById("outcome").innerHTML = "You lost!";
      } else if (computerGuess == "Scissors") {
        document.getElementById("outcome").innerHTML = "Draw!";
      } else if (computerGuess == "Paper") {
        document.getElementById("outcome").innerHTML = "You won!";
      }
    } else if (selection == "Paper") {
      if (computerGuess == "Rock") {
        document.getElementById("outcome").innerHTML = "You won!";
      } else if (computerGuess == "Scissors") {
        document.getElementById("outcome").innerHTML = "You lost!";
      } else if (computerGuess == "Paper") {
        document.getElementById("outcome").innerHTML = "Draw!";
      }
    }
  } else {
    document.getElementById("outcome").innerHTML =
      "You didn't enter a correct value!";
  }
  hide();
}

function hide() {
  document.getElementById("button").style.visibility = "hidden";
  document.getElementById("question").style.visibility = "hidden";
}
