import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/NewArrivals.css'
import Filters from './Filters'

const New = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch('https://api-k7vh.onrender.com/clothe/all', {
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

  const randomArray = selectRandomElements(data, 12);

  return (
    <>
      <Navbar />
      <div className="new_arrival-container">
        <div className="left-container">
          <h1>New Arrival</h1>
          <p>1267+ items</p>
          <Filters/>
        </div>

        <div className="right-container">
          <div className="cards">
            {randomArray.map((res, id) => (
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default New
