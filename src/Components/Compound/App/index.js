import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './../../Base/Header'

class App extends Component {
    render() {
        return (
            <div className="Container">
                <Header />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;