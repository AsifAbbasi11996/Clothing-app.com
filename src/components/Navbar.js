import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo.png';
import SignUpForm from './SignUpForm'; // Import SignUpForm component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSignUpClick = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="main-container">
                <div className="navbar-container">
                    <div className="menu-bar" onClick={handleClick}>
                        {isOpen ? (
                            <i className="ri-close-line"></i>
                        ) : (
                            <i className="ri-menu-line"></i>
                        )}
                    </div>
                    <div className="logo">
                        <NavLink to='/'>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="lists">
                        <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
                            <li>
                                <NavLink to='/' className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/menclothing' className="nav-link" activeClassName="active">Men</NavLink>
                            </li>
                            <li>
                                <NavLink to='/womenclothing' className="nav-link" activeClassName="active">Women</NavLink>
                            </li>
                            <li>
                                <NavLink to='/kidsclothing' className="nav-link" activeClassName="active">Kids</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className="nav-link" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="three-icons">
                        <NavLink>
                            <div className="search-bar">
                                <i className="ri-search-line"></i>
                            </div>
                        </NavLink>
                        <div className="account" onClick={handleSignUpClick}>
                            <i className="ri-account-circle-line"></i>
                            {showSignUp && <SignUpForm onClose={handleSignUpClick} />}
                        </div>
                        <NavLink>
                            <div className="add-to-cart">
                                <i className="ri-shopping-cart-line"></i>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
