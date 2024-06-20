import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/Home_Slider.css';

const Home_Slider = () => {
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const getData = async () => {
        const response = await fetch('https://codify-api-541e.onrender.com/clothe/all', {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        });

        const responsedata = await response.json();

        if (!responsedata) {
            console.log('error');
        } else {
            console.log(responsedata);
            setData(responsedata);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
            setCurrentSlide(index);
        };

        const slider = sliderRef.current;
        slider.addEventListener('scroll', handleScroll);

        return () => {
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDotClick = (index) => {
        const slider = sliderRef.current;
        slider.scrollLeft = index * slider.clientWidth;
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="home_slider-container">
                <h2>Just In</h2>
                <div className="slider-container" ref={sliderRef}>
                    <div className="cards-container">
                        {data.map((response, id) => (
                            <div className="card" key={id}>
                                <img src={response.Color[0].Images[0]} alt="" />
                                <p className='name'>{response.Name}</p>
                                <p className='sp'>₹ {response.SellingPrice}</p>
                                <p className='mrp'><del>₹ {response.MRP}</del></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dot-indicators">
                    {Array(Math.ceil(data.length / 5)).fill().map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home_Slider;
