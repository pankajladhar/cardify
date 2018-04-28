import React, { Component } from 'react';

class CardDetails extends Component {
    render() {
        return(
            <div className="CardDetails">
                Card Details Component { this.props.match.params.cardId  }
            </div>
        )
    }
}

export default CardDetails;