import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavbarTop() {

  let myStyle = {
    color: "black",
    fontSize: '19px',
    marginLeft: '20px',
    textDecoration: 'none',
    fontWeight:'500',
    
  }



  return (
    <div >
      <Navbar expand="lg" className="bg-info   " >
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-sm-center mt-sm-2">
              <NavLink to="/" style={myStyle} >PRODUCTS</NavLink>
              <NavLink to="/imagesearch" style={myStyle} >IMAGE SEARCH</NavLink>
              <NavLink to="/sortproducts" style={myStyle} >SORT PRODUCTS</NavLink>
              <NavLink to="/sortprodprd" style={myStyle} >SORTPRODPRD</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarTop