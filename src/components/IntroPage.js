import React from 'react';
import Navbar from './Navbar/Navbar'; // Import Navbar component
import './IntroPage.css'; // Import CSS
import Footer from './Footer/Footer';
import Collections from './Collections/Collections';
import Newsletter from './Newsletter/Newsletter';
import NewArrivals from './NewArrivals/NewArrivals'

function IntroPage({onBagIconClick, cartItemCount}) {
    return (
        <div className="intro-home">
            <div className="intro-container">
                <Navbar onBagIconClick={onBagIconClick} cartItemCount={cartItemCount}/>
                <video autoPlay muted loop className="background-video">
                    <source src="/navbar-bg.mov" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <h1 className="intro-heading">Welcome to ÖRDA</h1>
                {/* <button className="shop-now-btn">Shop Now</button> */}
                {/* Add other components or content if needed */}
            </div>
            <div className="intro-footer">
                <Collections />
                <NewArrivals />
                <Newsletter />
                <Footer />
            </div>
        </div>
    );
}

export default IntroPage;