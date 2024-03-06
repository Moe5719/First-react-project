import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Header from "./Header.jsx";
import { useStore } from "react-redux";
import CheckOut from "./Checkout.jsx";

function Cart({ removeFromCart }) {
  const store = useStore();
  // Initialize cart items state with products from local storage
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCartItems;
  });

  // Function to handle increasing quantity of a product
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Function to handle decreasing quantity of a product
  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };

  // Function to handle removing a product from the cart
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
    removeFromCart(index); // Call the removeFromCart function with the index as an argument
  };

  // Function to update local storage with the updated cart items
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Function to calculate the total price of all products in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <Header/>
      <Container>
        <h1>Cart</h1>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Card key={index} style={{ width: "18rem", margin: "1rem" }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => increaseQuantity(index)}
                >
                  +
                </Button>
                <Button
                  variant="primary"
                  onClick={() => decreaseQuantity(index)}
                >
                  -
                </Button>
                <Button variant="danger" onClick={() => removeItem(index)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <CheckOut/>
      </Container>
    </div>
  );
}

export default Cart;
