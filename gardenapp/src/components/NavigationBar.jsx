import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavigationBar() {


  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <NavDropdown title="Your garden" id="your-garden">
              <NavDropdown.Item as={Link} to="/your-garden">Your garden</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/calendar">Calendar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
            </NavDropdown>
          </Nav>


          <Nav>
          <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavigationBar

              
              
             