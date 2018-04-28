import React, { Component, Fragment } from 'react';
import Loader from './../../Base/Loader';
import Card from './../../Base/Card';
import { getSavedCards } from './../../../API';

import './Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.renderLoader = this.renderLoader.bind(this);
        this.renderCards = this.renderCards.bind(this);
    }

    componentDidMount() {
        this.setState({
            cards: getSavedCards()
        });
    }

    renderCards() {
        return (
            <div className="Cards">
                {
                    this.state.cards.map(card =>
                        <Card key={card.id} {...card}/>
                    )
                }
            </div>
        )
    }

    renderLoader() {
        return (
            <Loader />
        )
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.cards.length > 0 ?
                        this.renderCards()
                        : this.renderLoader()
                }
            </Fragment>
        )
    }
}

export default Cards