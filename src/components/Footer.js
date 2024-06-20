import React from 'react'
import '../assets/css/Footer.css'
import { NavLink } from 'react-router-dom'
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.png'
import paypal from '../assets/images/paypal.png'

const Footer = () => {
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <footer>
                <div className="footer-container">
                    <div className="content">
                        <div className="first">
                            <h2>Logo</h2>
                            <p>zdcv rweb</p>
                            <p>gfnftkyug</p>
                            <p>x vrdgbn</p>
                            <p>5468444164</p>
                            <div className="icons">
                                <NavLink><i class="ri-instagram-fill"></i></NavLink>
                                <NavLink><i class="ri-facebook-fill"></i></NavLink>
                                <NavLink><i class="ri-youtube-fill"></i></NavLink>
                            </div>
                        </div>
                        <div className="second">
                            <h3>Page</h3>
                            <p><NavLink>Home</NavLink></p>
                            <p><NavLink>Shop</NavLink></p>
                            <p><NavLink>Product</NavLink></p>
                            <p><NavLink>Contact Us</NavLink></p>
                        </div>
                        <div className="third">
                            <h3>Info</h3>
                            <p><NavLink>Shopping Policy</NavLink></p>
                            <p><NavLink>Return & Refund</NavLink></p>
                            <p><NavLink>Support</NavLink></p>
                            <p><NavLink>FAQs</NavLink></p>
                        </div>
                    </div>

                    <hr />

                    <div className="footer-bottom">
                        <div className="copyright">
                            <p>Copyright &copy; 2024 Logo. All rights reserved</p>
                            <p><NavLink>Privacy Policy</NavLink></p>
                            <p><NavLink>Terms & Conditions</NavLink></p>
                        </div>
                        <div className="payment-methods">
                            <div className="img"><img src={visa} alt="" /></div>
                            <div className="img"><img src={paypal} alt="" /></div>
                            <div className="img"><img src={mastercard} alt="" /></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
