var location1 = Math.random() * 6;
var location2 = Math.random() * 6;
var location3 = Math.random() * 6;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while ( ( location1 != location2 ) & ( location1 != location3 ) & ( location2 != location3 )) {
    location1 = Math.random() * 6;
    location2 = Math.random() * 6;
    location3 = Math.random() * 6;
}

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