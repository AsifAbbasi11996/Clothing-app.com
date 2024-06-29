import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/Address.css';
import PriceDetails1 from './PriceDetails1';

const Address = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const { product } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(product?.Color[0].Images[0]);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        type: '',
        street: '',
        city: '',
        zip: '',
        mobile: '',
    });

    if (!product) {
        return <p>Product data not found.</p>;
    }

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save the new address
        console.log('New Address:', newAddress);
        setShowForm(false);
    };

    return (
        <>
         <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <div className="address-container">
                <div className="progress">
                    <p className='bag'>Bag <span><i className="ri-checkbox-circle-fill"></i></span></p>
                    <p className='address'>Address<span><i className="ri-checkbox-circle-fill"></i></span></p>
                    <p>Payment<span><i className="ri-checkbox-circle-fill"></i></span></p>
                </div>
                <div className="container">
                    <div className="left">
                        <div className="select">
                            <p>Select Delivery Address</p>
                            <button onClick={() => setShowForm(true)}>Add New Address</button>
                        </div>

                        {showForm && (
                            <div className="address-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-header">
                                        <p>Add New Address</p>
                                        <span className="close-icon" onClick={() => setShowForm(false)}><i className="ri-close-line"></i></span>
                                    </div>
                                    <label>
                                        Address Line* :
                                        <input type="text" name="type" value={newAddress.type} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        Street* :
                                        <input type="text" name="street" value={newAddress.street} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        City* :
                                        <input type="text" name="city" value={newAddress.city} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        ZIP Code* :
                                        <input type="text" name="zip" value={newAddress.zip} onChange={handleInputChange} required />
                                    </label>
                                    <label>
                                        Mobile no* :
                                        <input type="text" name="mobile" value={newAddress.mobile} onChange={handleInputChange} required />
                                    </label>
                                    <button type="submit">Save Address</button>
                                </form>
                            </div>
                        )}

                        <div className="default_address">
                            <div className="text">
                                <p>Default Address</p>
                            </div>
                            <div className="box">
                                <p className='flex'><input type="radio" /> <span>Office</span></p>
                                <p>123, ABC Street, XYZ City, 123456</p>
                                <p>Mobile: 7786845354</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="delivery_estimates">
                            <img src={selectedImage} alt="Product" />
                            <p>Delivery between <span>{calculateDeliveryDates()}</span></p>
                        </div>
                        <PriceDetails1 product={product} quantity={1} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;
