import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cardType, alias } = this.props;
        return(
            <div className="Card">
                { cardType } { alias }
            </div>
        )
    }
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
    alias: PropTypes.string,
}

export default Card;