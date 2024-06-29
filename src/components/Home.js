import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Home.css'
import Home_Slider from './Home_Slider'
import hero from '../assets/images/hero.jpeg'
import men from '../assets/images/men.jpg'
import women from '../assets/images/women.avif'
import kids from '../assets/images/kids.webp'
import sale from '../assets/images/sale.jpg'
import scvideo from '../assets/images/summer-collection.mp4'


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch('https://api-5e1h.onrender.com/clothe/all', {
      method: 'GET',
      headerds: {
        "Content-type": "application/json"
      }
    })

    const resData = await res.json()

    if (!resData) {
      console.log('error')
    } else {
      console.log(resData)
      setData(resData)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function selectRandomElements(array, n) {
    const newArray = array.slice();
    const randomElements = [];

    for (let i = 0; i < n && newArray.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * newArray.length);
      randomElements.push(newArray.splice(randomIndex, 1)[0]);
    }
    console.log(randomElements);
    return randomElements;
  }

  const randomArray = selectRandomElements(data, 8);

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        rel="stylesheet"
      />


      <div className="home_main-container">
        <div className="home-container">
          <div className="left">
            <img src={hero} alt="" />
          </div>
          <div className="right">
            <div className="text">
              <h1>Discover Your Signature Look</h1>
              <p>Everyone needs a good winter jacket.</p>
              <p>Find yours with our collection and more.</p>
            </div>
            <div className="btn">
              <NavLink><button>Log In</button></NavLink>
            </div>
          </div>
        </div>

        <Home_Slider />

        <div className="categories">
          <h2>Shop By Categories</h2>
          <div className="clothes">
            <NavLink to='/menclothing'>
              <div className="men-clothing">
                <div className="img">
                  <img src={men} alt="" />
                </div>
                <p>Men's Clothing</p>
              </div>
            </NavLink>
            <NavLink to='/womenclothing'>
              <div className="women-clothing">
                <div className="img">
                  <img src={women} alt="" />
                </div>
                <p>Women's Clothing</p>
              </div>
            </NavLink>
            <NavLink to='/kidsclothing'>
              <div className="kids-clothing">
                <div className="img">
                  <img src={kids} alt="" />
                </div>
                <p>Kid's Clothing</p>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="collections">
          <div className="images img1">
            <NavLink to='/newarrivals' state={{ headerText: 'New Arrivals' }}>
              <div className="text">
                <h3>New Arrivals</h3>
                <p>Collections <i className="ri-arrow-right-line"></i></p>
              </div>
            </NavLink>
          </div>
          <div className="images img2">
            <NavLink to='/newarrivals' state={{ headerText: 'Trending Now' }}>
              <div className="text">
                <h3>Trending Now</h3>
                <p>Collections <i className="ri-arrow-right-line"></i></p>
              </div>
            </NavLink>
          </div>
          <div className="images img3">
            <NavLink to='/newarrivals' state={{ headerText: 'Exclusive Collections' }}>
              <div className="text">
                <h3>Exclusive Collections</h3>
                <p>Collections <i className="ri-arrow-right-line"></i></p>
              </div>
            </NavLink>
          </div>
          <div className="images img4">
            <NavLink to='/newarrivals' state={{ headerText: 'Western Wear' }}>
              <div className="text">
                <h3>Western Wear</h3>
                <p>Collections <i className="ri-arrow-right-line"></i></p>
              </div>
            </NavLink>
          </div>


        </div>

        <div className="best-seller">
          <h1>Best Seller</h1>
          <div className="cards">
            {randomArray.map((res, id) => (
              <NavLink to={`/product/${res._id}`} key={id} state={{ product: res }}>
                <div className="card" key={id}>
                  <img src={res.Color[0].Images[0]} alt="" />
                  <p>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </p>
                  <p className='name'>{res.Name}</p>
                  <p className='sp'>₹ {res.SellingPrice} <span><del>₹{res.MRP}</del></span></p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="sales">
          <div className="first">
            <img src={sale} alt="" />
            <div className="text">
              <p>sale up to 35% off</p>
              <h1>HUNDREDS of New lower prices!</h1>
              <p>Hurry up!!! Summer's heat is on its way!</p>
              <p><NavLink to='/'>Shop Now <span><i class="ri-arrow-right-line"></i></span></NavLink></p>
            </div>
          </div>

          <div className="second">
            <div className="icons">
              <p><i class="ri-truck-line"></i></p>
              <p>Free Shipping</p>
              <p>Order Above ₹500</p>
            </div>
            <div className='icons'>
              <p><i class="ri-handbag-line"></i></p>
              <p>Money Back</p>
              <p>30 days guarantee</p>
            </div>
            <div className="icons">
              <p><i class="ri-lock-2-line"></i></p>
              <p>Secure Payments</p>
              <p>Secure by stripe</p>
            </div>
            <div className="icons">
              <p><i class="ri-phone-line"></i></p>
              <p>24/7 Support</p>
              <p>Phone and Email Support</p>
            </div>
          </div>
        </div>

        <div className="summer-collections">
          <p>PROMOTION</p>
          <h1>Summer Collections</h1>
          <p>Introducing the new Summer dresses</p>
          <video src={scvideo} autoPlay muted loop></video>
        </div>
      </div>

    </>
  )
}

export default Home
