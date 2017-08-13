function feedback(mastermindArray, guess) {

	var precise = 0;
    var partial = 0;

    var checkColour = [false, false,false,false];

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === mastermindArray[i]) {
            precise += 1;
        }
        for (let j=0; j< mastermindArray.length; j++){

          if (guess[i] === mastermindArray[j]) {
              for(let k=0; k < mastermindArray.length;k++){
                  if(guess[i] === mastermindArray[k] && checkColour[k]==false){
                    checkColour[k]=true;
                    partial += 1;
                  }
              }
              break;
          }
        }
    }
    partial = Math.max(partial - precise,0);

    console.log(`There were ${precise} precise`);
    console.log(`There were ${partial} partial`);

    const ROWS_LENGTH = 4;
    const feedbackArray = [];

    for (let i = 0; i<ROWS_LENGTH; i++){
        if(i<precise){
            feedbackArray[i] = 'black';
        }
        if(i>=precise && i<precise + partial) {
            feedbackArray[i] = 'red';
        }
    }

    console.log("feedback", feedbackArray);

    return feedbackArray;
}
