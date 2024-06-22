import React, { useState, useEffect } from 'react';
import '../assets/css/PriceDetails.css';

const PriceDetails = () => {
    const [resData, setResData] = useState([]);
    const [totalMRP, setTotalMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [platformFee, setPlatformFee] = useState(20);
    const [shippingFee, setShippingFee] = useState(0);

    const getData = async () => {
        const res = await fetch("https://codify-api-541e.onrender.com/cloth/all", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        });
        const data = await res.json();

        if (res.status === 400 || !data) {
            console.log("Error while fetching data");
        } else {
            setResData(data);
            const totalMRP = data.reduce((acc, item) => acc + item.MRP, 0);
            const discount = data.reduce((acc, item) => acc + (item.MRP - item.SellingPrice), 0);
            setTotalMRP(totalMRP);
            setDiscount(discount);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const totalAmount = totalMRP - discount + platformFee + shippingFee;

    return (
        <div className="price-details">
            <h3>PRICE DETAILS ({resData.length} Items)</h3>
            <div className="price-item">
                <span>Total MRP</span>
                <span>₹{totalMRP}</span>
            </div>
            <div className="price-item">
                <span>Discount on MRP</span>
                <span className="discountt">-₹{discount}</span>
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
            <button className="continue-btn" disabled>CONTINUE</button>
            <p className="address-warning">Please enter a delivery address to continue.</p>
        </div>
    );
};

export default PriceDetails;