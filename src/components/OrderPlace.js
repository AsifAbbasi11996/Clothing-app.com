import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/OrderPlace.css';
import PriceDetails from './PriceDetails';

const OrderPlace = () => {
    const location = useLocation();
    const { product, selectedImage } = location.state || {};
    const [selectedSize, setSelectedSize] = useState(product?.Sizes[0]?.Length || '');
    const [quantity, setQuantity] = useState(1);
    const [isItemVisible, setIsItemVisible] = useState(true);
    const [deliveryDetails, setDeliveryDetails] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    if (!product) {
        return <p>Product data not found.</p>;
    }

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleCloseClick = () => {
        setIsItemVisible(false);
    };

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };

    const calculateDeliveryDates = () => {
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() + 1);
        const endDate = new Date(currentDate);
        endDate.setDate(endDate.getDate() + 6);

        return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    };

    return (
        <>
         
            <div className="orderplace-container">
                <div className="progress">
                    <p className='bag'>Bag <span><i className="ri-checkbox-circle-fill"></i></span></p>
                    <p>Address<span><i className="ri-checkbox-circle-fill"></i></span></p>
                    <p>Payment<span><i className="ri-checkbox-circle-fill"></i></span></p>
                </div>

                <div className="container">
                    <div className="left">
                        <div className="select">
                            <p>Deliver to : <span>pincode</span></p>
                            <p>change address</p>
                        </div>
                        {isItemVisible && (
                            <>
                                <div className="watchlist">
                                    <p><input type="checkbox" /> <span>{quantity}/1 items selected</span></p>
                                </div>
                                <div className="items">
                                    <div className="item">
                                        <div className="img">
                                            <img src={selectedImage} alt="" />
                                        </div>
                                        <div className="details">
                                            <p><span>{product.Brand}</span></p>
                                            <p className='name'>{product.Name}</p>
                                            <p>
                                                <span className='size'>Size :
                                                    <select value={selectedSize} onChange={handleSizeChange}>
                                                        {product.Sizes.map((size, index) => (
                                                            <option key={index} value={size.Length}>
                                                                {size.Length}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </span>
                                                <span className='qty'>Qty :
                                                    <select value={quantity} onChange={handleQuantityChange}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </span>
                                            </p>
                                            <p>
                                                <span><b>₹{product.SellingPrice}</b></span>
                                                <span className='mrp'><del>MRP : ₹{product.MRP}</del></span>
                                            </p>
                                            <p><span><i className="ri-loop-left-line"></i> 14 days </span>return available</p>
                                            <p><i className="ri-check-line"></i>Delivery between <span>{calculateDeliveryDates()}</span></p>
                                        </div>
                                    </div>
                                    <div className="close" onClick={handleCloseClick}>
                                        <i className="ri-close-line"></i>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="right">
                        <PriceDetails product={isItemVisible ? product : null} quantity={isItemVisible ? quantity : 0} />
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default OrderPlace;
