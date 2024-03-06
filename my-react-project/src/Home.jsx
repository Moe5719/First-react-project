import React from "react";
import Header from "./Header.jsx";
import Cards from "./Card.jsx";
import product from "./Products.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "./Carsoul.jsx";
import Category from "./Category.jsx";
import RightOffCanvas from "./Filter.jsx"; // Corrected import path
import { useSelector } from 'react-redux'; // Import useSelector hook
import { selectSelectedCategories, selectMinRangePrice, selectMaxRangePrice } from './redux/reducer.js'; // Import correct selectors for min and max price range

function Home() {
  const selectedCategories = useSelector(selectSelectedCategories); // Get selected categories from Redux store
  const minPrice = useSelector(selectMinRangePrice); // Get min price range from Redux store
  const maxPrice = useSelector(selectMaxRangePrice); // Get max price range from Redux store

  // Function to filter products based on selected categories and price range
  const filterProducts = () => {
    let filteredProducts = product;

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

    return filteredProducts;
  };

  const filteredProducts = filterProducts(); // Get filtered products

  return (
    <div>
      <Header />
      <br />
      <SlideShow />
      <br />
      <Container>
        <Container>
          <Row xs={1} sm={2} md={4} lg={5}>
            {product.map((categoryObj, index) => (
              <Category key={index} categoryName={categoryObj.category}>
                {/* Pass the categoryName as a prop */}
              </Category>
            ))}
            <RightOffCanvas /> {/* Render RightOffCanvas component */}
          </Row>
        </Container>
        <div style={{ marginBottom: "20px" }} /> {/* Add spacing here */}
        <Row xs={1} sm={2} md={4} lg={4}>
          {filteredProducts.map((card, index) => (
            <Col key={index} style={{ marginBottom: "20px" }}>
              <Cards
                img={card.img}
                title={card.title}
                description={card.description}
                price={card.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
