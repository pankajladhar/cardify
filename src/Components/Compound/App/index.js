import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './../../Base/Header';
import Footer from './../../Base/Footer';
import Cards from './../../Compound/Cards'

class App extends Component {
    render() {
        return (
            <div className="Container">
                <Header />
                <Cards />
                <Footer />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;