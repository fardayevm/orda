import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import IntroPage from './components/IntroPage';
import Login from './components/Login/Login';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import WomensProducts from './components/WomensProducts/WomensProducts';
import MensProducts from './components/MensProducts/MensProducts';
// import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const addToCart = (product) => {
    // Add logic to prevent adding duplicate items or increment quantity
    setCart(currentCart => {
      console.log("Adding product:", product);
      console.log("Current cart:", currentCart);
      // Check if the product is already in the cart
      const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
      console.log("Existing item index:", existingItemIndex);

      if (existingItemIndex > -1) {
        // Update the quantity of the existing product
        return currentCart.map((item, index) => 
            index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
          // If it doesn't exist, add the new product with quantity 1
          return [...currentCart, { ...product, quantity: 1 }];
      }
    });
    setIsCartVisible(true); // Show the cart when an item is added
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(currentCart => {
        return currentCart.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: Math.max(newQuantity, 0) }; // Ensures quantity doesn't go below 0
            }
            return item;
        }).filter(item => item.quantity > 0); // Removes items with 0 quantity
    });
  };

  const removeFromCart = (itemId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== itemId));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
        {isCartVisible && <Cart cartItems={cart} 
                                setIsCartVisible={setIsCartVisible} 
                                isCartVisible={isCartVisible} 
                                updateQuantity={updateQuantity}
                                removeFromCart={removeFromCart}/>}
      <Routes>
        <Route exact path='/' element={<IntroPage onBagIconClick={toggleCartVisibility} 
                cartItemCount={totalItemsInCart} />}></Route>
        <Route exact path='/Login' element={<Login />}></Route>
        <Route exact path="/product/:id" element={<ProductDetail addToCart={addToCart} onBagIconClick={toggleCartVisibility} 
                cartItemCount={totalItemsInCart} />} />
        <Route path="/women" element={<WomensProducts />} />
        <Route path="/men" element={<MensProducts />} />
      </Routes>
    </Router>
  );
}

export default App;