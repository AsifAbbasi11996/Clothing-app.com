import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/css/NewArrivals.css'
import Filters from './Filters'

const NewArrivals = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://api-k7vh.onrender.com/clothe/all')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);


  return (
    <>
      <Navbar />
      <div className="new_arrival-container">
        <div className="left-container">
          <h1>New Arrivals</h1>
          <p>{products.length}+ items</p>
          <Filters products={products} setFilteredProducts={setFilteredProducts} />
        </div>

        <div className="right-container">
          <div className="products-container">
            {filteredProducts.map(product => (
              <div key={product._id} className="product-card">
                <img src={product.Color[0].Images[0]} alt="" />
                <p>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                </p>
                <p className='name'>{product.Name}</p>
                <p className='brand'>{product.Brand}</p>
                <p className='gender'>{product.Gender}</p>
                <p className='sp'>Selling Price : {product.SellingPrice}</p>
                <p className='mrp'>MRP : <del>{product.MRP}</del></p>
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
