import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Wishlist.css';

const AddtoCart = ({ updateCartCount }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
        updateCartCount(cartItems.length); // Update cart count on component mount
    }, [updateCartCount]);

    const handleRemoveClick = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updateCartCount(updatedCart.length); // Update cart count on removal
    };

    return (
        <>
            <div className="add-to-cart wishlist-container">
                <h1>Your items in your cart</h1>
                {cart.length ? (
                    cart.map((product, index) => (
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
                                    <NavLink key={product._id} to={`/orderplace/${product._id}`} state={{ product, selectedImage: product.selectedImage }}>
                                        <button className='btn'>buy now</button>
                                    </NavLink>
                                    <button className='btn icon' onClick={() => handleRemoveClick(index)}>
                                        <i className="ri-delete-bin-5-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='add'>No items in your cart</p>
                )}
            </div>
        </>
    );
};

export default AddtoCart;
