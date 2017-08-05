import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Circle extends Component {

    static propTypes = {
        color: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onClick: PropTypes.func
        // rowIndex: PropTypes.number.isRequired,
        // circleIndex: PropTypes.number.isRequired
    };

    render() {

        let className;
        if (this.props.color === this.props.activeColor && this.props.type === "select") {
            className = "circle active-circle";
        } else {
            className = "circle"
        }

        return (
            <div
                className={className}
                style={{backgroundColor: this.props.color}}
                onClick={this.props.onClick}
            />
        );

    }
}

export default Circle;
