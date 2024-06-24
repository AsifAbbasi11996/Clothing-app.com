import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Filters from './Filters';
import '../assets/css/MenClothing.css';

const MenClothing = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedGender, setSelectedGender] = useState(''); 

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
            <div className="men_clothing-container">
                <div className="filter">
                    {/* <h1>Men 's Clothing</h1>
                    <p>{products.length}+ items</p>
                    <Filters products={products} setFilteredProducts={setFilteredProducts} /> */}

                    <h1>{selectedGender === 'Male' ? "Men's Clothing" : selectedGender === 'Female' ? "Women's Clothing" : "Clothing"}</h1>
                    <p>{filteredProducts.length}+ items</p> {/* Use filteredProducts to show filtered count */}
                    <Filters
                        products={products}
                        setFilteredProducts={setFilteredProducts}
                        setSelectedGender={setSelectedGender} // Pass the setSelectedGender callback
                    />
                </div>
                <div className="container">
                    <h1>Clothing</h1>
                    <div className="products-container">
                        {filteredProducts.map(product => (
                            <div key={product._id} className="product-card">
                                <img src={product.Color[0].Images[0]} alt="" />
                                <h3>{product.Name}</h3>
                                <p>{product.Brand}</p>
                                <p>{product.Gender}</p>
                                <p>Selling Price : {product.SellingPrice}</p>
                                <p>MRP : <del>{product.MRP}</del></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MenClothing;
