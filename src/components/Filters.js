import React, { useState, useEffect } from 'react';
import '../assets/css/Filters.css';

const Filters = ({ products, setFilteredProducts, setSelectedGender }) => {
    const [priceFilter, setPriceFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');

    useEffect(() => {
        let updatedProducts = [...products];

        if (priceFilter === 'lowToHigh') {
            updatedProducts.sort((a, b) => a.SellingPrice - b.SellingPrice);
        } else if (priceFilter === 'highToLow') {
            updatedProducts.sort((a, b) => b.SellingPrice - a.SellingPrice);
        }

        if (genderFilter) {
            updatedProducts = updatedProducts.filter(product => product.Gender === genderFilter);
        }else {
            setSelectedGender(''); // Reset selected gender
        }

        if (brandFilter) {
            updatedProducts = updatedProducts.filter(product => product.Brand === brandFilter);
        }

        setFilteredProducts(updatedProducts);
    }, [priceFilter, genderFilter, brandFilter, products, setFilteredProducts, setSelectedGender]);

    return (
        <div className="filters-container">
            <h2>Filters</h2>
            <h3>Price</h3>
            <input 
                type="radio" 
                name='price' 
                id='lowToHigh' 
                value='lowToHigh' 
                onChange={() => setPriceFilter('lowToHigh')} 
            /> 
            <label htmlFor="lowToHigh">Price : Low to High</label><br />
            <input 
                type="radio" 
                name='price' 
                id='highToLow' 
                value='highToLow' 
                onChange={() => setPriceFilter('highToLow')} 
            /> 
            <label htmlFor="highToLow">Price : High to Low</label>
            
            <h3>Gender</h3>
            <input 
                type="radio" 
                name='gender' 
                id='male' 
                value='Male' 
                onChange={() => setGenderFilter('Male')} 
            /> 
            <label htmlFor="male">Male</label><br />
            <input 
                type="radio" 
                name='gender' 
                id='female' 
                value='Female' 
                onChange={() => setGenderFilter('Female')} 
            /> 
            <label htmlFor="female">Female</label>
            
            <h3>Brand</h3>
            <input 
                type="radio" 
                name='brand' 
                id='brandA' 
                value='LEOTUDE' 
                onChange={() => setBrandFilter('LEOTUDE')} 
            /> 
            <label htmlFor="brandA">LEOTUDE</label><br />
            <input 
                type="radio" 
                name='brand' 
                id='brandB' 
                value='Urbano' 
                onChange={() => setBrandFilter('Urbano')} 
            /> 
            <label htmlFor="brandB">Urbano</label><br />
            <input 
                type="radio" 
                name='brand' 
                id='brandC' 
                value='Calvin Klein' 
                onChange={() => setBrandFilter('Calvin Klein')} 
            /> 
            <label htmlFor="brandC">Calvin Klein</label><br />
            <input 
                type="radio" 
                name='brand' 
                id='brandD' 
                value='DNMX' 
                onChange={() => setBrandFilter('DNMX')} 
            /> 
            <label htmlFor="brandD">DNMX</label><br />
            <input 
                type="radio" 
                name='brand' 
                id='brandE' 
                value='MAX' 
                onChange={() => setBrandFilter('MAX')} 
            /> 
            <label htmlFor="brandE">MAX</label>
        </div>
    );
}

export default Filters;

