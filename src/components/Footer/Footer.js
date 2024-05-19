import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="orda-futuristic-footer">
            <div className="branding">
                <h1>Örda</h1>
            </div>
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/collections">Collections</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="copyright">
                <p>© 2023 Örda. Crafted with precision.</p>
            </div>
        </div>
    );
}

export default Footer;