import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
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
        getSavedCards().then((cards) => {
            this.setState({
                cards
            });
        })
    }

    renderCards() {
        return (
            <div className="Cards">
                {
                    this.state.cards.map(card => {
                        return (
                            <Link key={card.id}
                                to={`/details/${card.id}`}>
                                <Card {...card} />
                            </Link>
                        )
                    })
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