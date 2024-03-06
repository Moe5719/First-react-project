import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddRowTable = ({ products }) => {
  const [rows, setRows] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const addRow = () => {
    // Generate a unique key for the new row
    const newRowKey = rows.length + 1;
    // Create a new row object
    const newRow = {
      key: newRowKey,
      productName: productName,
      description: description,
      price: price
    };
    // Update the state with the new row
    setRows([...rows, newRow]);
    // Reset form fields
    setProductName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <Form.Control type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Col>
        <Col>
          <Button onClick={addRow}>Add Row</Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
          {rows.map(row => (
            <tr key={row.key}>
              <td>{row.productName}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AddRowTable;
