import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from './../../Base/Header';
import Footer from './../../Base/Footer';
import Cards from './../../Compound/Cards';
import CardDetails from './../../Compound/CardDetails';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <div className="Container">
                        <Route exact path="/" component={Cards} />
                        <Route path="/details/:cardId" component={CardDetails} />
                        <Route path="/topics" component={Cards} />
                    </div>
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}

App.propTypes = {

};

export default App;