import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './NewArrivals.css';
import ProductCard from '../ProductCard/ProductCard';

function NewArrivals() {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Fetch product data from your backend
        fetch('http://localhost:5000/api/new-arrivals') // Adjust the URL to your backend
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching new arrivals:', error));
    }, []);

    const NextArrow = ({ onClick }) => (
        <div className="slick-next" onClick={onClick} />
    );

    const PrevArrow = ({ onClick }) => (
        <div className="slick-prev" onClick={onClick} />
    );

    const settings = {
        dots: true, // Optional, adds navigation dots at the bottom
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Number of items to show at once
        slidesToScroll: 1,
        arrows: true, // Keep the existing arrows
        swipe: true, // Enable swiping
        draggable: true, // Enable drag and drop
        responsive: [
            {
                breakpoint: 768, // Adjust for mobile responsiveness
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
            // You can add more breakpoints here
        ]
    };

    const progressBarWidth = products.length > 3 ? (currentSlide / (products.length - 3)) * 100 : 100;

    return (
        <div className="new-arrivals-section">
            <h2>New Arrivals</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={{ 
                            ...product, 
                            // Select the last image from the images array
                            image: product.images && product.images.length > 0 ? product.images[product.images.length - 1] : null 
                        }} 
                    />
                ))}
            </Slider>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
            </div>
        </div>
    );
}

export default NewArrivals;
