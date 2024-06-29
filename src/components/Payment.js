import React, { useEffect } from 'react'
import '../assets/css/Payment.css'
import PriceDetails from './PriceDetails'

const Payment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="payment-container">
                <div className="progress">
                    <p>Bag <span><i class="ri-checkbox-circle-fill"></i></span></p>
                    <p>Address<span><i class="ri-checkbox-circle-fill"></i></span></p>
                    <p>Payment<span><i class="ri-checkbox-circle-fill"></i></span></p>
                </div>
                <div className="container">
                    <div className="left">
                        <h2>Choose Payment Mode</h2>
                    </div>

                    <div className="right">
                        <PriceDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
