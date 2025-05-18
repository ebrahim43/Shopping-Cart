import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap'; 
import { useShoppingCart } from '../Context/ShoppingCartContext';  

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <BootstrapNavbar sticky='top'>
      <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/" as={NavLink}>About</Nav.Link>
          </Nav>

          <Button 
            variant='outline-primary' 
            className='rounded-circle' 
            style={{width: '48px', height: '48px', position: 'relative'}}
            onClick={openCart}
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span class=" rounded-pill bg-danger" style={
                {
                    position: 'absolute',
                    width: '24px',
                    height: '24px',
                    bottom: 0,
                    color: 'white',
                }
            }>
              {cartQuantity}
            </span>
          </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
