import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/NewArrivals.css';
import Filters from './Filters';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-k7vh.onrender.com/clothe/all');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="new_arrival-container">
        <div className="left-container">
          <h1>New Arrivals</h1>
          <p>{products.length}+ items</p>
          <Filters products={products} setFilteredProducts={setFilteredProducts} setSelectedGender={setSelectedGender} />
        </div>

        <div className="right-container">
          <div className="products-container">
            {filteredProducts.map((product) => (
              <NavLink key={product._id} to={`/product/${product._id}`} state={{ product }}>
                <div className="product-card">
                  <div className="image">
                    <img src={product.Color[0].Images[0]} alt="" />
                  </div>
                  <div className="details">
                    <p>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </p>
                    <p className='name'>{product.Name}</p>
                    <p className='brand'>{product.Brand}</p>
                    <p className='sp'>Selling Price : {product.SellingPrice}</p>
                    <p className='mrp'>MRP : <del>{product.MRP}</del></p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewArrivals;