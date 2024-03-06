import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Products'; // Assuming products array is defined in a separate file
import Header from './Header.jsx';
import ActiveTab from './Tab/ProductTab.jsx';
import { Button } from 'react-bootstrap';


function ProductDetails() {
  const { title } = useParams();

  // Find the product with the matching title
  const product = products.find(product => product.title === title);

  const addItemToCart = () => {
    if (!product) {
      console.error('Product not found');
      return; // Exit the function if product is not found
    }

    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Create a new item object
    const newItem = {
      img: product.img,
      title: product.title,
      description: product.description,
      price: product.price,
      quantity: 1
    };

    // Add the new item to the existing cart items
    const updatedCartItems = [...existingCartItems, newItem];

    // Store the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // Optionally, you can alert the user or perform other actions to indicate that the item has been added to the cart
    alert('Item added to cart!');
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Center align vertically
    marginTop: '20px',
    width: '80%',
    margin: '0 auto',
  };

  const imageContainerStyle = {
    flex: '1', // Occupy 50% of the container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '100%', // Make image responsive
    maxHeight: '100%',
  };

  const detailsStyle = {
    flex: '1', // Occupy 50% of the container
    marginLeft: '20px', // Add space between image and text
    textAlign: 'center',
  };

  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center align horizontally
  };

  // Render product details
  return (
    <div>
      <Header />
      {product ? (
        <div style={containerStyle}>
          <div style={imageContainerStyle}>
            <img src={product.img} alt={product.title} style={imageStyle} />
          </div>
          <div style={detailsStyle}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <ActiveTab/>
            <Button style={{ marginTop: '20px' }} variant='danger' onClick={addItemToCart}>Add to Cart</Button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
