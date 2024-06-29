import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo.png';
import SignUpForm from './SignUpForm';
import axios from 'axios';

const Navbar = ({ cartCount, wishlistCount }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSignUpClick = () => {
        setShowSignUp(!showSignUp);
    };

    useEffect(() => {
        if (searchTerm) {
            axios.get('https://api-5e1h.onrender.com/clothe/all')
                .then((response) => {
                    const products = response.data;
                    const filtered = products.filter((product) =>
                        product.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.Gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    setSuggestions(filtered);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleSearchSelect = (product) => {
        navigate(`/product/${product._id}`, { state : { product }});
        setSearchTerm('');
        setSuggestions([]);
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
                            <img src={logo} alt="logo" />
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
                        </ul>
                    </div>
                    <div className="three-icons">
                        <div className="search-bar">
                            <i className="ri-search-line"></i>
                            <input
                                type="search"
                                placeholder="Search your clothes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {suggestions.length > 0 && (
                                <ul className="suggestions-list">
                                    {suggestions.map((item) => (
                                        <li key={item._id} onClick={() => handleSearchSelect(item)}>
                                            {item.Name} - {item.Brand}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="search-bar2">
                            <i className="ri-search-line"></i>
                        </div>
                        <div className="account" onClick={handleSignUpClick}>
                            <i className="ri-account-circle-line"></i>
                            {showSignUp && <SignUpForm onClose={handleSignUpClick} />}
                        </div>
                        <NavLink to='/addtocart'>
                            <div className="add-to-cart">
                                <i className="ri-shopping-cart-line"></i>
                                {cartCount > 0 && <span>{cartCount}</span>}
                            </div>
                        </NavLink>
                        <NavLink to='/wishlist'>
                            <div className="add-to-wishlist">
                                <i className="ri-heart-line"></i>
                                {wishlistCount > 0 && <span>{wishlistCount}</span>}
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
