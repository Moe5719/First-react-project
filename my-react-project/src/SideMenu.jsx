// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
      &#9776;
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
                    <ListGroup.Item>Home</ListGroup.Item>
                    <ListGroup.Item>About</ListGroup.Item>
                    <ListGroup.Item>Contact</ListGroup.Item>
                    <ListGroup.Item>Login</ListGroup.Item>
                    <ListGroup.Item>Regester</ListGroup.Item>
                </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;




// function SideMenu() {
//     const [menu, setMenu] = useState(false);
//     const [show, setShow] = useState(false);

//     const toggleMenu = () => {
//         setMenu(!menu);
//     }

//     const toggleShow = () => {
//         setShow(!show) 
//     }



//     return (
//         <div>
            // <button className='hamburger-menu' onClick={toggleMenu}></button>
//             <div className="side-menu" style={{ display: menu ? 'block' : 'none' }}>
//                 <FloatingLabel controlId="floatingPassword" label="Password">
//                     <Form.Control type={show ? 'text' : 'password'} placeholder="Password" />
//                 </FloatingLabel>
//                 <Button variant="danger" onClick = {toggleShow}>Toggle password</Button>{' '}

                <ListGroup>
                    <ListGroup.Item>Home</ListGroup.Item>
                    <ListGroup.Item>About</ListGroup.Item>
                    <ListGroup.Item>Contact</ListGroup.Item>
                    <ListGroup.Item>Login</ListGroup.Item>
                    <ListGroup.Item>Regester</ListGroup.Item>
                </ListGroup>
//             </div>
//         </div>
//     );
// }

// export default SideMenu;

