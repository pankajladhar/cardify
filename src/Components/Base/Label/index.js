import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Label extends PureComponent {
    render() {
        return (
            <label htmlFor={this.props.htmlFor}
                className={`Label ${this.props.className}`}>
                {this.props.text}
                {this.props.showAsterisk && <span>*</span>}
            </label>
        );
    }
}

Label.defaultProps = {
    className: "",
    showAsterisk: false
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string,
    showAsterisk: PropTypes.bool,
    text: PropTypes.string.isRequired
};

export default Label;