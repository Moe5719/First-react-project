import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({ img, title, description, price }) {
  const addItemToCart = () => {
    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Create a new item object
    const newItem = { img, title, description, price, quantity : 1};
    
    // Add the new item to the existing cart items
    const updatedCartItems = [...existingCartItems, newItem];
    
    // Store the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    // Optionally, you can alert the user or perform other actions to indicate that the item has been added to the cart
    alert('Item added to cart!');
  };

  return (
    <div>
    <Card style={{ height: '100%' }}>
      <div style={{ height: '150px', overflow: 'hidden' }}>
        <Card.Img variant="top" src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" as = {Link} to = {`/product/${title}`}>View</Button>{' '}
        {/* 
        Here, we call the addItemToCart function when the button is clicked.
        */}
        <Button variant="danger" onClick={addItemToCart}>Add to cart</Button>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default Cards;

