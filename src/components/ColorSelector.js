import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';

class ColorSelector extends Component {

    static propTypes = {
        setActiveColor: PropTypes.func.isRequired,
        colorsArray: PropTypes.array.isRequired,
        activeColor: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="color-selector">

                {this.props.colorsArray.map(
                    (color, index) => {
                        return (
                            <Circle
                                key={index}
                                color={color}
                                onClick={() => this.props.setActiveColor(color)}
                                type="select"
                                activeColor={this.props.activeColor}
                            />
                        );

                    }
                )}
            </div>
        );

    }
}

export default ColorSelector;
