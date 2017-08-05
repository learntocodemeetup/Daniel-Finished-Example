import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import Row from './Row';
import Check from './Check';
import ColorSelector from './ColorSelector';

import mastermindImage from './mastermind.jpg';
import winner from './winner.png'

import mastermindLayout from './utils/mastermindLayout';
import generateMastermindAnswer from './utils/generateMastermindAnswer';
import compare from './utils/compare'


import './index.css';

// const ROWS_HEIGHT = 10;
// const ROWS_LENGTH = 4;

class App extends Component {

    state = {
        mastermindLayout: mastermindLayout,
        activeColor: 'red',
        activeRow: 0,
        winner: false,
        mastermindAnswer: generateMastermindAnswer()
    };

    // static initialSetup() {
    //     let state = {
    //
    //     };
    //     // let mastermindLayout = [];
    //     // for (let i = 0; i < ROWS_HEIGHT; i++) {
    //     //     const coloredRow = [];
    //     //     for (let j = 0; j < ROWS_LENGTH; j++) {
    //     //         coloredRow.push('white');
    //     //     }
    //     //     mastermindLayout.push(coloredRow);
    //     // }
    //     //
    //     // state.mastermindLayout = mastermindLayout;
    //     // state.feedbackArray = mastermindLayout.map((val) => val.slice());
    //     // return state
    // }

    setActiveColor = (color) => {
        this.setState({activeColor: color})
    };

    setCircleColor = (rowIndex, columnIndex) => {
        let mastermindLayout = this.state.mastermindLayout;

        if (rowIndex === this.state.activeRow) {
            mastermindLayout[rowIndex].coloredRow[columnIndex] = this.state.activeColor;
            this.setState({mastermindLayout: mastermindLayout});
        }
    };

    comparisonCheck = () => {
        let activeRow = this.state.activeRow;
        let mastermindAnswer = this.state.mastermindAnswer;
        let guessRow = this.state.mastermindLayout[activeRow].coloredRow;

        let results = compare(mastermindAnswer, guessRow);
        let partial = results[0];
        let precise = results[1];

        console.log("active row is", activeRow);
        console.log(`mastermind array is:`, this.state.mastermindAnswer);
        console.log(`our guess is:`, guessRow);
        console.log(`There were ${precise} precise guesses`);
        console.log(`There were ${partial} partial guesses`);

        if (precise === 4) {
            this.setState({
                winner: true,
            });

            console.log("You win!");
        } else {
            this.setState({
                activeRow: this.state.activeRow + 1,

            });
            console.log("Wrong!!!");
        }

        this.updateFeedback(partial, precise, activeRow);

    };

    updateFeedback(partial, precise, activeRow) {
        let mastermindLayout = this.state.mastermindLayout;
        this.setState({
            mastermindLayout: mastermindLayout.map((guessRow, index) => {

                if (index === activeRow) {
                    let feedbackRow = guessRow.feedbackRow;
                    let positionFilled = [false, false, false, false];
                    let position = 0;

                    feedbackRow.forEach((guessColor, index) => {



                        if (position < 4) {
                            if (precise > 0 && positionFilled[position] !== true) {
                                feedbackRow[position] = "black";
                                positionFilled[position] = true;
                                position += 1;
                                precise -= 1;
                            }

                            if (partial > 0 && positionFilled[position] !== true) {
                                feedbackRow[position] = "red";
                                positionFilled[position] = true;
                                position += 1;
                                partial -= 1;

                            }
                        }
                    });
                }

                return guessRow;

            })
        });
    }

    render() {
        console.log("State:", this.state);
        console.log("mastermindAnswer:", this.state.mastermindAnswer);
        const reactRows = this.state.mastermindLayout.map(
            (row, index) => {
                const rowColorsArray = this.state.mastermindLayout[index].coloredRow;
                const feedbackArray = this.state.mastermindLayout[index].feedbackRow;
                const isActive = this.state.activeRow === index;

                return (
                    <Row
                        key={index}
                        rowIndex={index}
                        feedbackArray={feedbackArray}
                        rowColorsArray={rowColorsArray}
                        isActiveRow={isActive}
                        setCircleColor={this.setCircleColor}
                    />
                );
            }
        );

        return (
            <div className="App">
                <section className="game-title">
                    {/* <h1>Mastermind</h1> */}
                    <img src={mastermindImage} className="mastermind-image" alt="Mastermind logo"/>
                    {this.state.winner ? <img className="winner-image" src={winner} alt="You won the game!"/> : ""}
                </section>

                <section className="game-board">


                    <div className="rows">
                        { reactRows }
                    </div>




                </section>

                <section className="selector-panel">
                    <ColorSelector
                        activeColor={this.state.activeColor}
                        setActiveColor={this.setActiveColor}
                        colorsArray={["red", "orange", "yellow", "green", "blue", "indigo"]}

                    />
                    <Check comparisonCheck={this.comparisonCheck} />
                </section>
            </div>
        );
    }
}

export default App;
