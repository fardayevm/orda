import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import ProductInfo from './ProductInfo';
import Navbar from '../Navbar/Navbar';

const ProductDetail = ({ addToCart, onBagIconClick, cartItemCount }) => { 
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`); // Adjust the URL to your backend endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <Navbar darkTheme={true} onBagIconClick={onBagIconClick} cartItemCount={cartItemCount} />
            <div className="product-detail-container">
                {product && (
                    <>
                        <div className="image-gallery">
                            {product.images.map((image, index) => (
                                <img key={index} src={image} alt={product.name} />
                            ))}
                        </div>
                        <div className="product-info">
                            <ProductInfo product={product} addToCart={ addToCart } />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
