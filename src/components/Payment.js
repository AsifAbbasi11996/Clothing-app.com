import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/Payment.css'
import men from '../assets/images/men.jpg'
import PriceDetails from './PriceDetails'

const Payment = () => {
    return (
        <>
            <Navbar />
            <div className="payment-container">
                <div className="progress">
                    <p>Bag <span><i class="ri-checkbox-circle-fill"></i></span></p>
                    <p>Address<span><i class="ri-checkbox-circle-fill"></i></span></p>
                    <p>Payment<span><i class="ri-checkbox-circle-fill"></i></span></p>
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
                                <p><input type="radio" /> <span>office</span></p>
                                <p>123, ABC Street, XYZ City, 123456</p>
                                <p>Mobile : 7786845354</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="delivery_estimates">
                            <img src={men} alt="" />
                            <p>Delivery between <span>14 JUN - 20 JUN</span></p>
                        </div>
                        <PriceDetails/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment
