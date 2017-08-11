var mastermindArray = ["red", "blue", "yellow", "orange"];

var firstGuess = ["red", "yellow", "red", "indigo"];

function feedback(mastermindArray, firstGuess) {

	var precise = 0;
    var partial = 0;

    var colourList = ["red", "blue", "yellow", "orange","indigo","green"];
    var checkColour = [false, false,false,false,false,false];

    for (let i = 0; i < firstGuess.length; i++) {
        if (firstGuess[i] === mastermindArray[i]) {
            precise += 1;
        }
        for (let j=0; j< mastermindArray.length; j++){

          if (firstGuess[i] === mastermindArray[j]) {
              for(let k=0; k < colourList.length;k++){
                  if(firstGuess[i] === colourList[k] && checkColour[k]==false){
                    checkColour[k]=true;
                    partial += 1;
                  }
              }
              break;
          }
        }
    }
    partial = partial - precise;

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

}


// this.setState({feedbackArray: feedbackArray});
