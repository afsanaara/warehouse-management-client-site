import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import {signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const logout = () => {
  signOut(auth);
};
    return (
        <div>
           
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/"> <span className="text-warning fw-bold">Go</span>-Panda</Navbar.Brand> 
    <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
       <Nav.Link  className="text-black fw-bold" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link  className="text-black fw-bold" as={Link} to="/inventory">Inventory</Nav.Link>
      <Nav.Link  className="text-black fw-bold" as={Link} to="/blogs">Blogs</Nav.Link>
              
              
              {
                user ? <span className="text-black fw-bold  mt-1 mx-2 ">
                  <NavDropdown className="text-white" title={user?.email} id="basic-nav-dropdown">
                    
                    <Nav.Link className="text-dark fw-bold" as={Link} to="/manageitems">Manage Items</Nav.Link>
                   <Nav.Link  className="text-dark fw-bold" as={Link} to="/additem">Add Item</Nav.Link>
                   <Nav.Link  className="text-dark fw-bold" as={Link} to="/myitems">My items</Nav.Link>
                <button onClick={() => logout(auth)} className=" btn btn-link text-black fw-bold text-decoration-none">Sign Out</button>
             </NavDropdown>
                  
                 
                  
                  
                </span>
                   :  <Nav.Link className="text-black fw-bold" as={Link} to="/login">Login</Nav.Link>
              }
    </Nav>
            </Navbar.Collapse>
    
    </Container>
        </Navbar>
        
        </div>
    );
};

export default Header;