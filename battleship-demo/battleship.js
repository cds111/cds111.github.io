var location1 = 0;
var location2 = 0;
var location3 = 0;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

location2 = getRndInteger(1, 5);
location1 = location2 - 1;
location3 = location2 + 1;

alert(location1 + location2 + location3);

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
        if (guess < 0 || guess > 6) {
            alert("Please enter a valid cell number!");
            } else {
                        guesses = guesses + 1;
                            if (guess == location1 || guess == location2 || guess == location3) {
                            hits = hits + 1;
                                if (hits == 3) {
                                    isSunk = true;
                                    alert("You sank my battleship!");
                                }
                            }
                    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);

alert(stats);