// Category.jsx
import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Category({ categoryName }) {
  return (
    <Col
      className="d-flex justify-content-center align-items-center"
      style={{ marginBottom: "20px" }}
    >
      <Button variant="outline-danger" as={Link} to={`/category/${categoryName}`}>
        {categoryName}
      </Button>
    </Col>
  );
}

export default Category;
