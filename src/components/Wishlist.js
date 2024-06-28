import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '../assets/css/Wishlist.css';

const Wishlist = () => {
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
            <div className="wishlist-container">
                <h1>Your items in your wishlist</h1>
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
                                <NavLink key={product._id} to={`/addtocart/${product._id}`} state={{ product }}><button className='btn'>Add to Cart <span><i className="ri-shopping-cart-line"></i></span></button>
                                </NavLink>
                                <button className='btn icon' onClick={handleRemoveClick}><i class="ri-delete-bin-5-line"></i></button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='add'>No items in your wishlist</p>
                )}
            </div>
        </>
    );
};

export default Wishlist;
