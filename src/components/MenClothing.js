import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Filters from './Filters';
import '../assets/css/Clothing.css';

const MenClothing = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedGender, setSelectedGender] = useState('Male');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-5e1h.onrender.com/clothe/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                const maleProducts = data.filter(product => product.Gender === 'Male');
                setProducts(maleProducts);
                setFilteredProducts(maleProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="clothing-container">
                <div className="filter">
                    <h1>Men's Clothing</h1>
                    <p>{filteredProducts.length}+ items</p>
                    <Filters
                        products={products}
                        setFilteredProducts={setFilteredProducts}
                        setSelectedGender={setSelectedGender}
                        showGenderFilter={false}
                    />
                </div>
                <div className="container">
                    <div className="products-container">
                        {filteredProducts.map(product => (
                            <NavLink key={product._id} to={`/product/${product._id}`} state={{ product }}>
                                <div className="product-card">
                                    <div className="img">
                                        <img src={product.Color[0].Images[0]} alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>{product.Name}</h3>
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
}

export default MenClothing;

