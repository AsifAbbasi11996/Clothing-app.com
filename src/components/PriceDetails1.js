import React, { useEffect, useState } from 'react';
import '../assets/css/PriceDetails.css';

const PriceDetails1 = ({ product, quantity }) => {
    const [totalMRP, setTotalMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [platformFee, setPlatformFee] = useState(20);
    const [shippingFee, setShippingFee] = useState(0);

    useEffect(() => {
        if (product) {
            const totalMRP = product.MRP * quantity;
            const discount = (product.MRP - product.SellingPrice) * quantity;
            setTotalMRP(totalMRP);
            setDiscount(discount);
        } else {
            setTotalMRP(0);
            setDiscount(0);
        }
    }, [product, quantity]);

    const totalAmount = totalMRP - discount + platformFee + shippingFee;

    return (
        <div className="price-details">
            <h3>PRICE DETAILS ({product ? 1 : 0} Items)</h3>
            <div className="price-item">
                <span>Total MRP</span>
                <span>₹{totalMRP}</span>
            </div>
            <div className="price-item">
                <span>Discount on MRP</span>
                <span className="discount">-₹{discount}</span>
            </div>
            <div className="price-item">
                <span>Platform Fee <span className="know-more">Know More</span></span>
                <span>₹{platformFee}</span>
            </div>
            <div className="price-item">
                <span>Shipping Fee <span className="know-more">Know More</span></span>
                <span className="free">FREE</span>
            </div>
            <div className="total-amount">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
            </div>
            <button className="continue-btn" disabled={!product}>CONTINUE</button>
            <p className="address-warning">Please enter a delivery address to continue.</p>
        </div>
    );
};

export default PriceDetails1;
