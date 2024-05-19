// src/components/WomensProducts.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './MensProducts.css'; // CSS file for styling
import Navbar from '../Navbar/Navbar';

const MensProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/men') // Adjust the URL to your backend
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching men\'s products:', error));
    }, []);

    return (
        <div>
        <Navbar darkTheme={true} />
            <div className="mens-products">
                <h1>Men's Collection</h1>
                <div className="products-grid">
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
                </div>
            </div>
        </div>
    );
};

export default MensProducts;