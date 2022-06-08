import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css';

class NavigationBar extends Component {
    state = {
        val: ""
      };
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" className='navbar-set'>
                <Container fluid>
                    <Navbar.Brand href="#overview" className='picture-animation'>Restaurant Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown
                                title="Filter"
                            >
                                <NavDropdown.Item onClick={() => {filter("Rating")}}>Rating</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {filter("Cuisine")}}>
                                    Cuisine
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {filter("Some filter")}}>
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Type your search here..."
                                    className="me-3"
                                    value={this.state.val}
                                    onChange={e => this.setState({ val: e.target.value })}
                                />
                                <Button variant="outline-light" onClick={() => {search(this.state.val)}}>Search</Button>
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
        );
    }
}

async function search(request){
    let fetchRe = await fetch('https://catfact.ninja/fact');

    let result = await fetchRe.json();
    
    console.log(result.fact);
    console.log(request);
}

function filter(filter){
    console.log(filter);

}

export default NavigationBar;