import React from 'react';
import { Link } from "react-router-dom";
import CONSTANTS from './../../../Constants/index';
import logo from './logo.svg'
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <Link to="/" className="Header__Logo">
                <img className="Header__Logo__Image"
                    src={logo}
                    alt={CONSTANTS.LOGO_ALT_TEXT}
                />
                {CONSTANTS.LOGO_ALT_TEXT}
            </Link>
        </header>
    );
};

export default Header;