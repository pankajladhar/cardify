import React from 'react';
import CONSTANTS from './../../../Constants/index';
import logo from './logo.svg'
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <a href="/" className="Header__Logo">
                <img className="Header__Logo__Image"
                    src={logo}
                    alt={CONSTANTS.LOGO_ALT_TEXT}
                />
                {CONSTANTS.LOGO_ALT_TEXT}
            </a>
        </header>
    );
};

export default Header;