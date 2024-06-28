import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Wishlist.css';

const AddtoCart = () => {

    const location = useLocation();
    const { product } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(product?.Color[0].Images[0]);
    const [isVisible, setIsVisible] = useState(true);

    if (!product) {
        return <p>Product data not found.</p>;
    }

    const handleRemoveClick = () => {
        setIsVisible(false);
    };
    return (
        <>
            
            <div className="add-to-cart wishlist-container">
                <h1>Your items in your carts</h1>
                {isVisible ? (
                    <div className="product-container1">
                        <div className="product-image">
                            <img src={selectedImage} alt="product" />
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
                                <NavLink key={product._id} to={`/orderplace/${product._id}`} state={{ product, selectedImage }}>
                                    <button className='btn'>buy now</button>
                                </NavLink>
                                <button className='btn icon' onClick={handleRemoveClick}><i class="ri-delete-bin-5-line"></i></button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='add'>No items in your cart</p>
                )}
            </div>
            
        </>
    )
}

export default AddtoCart