import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import products from "../Products.js";
import { useParams } from "react-router-dom";
import StarRating from '../Review.jsx';
import './ProductReview.css'

function ActiveTab() {
    const { title } = useParams();

  // Find the product with the matching title
  const product = products.find(product => product.title === title);
  console.log(product)
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Description" title="Description">
        {product.description}
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <StarRating/>
      </Tab>
    </Tabs>
  );
}

export default ActiveTab;
