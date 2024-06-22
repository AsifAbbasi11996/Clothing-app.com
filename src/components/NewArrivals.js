import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/NewArrivals.css'

const NewArrivals = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch('https://codify-api-541e.onrender.com/clothe/all', {
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
      <Navbar />
      <div className="new_arrival-container">
        <div className="left-container">
          <h1>New Arrival</h1>
          <p>1267+ items</p>
          <div className="filters-container">
            <h2>Filters</h2>
            <h3>Price</h3>
            <input type="radio" name='price' /> <label htmlFor="">Price : Low to High</label><br />
            <input type="radio" name='price' /> <label htmlFor="">Price : High to Low</label>
            <h3>Gender</h3>
            <input type="radio" name='gender' id='male' /> <label htmlFor="">Male</label>
            <input type="radio" name='gender' id='female' /> <label htmlFor="">Female</label>
            <h3>Brand</h3>
            <input type="radio" name='brand' /><label htmlFor="">Brand A</label>
            <input type="radio" name='brand' /><label htmlFor="">Brand B</label>
            <input type="radio" name='brand' /><label htmlFor="">Brand C</label>
            <input type="radio" name='brand' /><label htmlFor="">Brand D</label>
            <input type="radio" name='brand' /><label htmlFor="">Brand E</label>
          </div>
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

export default NewArrivals
