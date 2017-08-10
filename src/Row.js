import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Guess from './Guess';
import Feedback from './Feedback';

class Row extends Component {

    static propTypes = {
        feedbackArray: PropTypes.arrayOf(PropTypes.string).isRequired,
        rowIndex: PropTypes.number.isRequired,
        rowColorsArray: PropTypes.array.isRequired,
        setCircleColor: PropTypes.func.isRequired,
        isActiveRow: PropTypes.bool.isRequired
    };

    render() {
        // const bigCircleStyle = {borderColor: 'grey', borderWidth: '2px'};
        // const smallCircleStyle = {borderColor: 'black', borderWidth: '1px'};
        const activeRowClass = this.props.isActiveRow ? "row active-row" : "row";

        return (
            <div className={activeRowClass}>
                <Guess
                    rowIndex={this.props.rowIndex}
                    setCircleColor={this.props.setCircleColor}
                    rowColorsArray={this.props.rowColorsArray}
                />

                <Feedback
                    feedbackArray={this.props.feedbackArray}
                />
            </div>
        );
    }
}

export default Row;
