import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top" expand='sm'>
                    <Container>
                        <Navbar.Brand href="#home">restaurant finder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Overview</Nav.Link>
                                <Nav.Link href="#link">Restaurants</Nav.Link>
                                <NavDropdown title="About" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Project</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Team "Das Social Network"</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Impressum</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComp;