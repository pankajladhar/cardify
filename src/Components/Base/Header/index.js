import React from 'react';
import CONSTANTS from './../../../Constants/index';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <img src="/" alt={CONSTANTS.LOGO_ALT_TEXT}/>
        </header>
    );
};

export default Header;