function game() {
  for (i = 0; i < 3; i++) {
    setTimeout(function () {
      var winner = false;
      if (winner == false) {
        selection = prompt("Please enter Rock, Paper, or Scissors:");
        document.getElementById("test").innerHTML +=
          "<br /> You picked: " + selection;
        computer = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        if (computer == 1) {
          computerGuess = "Rock";
        } else if (computer == 2) {
          computerGuess = "Scissors";
        } else if (computer == 3) {
          computerGuess = "Paper";
        }
        document.getElementById("test").innerHTML +=
          "<br /> Computer picked: " + computerGuess;
        if (selection == "Rock") {
          if (computerGuess == "Rock") {
            document.getElementById("outcome").innerHTML += "Draw!";
          } else if (computerGuess == "Scissors") {
            document.getElementById("outcome").innerHTML += "You won!";
            winner = true;
            return winner;
          } else if (computerGuess == "Paper") {
            document.getElementById("outcome").innerHTML += "You lost!";
          }
        } else if (selection == "Scissors") {
          if (computerGuess == "Rock") {
            document.getElementById("outcome").innerHTML += "You lost!";
          } else if (computerGuess == "Scissors") {
            document.getElementById("outcome").innerHTML += "Draw!";
          } else if (computerGuess == "Paper") {
            document.getElementById("outcome").innerHTML += "You won!";
            winner = true;
            return winner;
          }
        } else if (selection == "Paper") {
          if (computerGuess == "Rock") {
            document.getElementById("outcome").innerHTML += "You won!";
            winner = true;
            return winner;
          } else if (computerGuess == "Scissors") {
            document.getElementById("outcome").innerHTML += "You lost!";
          } else if (computerGuess == "Paper") {
            document.getElementById("outcome").innerHTML += "Draw!";
          }
        }
      }
    }, 0);
  }
}
