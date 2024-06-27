import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/Product.css';

const Product = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(product?.Color[0].Images[0]);
    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) {
        return <p>Product data not found.</p>;
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <Navbar />
            <div className="product-container">
                <div className="product-image">
                    <img src={selectedImage} alt="product" />
                </div>
                <div className="product-details">
                    <p><b>{product.Brand}</b></p>
                    <p>{product.Name}</p>
                    <p>
                        <span><b>₹{product.SellingPrice}</b></span>
                        <span className='mrp'><del>MRP : ₹{product.MRP}</del></span>
                    </p>
                    <p>Inclusive of all taxes</p>
                    <p className='more'><b>MORE COLOR</b></p>
                    <div className="more-colors">
                        {product.Color.map((color, index) => (
                            <img
                                key={index}
                                src={color.Images[0]}
                                alt={color.ColorName}
                                onClick={() => setSelectedImage(color.Images[0])}
                                className="clickable-image"
                            />
                        ))}
                    </div>
                    <p className='size'><b>Select Size</b></p>
                    <div className="sizes">
                        {product.Sizes.map((size, index) => (
                            <p
                                key={index}
                                className={`m ${selectedSize === size.Length ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size.Length)}
                            >
                                {size.Length}
                            </p>
                        ))}
                    </div>
                    <div className="buttons">
                        <NavLink key={product._id} to={`/orderplace/${product._id}`} state={{ product, selectedImage }}>
                            <button className='blue'>add to bag</button>
                        </NavLink>

                        <NavLink key={product._id} to={`/wishlist/${product._id}`} state={{ product }}><button>add to wishlist</button></NavLink>
                    </div>
                    <hr />
                    <div className="delivery-options">
                        <h3 className='delivery'>
                            Delivery options <i className="ri-truck-line"></i>
                        </h3>
                        <input type="text" placeholder='Enter Pincode' />
                        <p>Please Enter Your Pincode to check delivery time & Pay on Delivery Availability</p>
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 7 days returns and exchanges</p>
                        <h3 className='product'>
                            Product details <i className="ri-file-list-line"></i>
                        </h3>
                        <p>{product.ProductDetail}</p>
                        <p><b>Size & Fit</b> <span>{product.SizeFit}</span></p>
                        <p className='material'><b>Material & Care</b> <span>{product.MaterialCare.map((step, index) => (
                            <span key={index}>{step}</span>
                        ))}</span></p>
                        <div className="specifications">
                            <p><b>Specifications</b></p>
                            {product.Specification.map((spec, index) => (
                                <div key={index}>
                                    <p className='title'>{spec.Title}</p>
                                    <p className='data'>{spec.Data}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
