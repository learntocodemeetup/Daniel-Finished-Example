import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';

class Guess extends Component {

    static propTypes = {
        rowIndex: PropTypes.number.isRequired,
        rowColorsArray: PropTypes.array.isRequired,
        setCircleColor: PropTypes.func.isRequired,
    };

    render() {
        const bigCircleStyle = {borderColor: 'grey', borderWidth: '2px'};

        const coloredCircles = this.props.rowColorsArray.map(
            (value, index) => {
                return (
                    <Circle
                        key={index}
                        color={this.props.rowColorsArray[index]}
                        type="guess"
                        css={bigCircleStyle}
                        onClick={() => this.props.setCircleColor(this.props.rowIndex, index)}
                    />
                );
            }
        );
        return (


            <div className="guess">
                { coloredCircles }
            </div>
        );
    }
}

export default Guess;
