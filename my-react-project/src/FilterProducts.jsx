// ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './Products.js'; // Import your list of product objects
import { Row, Col } from 'react-bootstrap'; // Import Row and Col components
import Cards from "./Card.jsx";
import Header from "./Header.jsx";

function FilterProducts() {
  const { categoryName } = useParams();
  console.log(categoryName)
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the category name from the URL
    const filtered = products.filter(product => product.category === categoryName);
    setFilteredProducts(filtered);
  }, [categoryName]);

  return (
    <div>
        <Header/>
      <h1>Products in Category: {categoryName}</h1>
      <Row xs={1} sm={2} md={4} lg={4}>
        {filteredProducts.map((product, index) => (
          <Col key={index} style={{ marginBottom: "20px" }}>
            <Cards
              img={product.img}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FilterProducts;
