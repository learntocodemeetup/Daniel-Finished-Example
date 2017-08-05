export default function compare(mastermindAnswer, guessRow) {

    let precise = 0;
    let partial = 0;

    const checkColor = [false, false, false, false];

    guessRow.forEach(
        (guess, index) => {
            // let mastermindAnswer = this.props.mastermindAnswers;

            if (guess === mastermindAnswer[index]) {
                precise += 1;
            }

            if (mastermindAnswer.indexOf(guess) !== -1 && checkColor[index] === false) {
                checkColor[index] = true;
                partial++;
            }
        }
    );

    partial = Math.max(partial - precise, 0);

    console.log("From within compare", partial, precise);

    // activeRow++;


    return [partial, precise];

}
