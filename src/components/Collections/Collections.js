import React from 'react';
import './Collections.css';
import { Link } from 'react-router-dom';
import leatherLegend from '../../assets/LeatherLegend.jpeg'; 
import woven from '../../assets/Woven.jpeg'; 
import silver from '../../assets/Silver.jpeg'; 


function Collections() {
    return (
        <div className="collections-container">
            <h2>Dive into ÖRDA's Exquisite Range</h2>
            <div className="collection-item">
                <img src={leatherLegend} alt="Leather Accessories"/>
                <div className="collection-text">Leather Legends</div>
                {/* <p>Crafted from the untamed spirit of the steppe</p> */}
            </div>
            <div className="collection-item">
                <img src={woven} alt="Woven Bracelets"/>
                <div className="collection-text">Woven Bracelets</div>
                {/* <p>Threads that bind tales and traditions.</p> */}
            </div>
        </div>
    );
}

export default Collections;