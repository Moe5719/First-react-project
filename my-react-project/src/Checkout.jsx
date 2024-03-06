import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from 'react-bootstrap';

function CheckOut() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              aria-label="FirstName"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
            <Form.Control
              placeholder="Last Name"
              aria-label="LastName"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
            <Form.Control
              placeholder="Address"
              aria-label="Address"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Card holder name</InputGroup.Text>
            <Form.Control
              placeholder="Card holder name "
              aria-label="CardHolderName"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Card Number</InputGroup.Text>
            <Form.Control
              placeholder="Card Number "
              aria-label="CardNumber"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Expiry Date</InputGroup.Text>
            <Form.Control
              placeholder="Expiry Date"
              aria-label="ExpiryDate"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">CCV</InputGroup.Text>
            <Form.Control
              placeholder="CCV"
              aria-label="CCV"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Button variant="danger">CheckOut</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckOut;
