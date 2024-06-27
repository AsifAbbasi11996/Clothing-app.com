import React, { useState, useEffect } from 'react';
import '../assets/css/Filters.css';

const Filters = ({ products, setFilteredProducts, setSelectedCategory, showCategoryFilter = false }) => {
    const [priceFilter, setPriceFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brands, setBrands] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedRange, setSelectedRange] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const uniqueBrands = [...new Set(products.map(product => product.Brand))];
        setBrands(uniqueBrands);
    }, [products]);

    useEffect(() => {
        let updatedProducts = [...products];

        if (priceFilter === 'lowToHigh') {
            updatedProducts.sort((a, b) => a.SellingPrice - b.SellingPrice);
        } else if (priceFilter === 'highToLow') {
            updatedProducts.sort((a, b) => b.SellingPrice - a.SellingPrice);
        }

        if (categoryFilter) {
            updatedProducts = updatedProducts.filter(product => product.Gender === categoryFilter);
            const uniqueBrands = [...new Set(updatedProducts.map(product => product.Brand))];
            setBrands(uniqueBrands);
        } else {
            const uniqueBrands = [...new Set(products.map(product => product.Brand))];
            setBrands(uniqueBrands);
        }

        if (brandFilter) {
            updatedProducts = updatedProducts.filter(product => product.Brand === brandFilter);
        }

        if (minPrice && maxPrice) {
            updatedProducts = updatedProducts.filter(product =>
                product.SellingPrice >= parseInt(minPrice) && product.SellingPrice <= parseInt(maxPrice)
            );
            setSelectedRange(`₹${minPrice} - ₹${maxPrice}`);
        } else if (minPrice) {
            updatedProducts = updatedProducts.filter(product => product.SellingPrice >= parseInt(minPrice));
            setSelectedRange(`Min ₹${minPrice}`);
        } else if (maxPrice) {
            updatedProducts = updatedProducts.filter(product => product.SellingPrice <= parseInt(maxPrice));
            setSelectedRange(`Max ₹${maxPrice}`);
        } else {
            setSelectedRange('');
        }

        setFilteredProducts(updatedProducts);
    }, [priceFilter, brandFilter, categoryFilter, products, setFilteredProducts, minPrice, maxPrice]);

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const toggleFilters = () => {
        setIsOpen(!isOpen);
    };

    const closeFilters = () => {
        setIsOpen(false);
    };

    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <button className='filterbtn' onClick={toggleFilters}>
                Filters <span><i className="ri-arrow-right-s-line"></i></span>
            </button>
            <div className='flex'>
                <div className={`filters-container ${isOpen ? 'open' : ''}`}>
                    <div className="close" onClick={closeFilters}>
                        <i className="ri-close-line"></i>
                    </div>
                    <h2>Filters</h2>
                    <h3>Price</h3>
                    <div className="input">
                        <input
                            type="radio"
                            name='price'
                            id='lowToHigh'
                            value='lowToHigh'
                            onChange={() => setPriceFilter('lowToHigh')}
                        />
                        <label htmlFor="lowToHigh">Price : Low to High</label><br />
                    </div>
                    <div className="input">
                        <input
                            type="radio"
                            name='price'
                            id='highToLow'
                            value='highToLow'
                            onChange={() => setPriceFilter('highToLow')}
                        />
                        <label htmlFor="highToLow">Price : High to Low</label><br />
                    </div>

                    <div className="price-range">
                        <label htmlFor="PriceRange">Price Range</label><br />
                        <input
                            type="range"
                            min="0"
                            max="2000"
                            step="500"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                        <span>Min: ₹{minPrice}</span>
                        <input
                            type="range"
                            min="0"
                            max="2000"
                            step="500"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                        <span>Max: ₹{maxPrice}</span>
                    </div>

                    <div className="selected-range">
                        {selectedRange && <p>Selected Range : {selectedRange}</p>}
                    </div>

                    {showCategoryFilter && (
                        <>
                            <h3>Category</h3>
                            <div className="input">
                                <input
                                    type="radio"
                                    name='category'
                                    id='boys'
                                    value='Boys'
                                    onChange={() => setCategoryFilter('Boys')}
                                />
                                <label htmlFor="boys">Boys</label><br />
                            </div>

                            <div className="input">
                                <input
                                    type="radio"
                                    name='category'
                                    id='girls'
                                    value='Girls'
                                    onChange={() => setCategoryFilter('Girls')}
                                />
                                <label htmlFor="girls">Girls</label>
                            </div>
                        </>
                    )}

                    <h3>Brand</h3>
                    {brands.map((brand, index) => (
                        <div className='input' key={index}>
                            <input
                                type="radio"
                                name='brand'
                                id={`brand${index}`}
                                value={brand}
                                onChange={() => setBrandFilter(brand)}
                            />
                            <label htmlFor={`brand${index}`}>{brand}</label><br />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Filters;
