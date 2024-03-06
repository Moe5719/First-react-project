import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GridBasicExample() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Product Name" />
        </Col>
        <Col>
          <Form.Control placeholder="Descritpion" />
        </Col>
        <Col>
          <Form.Control placeholder="Price" />
        </Col>
      </Row>
    </Form>
  );
}

export default GridBasicExample;