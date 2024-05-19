import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
    // Placeholder image URL - replace with the path to your own placeholder image
    return (
        <Link to={`/product/${product.id}`} className="product-card-link">
            <div className="product-card">
                <img 
                    src={product.image} 
                    alt={product.name} 
                />
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <span>${product.price.toFixed(2)}</span>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
