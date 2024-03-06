import React, { useState } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedCategories,
  selectMinRangePrice,
  selectMaxRangePrice,
  setSelectedCategories,
  setMinRangePrice,
  setMaxRangePrice
} from "./redux/reducer.js";
import products from "./Products";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function RightOffCanvas() {
  const [show, setShow] = useState(false);
  const [sliderPrice, setSliderPrice] = useState(0); // State for price slider
  const minPrice = useSelector(selectMinRangePrice); // Get min price range from Redux store
  const maxPrice = useSelector(selectMaxRangePrice); // Get max price range from Redux store
  const selectedCategories = useSelector(selectSelectedCategories);
  const dispatch = useDispatch();

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const toggleCategory = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    dispatch(setSelectedCategories(updatedCategories));
  };

  const handleSliderSaveChanges = () => {
    // Dispatch actions to save min and max price range to Redux store
    dispatch(setMinRangePrice(0));
    dispatch(setMaxRangePrice(sliderPrice));
    setShow(false); // Close offcanvas after saving changes
  };

  const handleInputSaveChanges = () => {
    // Dispatch actions to save min and max price range to Redux store
    setShow(false); // Close offcanvas after saving changes
  };

  return (
    <>
      <Button
        variant="outline-danger"
        onClick={() => setShow(!show)}
        style={{ width: "fit-content", height: "fit-content", padding: 0 }}
      >
        <BsFilter style={{ fontSize: "1.5rem" }} />
      </Button>
      <Offcanvas placement="end" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter by Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Label>Categories:</Form.Label>
            {categories.map((category) => (
              <div key={category} style={{ marginBottom: "10px" }}>
                <Form.Check
                  type="checkbox"
                  label={category}
                  onChange={() => toggleCategory(category)}
                />
              </div>
            ))}
          </Form>
          <Form.Label>Price: {sliderPrice}</Form.Label>
          <Form.Range
            min="0"
            max="500"
            step="50"
            value={sliderPrice}
            onChange={(e) => setSliderPrice(parseInt(e.target.value))}
          ></Form.Range>
          <Button onClick={handleSliderSaveChanges}>Save Changes</Button>{" "}
          {/* Add button to save slider changes */}
          <Form>
            <Row>
              <Form.Label style={{ marginTop: "10px" }}>
                Enter price range between 0 and 500
              </Form.Label>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) =>
                    dispatch(setMinRangePrice(parseInt(e.target.value)))
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) =>
                    dispatch(setMaxRangePrice(parseInt(e.target.value)))
                  }
                />
              </Col>
              <Button
                style={{ marginTop: "10px" }}
                onClick={handleInputSaveChanges}
              >
                Save Changes
              </Button>
            </Row>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightOffCanvas;
