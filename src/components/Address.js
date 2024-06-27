// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import '../assets/css/Address.css'
// import PriceDetails1 from './PriceDetails1'

// const Address = () => {
//     const location = useLocation();
//     const { product } = location.state || {};
//     const [selectedImage, setSelectedImage] = useState(product?.Color[0].Images[0]);

//     if (!product) {
//         return <p>Product data not found.</p>;
//     }

//     const formatDate = (date) => {
//         const options = { day: 'numeric', month: 'short' };
//         return date.toLocaleDateString('en-US', options);
//     };

//     const calculateDeliveryDates = () => {
//         const currentDate = new Date();
//         const startDate = new Date(currentDate);
//         startDate.setDate(startDate.getDate() + 1);
//         const endDate = new Date(currentDate);
//         endDate.setDate(endDate.getDate() + 6);

//         return `${formatDate(startDate)} - ${formatDate(endDate)}`;
//     };
//     return (
//         <>
//             <Navbar />
//             <div className="address-container">
//                 <div className="progress">
//                     <p className='bag'>Bag <span><i class="ri-checkbox-circle-fill"></i></span></p>
//                     <p className='address'>Address<span><i class="ri-checkbox-circle-fill"></i></span></p>
//                     <p>Payment<span><i class="ri-checkbox-circle-fill"></i></span></p>
//                 </div>
//                 <div className="container">
//                     <div className="left">
//                         <div className="select">
//                             <p>Select Delivery Address</p>
//                             <p>add new address</p>
//                         </div>

//                         <div className="default_address">
//                             <div className="text">
//                                 <p>Default Address</p>
//                             </div>
//                             <div className="box">
//                                 <p className='flex'><input type="radio" /> <span>office</span></p>
//                                 <p>123, ABC Street, XYZ City, 123456</p>
//                                 <p>Mobile : 7786845354</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="right">
//                         <div className="delivery_estimates">
//                             <img src={selectedImage} alt="" />
//                             <p>Delivery between <span>{calculateDeliveryDates()}</span></p>
//                         </div>
//                         <PriceDetails1/>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Address


import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/Address.css';
import PriceDetails1 from './PriceDetails1';

const Address = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [selectedImage, setSelectedImage] = useState(product?.Color[0].Images[0]);

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

    return (
        <>
            <Navbar />
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
                            <p>add new address</p>
                        </div>

                        <div className="default_address">
                            <div className="text">
                                <p>Default Address</p>
                            </div>
                            <div className="box">
                                <p className='flex'><input type="radio" /> <span>office</span></p>
                                <p>123, ABC Street, XYZ City, 123456</p>
                                <p>Mobile : 7786845354</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="delivery_estimates">
                            <img src={selectedImage} alt="" />
                            <p>Delivery between <span>{calculateDeliveryDates()}</span></p>
                        </div>
                        <PriceDetails1 product={product} quantity={1} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Address;
