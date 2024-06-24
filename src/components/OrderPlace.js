import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/OrderPlace.css'
import PriceDetails from './PriceDetails'


const OrderPlace = () => {
    return (
        <>
            <Navbar />
            <div className="orderplace-container">
                <div className="progress">
                    <p>Bag <span><i class="ri-checkbox-circle-fill"></i></span></p>
                    <p>Address<span><i class="ri-checkbox-circle-fill"></i></span></p>
                    <p>Payment<span><i class="ri-checkbox-circle-fill"></i></span></p>
                </div>

                <div className="container">
                    <div className="left">
                        <div className="select">
                            <p>Deliver to : <span>pincode</span></p>
                            <p>change address</p>
                        </div>
                        <div className="watchlist">
                            <p><input type="checkbox" /> 2/2 items selected</p>
                            <p><NavLink>remove</NavLink> <NavLink>move to watchlist</NavLink></p>
                        </div>

                        <div className="items">
                            <div className="item">
                                <div className="img">
                                    <img src="" alt="" />
                                </div>
                                <div className="details">
                                    <p><span>Brand</span></p>
                                    <p>Cloth name</p>
                                    <p><span className='size'>Size :
                                        <select name="" id="">
                                            <option value="">XS</option>
                                            <option value="">S</option>
                                            <option value="">M</option>
                                            <option value="">L</option>
                                            <option value="">XL</option>
                                            <option value="">2XL</option>
                                        </select>
                                    </span>
                                        <span className='qty'>Qty :
                                            <select name="" id="">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p><span>₹500</span></p>
                                    <p><span><i class="ri-loop-left-line"></i> 14 days </span>return available</p>
                                    <p><i class="ri-check-line"></i>Delivery between <span>14 Jun - 20 Jun</span></p>
                                </div>
                            </div>
                            <div className="close">
                                <i class="ri-close-line"></i>
                            </div>

                        </div>
                    </div>

                    <div className="right">
                        <PriceDetails />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderPlace
