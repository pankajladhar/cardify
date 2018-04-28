import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './../../Base/Header';
import Footer from './../../Base/Footer';
import Cards from './../../Compound/Cards';
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="Container">
                    <Cards />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

App.propTypes = {

};

export default App;