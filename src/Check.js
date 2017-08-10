import React, {Component} from 'react';
import PropTypes from 'prop-types';

import headCheck from './images/head-check.svg';

class Check extends Component {

    static propTypes = {
        comparisonCheck: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="head-check">
                <img
                    className="head-check-image"
                    alt="head check"
                    src={headCheck}
                    onClick={this.props.comparisonCheck}
                    title="Check how smart you are"
                />
            </div>
        );
    }
}

export default Check;
