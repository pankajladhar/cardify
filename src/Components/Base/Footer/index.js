import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <ul className="Footer__Menu">
                <li className="Footer__Menu__Item">
                    <a href="" className="Footer__Menu__Item__Link Footer__Menu__Item__Link--Search">
                        <span className="sr-only">Link 1
                    </span>
                    </a>
                </li>
                <li className="Footer__Menu__Item">
                    <a href="" className="Footer__Menu__Item__Link Footer__Menu__Item__Link--Plus">
                        <span className="sr-only">Link 1
                    </span>
                    </a>
                </li>
                <li className="Footer__Menu__Item">
                    <a href="" className="Footer__Menu__Item__Link Footer__Menu__Item__Link--Setting">
                        <span className="sr-only">Link 1
                    </span>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;