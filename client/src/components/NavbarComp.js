import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#overview">Restaurant Finder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <NavDropdown
                                    title="Filter"
                                >
                                    <NavDropdown.Item href="#action3">Rating</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Cuisine
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Type your search here..."
                                        className="me-3"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light">Search</Button>
                                </Form>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link href="#overview">Overview</Nav.Link>
                                <Nav.Link href="#restaurants">Restaurants</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#impressum">Impressum</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        );
    }
}

export default NavbarComp;