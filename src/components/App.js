import React, {Component} from 'react';

import Row from './Row';
import Check from './Check';
import ColorSelector from './ColorSelector';

import mastermindImage from '../images/mastermind.jpg';
import winner from '../images/winner.png'

import mastermindLayout from '../utils/mastermindLayout';
import generateMastermindAnswer from '../utils/generateMastermindAnswer';
import compare from '../utils/compare'


import '../css/index.css';


class App extends Component {

    state = {
        mastermindLayout: mastermindLayout(),
        mastermindAnswer: generateMastermindAnswer(),
        activeColor: 'red',
        activeRow: 0,
        winner: false,
    };

    componentDidMount() {
        console.log("mastermindAnswer:", this.state.mastermindAnswer);
    }

    setActiveColor = (color) => {
        this.setState({activeColor: color})
    };

    setCircleColor = (rowIndex, columnIndex) => {

        if (rowIndex === this.state.activeRow) {
            //this.state.mastermindLayout[rowIndex].colored[columnIndex] = this.state.activeColor;
            this.setState({
                mastermindLayout: this.state.mastermindLayout.map((row, index) => {
                    if (index === this.state.activeRow) {
                        row.colored[columnIndex] = this.state.activeColor;
                    }
                    return row;

                })
            });
        }
    };

    comparisonCheck = () => {
        let activeRow = this.state.activeRow;
        let mastermindAnswer = this.state.mastermindAnswer;
        let guess = this.state.mastermindLayout[activeRow].colored;

        let feedback = compare(mastermindAnswer, guess);
        console.log(feedback);

        this.setState({
            mastermindLayout: this.state.mastermindLayout.map((row, index) => {
                if (index === activeRow) {
                    row.feedback = feedback;
                }

                return row;
            }),
            activeRow: this.state.activeRow + 1
        });


    };

    render() {
        const rows = this.state.mastermindLayout.map(
            (row, index) => {
                const rowColorsArray = this.state.mastermindLayout[index].colored;
                const feedbackArray = this.state.mastermindLayout[index].feedback;
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
                        { rows }
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
