import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Wishlist.css';

const Wishlist = ({ updateWishlistCount }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [wishlist, setWishlist] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(wishlistItems);
        updateWishlistCount(wishlistItems.length);

        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartItems);
    }, [updateWishlistCount]);

    const handleRemoveClick = (index) => {
        const updatedWishlist = wishlist.filter((_, i) => i !== index);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        updateWishlistCount(updatedWishlist.length);
    };

    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart);
    };

    const isInCart = (product) => {
        return cartItems.some(item => item._id === product._id);
    };

    return (
        <>
            <div className="wishlist-container">
                <h1>Your items in your wishlist</h1>
                {wishlist.length ? (
                    wishlist.map((product, index) => (
                        <div key={index} className="product-container1">
                            <div className="product-image">
                                <img src={product.selectedImage} alt="product" />
                            </div>
                            <div className="product-details">
                                <p className='brand'><b>{product.Brand}</b></p>
                                <p className='name'>{product.Name}</p>
                                <p>
                                    <span className='sp'><b>₹{product.SellingPrice}</b></span>
                                    <span className='mrp'><del>MRP : ₹{product.MRP}</del></span>
                                </p>
                                <p className='taxes'>Inclusive of all taxes</p>
                                <div className="buttons">
                                    <NavLink key={product._id} state={{ product, selectedImage: product.selectedImage }}>
                                        <button className='btn' onClick={() => handleAddToCart(product)} disabled={isInCart(product)}>
                                            {isInCart(product) ? 'Added to Cart' : 'Add to Cart'} <span><i className="ri-shopping-cart-line"></i></span>
                                        </button>
                                    </NavLink>
                                    <button className='btn icon' onClick={() => handleRemoveClick(index)}>
                                        <i className="ri-delete-bin-5-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='add'>No items in your wishlist</p>
                )}
            </div>
        </>
    );
};

export default Wishlist;
