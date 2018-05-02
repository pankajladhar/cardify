import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from './../../../Constants';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <ul className="Footer__Menu">
                <li className="Footer__Menu__Item">
                    <Link to="/" className="Footer__Menu__Item__Link Footer__Menu__Item__Link--Search">
                        <span className="sr-only">Link 1</span>
                    </Link>
                </li>
                <li className="Footer__Menu__Item">
                    <Link to="/addnewcard" className="Footer__Menu__Item__Link Footer__Menu__Item__Link--Plus">
                        <span className="sr-only"> { CONSTANTS.FOOTER.ADD_NEW_CARD_TEXT }</span>
                    </Link>
                </li>
                <li className="Footer__Menu__Item">
                    <Link to="/" className="Footer__Menu__Item__Link Footer__Menu__Item__Link--Setting">
                        <span className="sr-only">Link 1</span>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;