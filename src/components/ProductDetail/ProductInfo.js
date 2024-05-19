
import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product, addToCart }) => {
    const [showComposition, setShowComposition] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const [isSizeSelected, setSizeSelected] = useState(false);
    
    const toggleSizeSelection = () => {
        setSizeSelected(!isSizeSelected);
    };

    const handleAddToCart = () => {
        if (!isSizeSelected) {
            // If no size is selected, you can alert the user or highlight the size selection
            alert('Please select a size before adding to bag!');
            return; // Exit early if no size is selected
        }

        // If size is selected, log the product details to the console
        const productToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0], // Make sure product object contains 'image' key
            size: isSizeSelected ? 'STANDARD' : null, 
          };

        addToCart(productToAdd);
    };


    return (
        <div className="product-info">
            <h1>{product.name}</h1>
            <h2 className="price">{product.price}</h2>
            <p className="reference">REF. {product.ref}</p>
            <p className="color">{product.color}</p>
            <p className="size-selection">{product.size}</p>

            <div className="size-section">
                <div className="size-section-top">
                    <h2>SIZE</h2>
                    <p className="size">Size guide</p>
                </div>
                <button 
                    className={`size-option ${isSizeSelected ? 'selected' : ''}`} 
                    onClick={toggleSizeSelection}
                >
                    STANDARD
                </button>
                {!isSizeSelected && <span className="size-warning">*</span>}
            </div>

            <div className="product-detail-buttons">
                <button 
                    className="add-to-bag"
                    onClick={handleAddToCart}
                >
                    ADD TO BAG
                </button>
                {/* <button className="wishlist"><span>❤️</span></button> */}
            </div>
            
            <div className="collapsibles">
                <div className="collapsible-section">
                    <h3 onClick={() => setShowComposition(!showComposition)}>
                        COMPOSITION, ORIGIN AND CARE GUIDELINES
                        <span>{showComposition ? '▲' : '▼'}</span>
                    </h3>
                    {showComposition && <p>{product.composition}</p>}
                </div>
                
                <div className="collapsible-section">
                    <h3 onClick={() => setShowDescription(!showDescription)}>
                        DESCRIPTION
                        <span>{showDescription ? '▲' : '▼'}</span>
                    </h3>
                    {showDescription && <p>{product.description}</p>}
                </div>
            </div>

            <div className="footer-options">
                <p>🚚 Delivery and returns</p>
                <p>📍 Store availability</p>
                <p>🔗 Share</p>
            </div>
        </div>
    );
}

export default ProductInfo;
