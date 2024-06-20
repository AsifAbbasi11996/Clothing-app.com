import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="main-container">
        <div className="navbar-container">

          <div className="menu-bar" onClick={handleClick}>
            {click ? (
              <i class="ri-close-line"></i>
            ) : (
              <i class="ri-menu-line"></i>
            )}
          </div>

          <div className="logo">
            <NavLink to='/'><img src={logo} alt="" /></NavLink>
          </div>

          <div className="lists">
            <ul className={click ? 'nav-links active' : 'nav-links'}>
              <li>
                <NavLink to='/' className="nav-link"
                  activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to='/shop' className="nav-link" activeClassName="active">Shop</NavLink>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <i class="ri-arrow-down-s-line"></i>
                </div>
                {(
                  isOpen ?
                    <ul className='dropdown'>
                      <li><NavLink to='/Aries'>Aries</NavLink></li>
                      <li><NavLink to='/Taurus'>Taurus</NavLink></li>
                      <li><NavLink to='/Gemini'>Gemini</NavLink></li>
                      <li><NavLink to='/Cancer'>Cancer</NavLink></li>
                    </ul>
                    : null
                )}
              </li>
              <li>
                <NavLink to='/product' className="nav-link" activeClassName="active">Product</NavLink>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <i class="ri-arrow-down-s-line"></i>
                </div>
                {(
                  isOpen ?
                    <ul className='dropdown'>
                      <li><NavLink to='/Aries'>Aries</NavLink></li>
                      <li><NavLink to='/Taurus'>Taurus</NavLink></li>
                      <li><NavLink to='/Gemini'>Gemini</NavLink></li>
                      <li><NavLink to='/Cancer'>Cancer</NavLink></li>
                    </ul>
                    : null
                )}
              </li>
              <li>
                <NavLink to='/contact' className="nav-link" activeClassName="active">Contact Us</NavLink>
              </li>


            </ul>
          </div>

          <div className="three-icons">
            <div className="search-bar">
              <i class="ri-search-line"></i>
            </div>
            <div className="account">
              <i class="ri-account-circle-line"></i>
            </div>
            <div className="add-to-cart">
              <i class="ri-shopping-cart-line"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
