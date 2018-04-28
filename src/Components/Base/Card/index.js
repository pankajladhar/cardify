import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { avatar, cardType, alias, style } = this.props;
        return (
            <div className="Card">
                <div className={`Card__Avatar Card__Avatar--${style}`}> {avatar} </div>
                <div className="Card__Info">
                    <div className="Card__Info__Main">
                        {cardType} 
                    </div>
                    <div className="Card__Info__Main__Alias">
                        {alias}
                    </div>
                </div>
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