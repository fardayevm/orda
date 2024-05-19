import React from 'react';
import './Newsletter.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login';


function Newsletter () {
    return (
        <div className="newsletter-section">
            <div className="newsletter-box">
                <h2>Join the Tribe</h2>
                <p>Get updates, exclusive offers, and tales from the steppe.</p>
                <button type="submit" className="btn-content">
                    <Link to="/Login" className="customLink"><span className="button-text">Register Now</span></Link>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                </button>
            </div>
        </div>
    );
}

export default Newsletter;