import React, {Component} from 'react';
import PropTypes from 'prop-types';

import _headCheck from './_head-check.svg';


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
                    src={_headCheck}
                    onClick={this.props.comparisonCheck}
                    title="Check how smart you are"

                />
            </div>
        );
    }
}

export default Check;
