import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import '../Restaurants.css';

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#overview" className='picture-animation'>Restaurant Finder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#overview">Back to Overview</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        );
    }
}

export default NavbarComp;