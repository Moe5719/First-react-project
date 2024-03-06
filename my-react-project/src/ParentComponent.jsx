import React, { useState } from "react";
import Cards from "./Card.jsx";
import Cart from "./Cart.jsx";

function ParentComponent() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    setCartItems(updatedCart);
  };

  return (
    <div>
      {/* 
      Pass the addToCart function as a prop to the Cards component.
      This will allow the Cards component to call this function when the "Add to Cart" button is clicked.
      */}
      <Cards
        addToCart={addToCart} 
      />

      {/* 
      Pass the cartItems state, removeFromCart, and updateQuantity functions as props to the Cart component.
      */}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default ParentComponent;
