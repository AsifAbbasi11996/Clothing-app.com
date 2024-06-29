import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '../assets/css/Product.css';

const Product = ({ updateCartCount, updateWishlistCount }) => {
    const location = useLocation();
    const { product } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    const [addedToWishlist, setAddedToWishlist] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [showWishlistPopup, setShowWishlistPopup] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (product) {
            setSelectedImage(product.Color[0]?.Images[0]);
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const isInCart = cartItems.some(item => item._id === product._id);
            setAddedToCart(isInCart);

            const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
            const isInWishlist = wishlistItems.some(item => item._id === product._id);
            setAddedToWishlist(isInWishlist);
        }
    }, [product]);

    if (!product) {
        return <p>Product data not found.</p>;
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (addedToCart) {
            setShowCartPopup(true);
            return;
        }

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = { ...product, selectedImage, selectedSize };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount(cart.length);
        setAddedToCart(true);
    };

    const handleAddToWishlist = () => {
        if (addedToWishlist) {
            setShowWishlistPopup(true);
            return;
        }

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const wishlistItem = { ...product, selectedImage, selectedSize };
        wishlist.push(wishlistItem);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount(wishlist.length);
        setAddedToWishlist(true);
    };

    const closeCartPopup = () => {
        setShowCartPopup(false);
    };

    const closeWishlistPopup = () => {
        setShowWishlistPopup(false);
    };

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="product-container">
                <div className="product-image">
                    <img src={selectedImage} alt="product" />
                    <div className="add-to-cart">
                        {addedToCart ? (
                            <button disabled>
                                Added to Cart <span><i className="ri-shopping-cart-line"></i></span>
                            </button>
                        ) : (
                            <button onClick={handleAddToCart}>
                                Add to Cart <span><i className="ri-shopping-cart-line"></i></span>
                            </button>
                        )}
                    </div>
                </div>
                <div className="product-details">
                    <p><b>{product.Brand}</b></p>
                    <p>{product.Name}</p>
                    <p>
                        <span><b>₹{product.SellingPrice}</b></span>
                        <span className='mrp'><del>MRP: ₹{product.MRP}</del></span>
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
                        <NavLink to={`/orderplace/${product._id}`} state={{ product, selectedImage }}>
                            <button className='buynow'>buy now</button>
                        </NavLink>

                        <NavLink key={product._id} state={{ product, selectedImage }}>
                            {addedToWishlist ? (
                                <button disabled>
                                    Added to Wishlist <span><i className="ri-heart-add-line"></i></span>
                                </button>
                            ) : (
                                <button onClick={handleAddToWishlist}>
                                    Add to Wishlist <span><i className="ri-heart-add-line"></i></span>
                                </button>
                            )}
                        </NavLink>
                    </div>
                    <hr />
                    <div className="delivery-options">
                        <h3 className='delivery'>
                            Delivery options <i className="ri-truck-line"></i>
                        </h3>
                        <input type="text" placeholder='Enter Pincode' />
                        <p>Please enter your pincode to check delivery time & pay on delivery availability</p>
                        <p>100% Original Products</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 7 days returns and exchanges</p>
                        <h3 className='product'>
                            Product details <i className="ri-file-list-line"></i>
                        </h3>
                        <p>{product.ProductDetail}</p>
                        <p><b>Size & Fit</b> <span>{product.SizeFit}</span></p>
                        <p className='material'><b>Material & Care</b> <span>{product.MaterialCare.join(', ')}</span></p>
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

            {showCartPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closeCartPopup}>&times;</span>
                        <p>Product is already added to the cart.</p>
                    </div>
                </div>
            )}

            {showWishlistPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closeWishlistPopup}>&times;</span>
                        <p>Product is already added to the wishlist.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;
