import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Clothing.css';
import Filters from './Filters';

const NewArrivals = () => {
  const location = useLocation();
  const { headerText } = location.state || { headerText: 'New Arrivals' };

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-5e1h.onrender.com/clothe/all');
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

      <div className="clothing-container">
        <div className="filter">
          <h1>{headerText}</h1>
          <p>{products.length}+ items</p>
          <Filters products={products} setFilteredProducts={setFilteredProducts} setSelectedGender={setSelectedGender} />
        </div>

        <div className="container">
          <div className="products-container">
            {filteredProducts.map((product) => (
              <NavLink key={product._id} to={`/product/${product._id}`} state={{ product }}>
                <div className="product-card">
                  <div className="img">
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

    </>
  );
};

export default NewArrivals;