import React, { Component } from 'react';

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

export default Card;