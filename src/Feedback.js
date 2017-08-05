import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';

class Feedback extends Component {

    static propTypes = {
        feedbackArray: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    render() {
        const smallCircleStyle = {borderColor: 'black', borderWidth: '1px'};

        const feedbackCircles = this.props.feedbackArray.map(
            (value, index) => {
                return (
                    <Circle
                        key={index}
                        color={value}
                        type="feedback"
                        css={smallCircleStyle}
                    />
                );
            }
        );

        return (


            <div className="feedback">
                { feedbackCircles }
            </div>
        );
    }
}

export default Feedback;
