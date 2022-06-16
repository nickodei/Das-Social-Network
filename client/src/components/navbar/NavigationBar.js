import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css';

function NavigationBar(){

    const [val, setVal] = useState("");
    const [cuisine, setCuisine] = useState("ALL");
    const [rating, setRating] = useState("ALL");
    const [priceCategory, setPrice] = useState("ALL");

        return (
            <Navbar bg="dark" variant="dark" fixed="top" className='navbar-set'>
                <Container fluid>
                    <Navbar.Brand href="#overview" className='picture-animation'>Restaurant Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title ="Filter">
                                <center>
                                <NavDropdown title = { <span className="text-primary my-auto">Rating</span>}>
                                    <NavDropdown.Item onClick={() => { setRating('1')}}>1/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('2')}}>2/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('3')}}>3/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('4')}}>4/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('5')}}>5/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('6')}}>6/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('7')}}>7/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('8')}}>8/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('9')}}>9/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('10')}}>10/10</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setRating('ALL')}}>All ratings</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title={ <span className="text-primary my-auto">Price</span>}>
                                    <NavDropdown.Item onClick={() => { setPrice('$') }}>$</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setPrice('$$') }}>$$</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setPrice('$$$') }}>$$$</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setPrice('ALL')}}>All prices</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={ <span className="text-primary my-auto">Cuisine</span>}>
                                    <NavDropdown.Item onClick={() => { setCuisine( 'GERMAN') }}>German</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setCuisine( 'CHINESE') }}>Chinese</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setCuisine( 'ITALIAN') }}>Italian</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setCuisine( 'ROMANIAN') }}>Romanian</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setCuisine( 'OTHERS') }}>Others</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => { setCuisine( 'ALL')}}>All cuisines</NavDropdown.Item>
                                </NavDropdown>
                                </center>
                                <NavDropdown.Item onClick={() => { setCuisine( 'ALL'); setPrice( 'ALL'); setRating( 'ALL' )}}>Reset all filters</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => { //TODO
                                 }}>Filter list</NavDropdown.Item>
                            </NavDropdown>

                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Type your search here..."
                                    className="me-3"
                                    value={val}
                                    onChange={e => setVal( e.target.value )}
                                />
                                <Button variant="outline-light" onClick={() => { search(val) }}>Search</Button>
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

function search(request) {
}


export default NavigationBar;