import React from 'react';
import './Cart.css'; // Ensure this CSS file is correctly linked

const Cart = ({ cartItems, setIsCartVisible, isCartVisible , updateQuantity, removeFromCart }) => {
    console.log('rendered')
    return (
        <div className={`cart-popup ${isCartVisible ? 'active' : ''}`}>
            <button onClick={() => setIsCartVisible(false)} className="cart-close-button">✕</button>
            
            <h2 className="cart-title">Your Cart</h2>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">${item.price.toFixed(2)}</p>
                            <div className="quantity-control">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="remove-item">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-footer">
                <div className="total-price">
                    Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </div>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;

