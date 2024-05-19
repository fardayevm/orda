import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar({ darkTheme, onBagIconClick, cartItemCount  }) {
    const [searchValue, setSearchValue] = useState('');
    const [isSearchActive, setSearchActive] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // New state for mobile nav toggle
    const navRef = useRef(); 

    function toggleSearch() {
        setSearchActive(!isSearchActive);
    }

    function handleInputChange(event) {
        setSearchValue(event.target.value);
    }

    const navbarClass = darkTheme ? "advanced-navbar dark-theme" : "advanced-navbar";

    // Function to toggle the mobile navigation
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        // Function to check if clicked outside of the nav
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false); // Close the nav if clicked outside
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    console.log("Dark Theme:", darkTheme);
    console.log("Cart Item Count:", cartItemCount);

    return (
        <nav ref={navRef} className={navbarClass}>
            <ul className={`navbar-links ${isNavOpen ? 'isNavOpen' : ''}`}>       
                <li><Link to="/new" className="customLink">NEW</Link></li>
                <li><Link to="/men" className="customLink">MEN</Link></li>
                <li><Link to="/women" className="customLink">WOMEN</Link></li>
                {/* <li><Link to="/sale" className="customLink">SALE</Link></li> */}
            </ul>

            <div className="navbar-brand">
                <span>
                    <Link to="/" className="customLink">ÖRDA</Link>
                </span>
            </div>

            {/* Hamburger menu icon for mobile */}
            <div className="menu-icon" onClick={toggleNav}>
                <i className="fas fa-bars"></i> {/* Or any other icon */}
            </div>

            <div className="navbar-icons">                
                <div className="icon-container">
                    <div className="icon-item search-icon-item" onClick={toggleSearch}>
                        <i className="fas fa-search"></i>
                        <span className="icon-text"></span>
                        {isSearchActive && (
                            <input 
                                className="search-input"
                                type="text"
                                value={searchValue}
                                onChange={handleInputChange}
                                placeholder="Type here..."
                                autoFocus
                            />
                        )}
                    </div>
                    <div className="icon-item">
                        <Link to="/Login" className="customLink"><i className="fas fa-user"></i></Link>
                        <span className="icon-text"><Link to="/Login" className="customLink">Sign In</Link></span>
                    </div>
                    <div className="icon-item" onClick={onBagIconClick}>
                        <i className="fas fa-shopping-bag"></i>
                        {cartItemCount > 0 && (
                            <span className="cart-item-count">{cartItemCount}</span>
                        )}
                        <span className="icon-text">Bag</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;