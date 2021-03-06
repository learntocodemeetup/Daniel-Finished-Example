function compare(mastermind, guess) {

    let mastermindCopy = mastermind.concat([]);
    let guessCopy = guess.concat([]);

    let feedback = ["white", "white", "white", "white"]

    let precise = 0;
    let partial = 0;

    // first check precise

    for (let i = 0; i < 4; i++) {
        if (guess[i] === mastermind[i]) {
            precise += 1;
            mastermindCopy[i] = true;
            guessCopy[i] = true;
            for (let j = 0; j < feedback.length; j++) {
                if (feedback[j] === "white") {
                    feedback[j] = "black";
                    break
                }
            }
        }
    }

    // remove the colours from the mastermindCopy and the
    // guessCopy array that we just set to true.

    // These need to be taken out so that they are not
    // counted twice

    mastermindCopy = mastermindCopy.filter(function(colour) {
        return colour !== true;
    });

    guessCopy = guessCopy.filter(function(colour) {
        return colour !== true;
    });

    // then check for partials

    for (let i = 0; i < guessCopy.length; i++) {
        for (let j = 0; j < mastermindCopy.length; j++) {
            if (guessCopy[i] === mastermindCopy[j]) {
                partial += 1;
                mastermindCopy[j] = true;
                for (let z = 0; z < feedback.length; z++) {
                    if (feedback[z] === "white") {
                        feedback[z] = "red";
                        break
                    }
                }
            }
        }
    }


    console.log("Mastermind:", mastermind);
    console.log("Guess:", guess);
    console.log("");
    console.log("Feedback", feedback);
    console.log("----------------");
    console.log("");

}

const mastermind1 = ["red", "red", "blue", "green"]
const guess1 = ["red", "red", "green", "orange"];

compare(mastermind1, guess1)

const mastermind2 = ["red", "orange", "green", "blue"]
const guess2 = ["indigo", "indigo", "indigo", "indigo"];

compare(mastermind2, guess2);

const mastermind3 = ["red", "red", "red", "red"]
const guess3 = ["red", "red", "red", "red"];

compare(mastermind3, guess3);
