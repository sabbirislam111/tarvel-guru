import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Group 1330.png';
import './Header.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='hero'>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container className='mt-3'>
            <img
              src={Logo}
              width="130"
              height="50"
              className="d-inline-block align-top logo_img"
              alt="React Bootstrap logo"
            />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/coxbooking' className='text-light'>CoxBooking</Link>
                    <Nav.Link className='text-light'>Pricing</Nav.Link>
           
                </Nav>
                <Nav>
                    <Nav.Link className='text-light'>More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        <div>
        <Container>
        <Row>
            <Col xs lg="4" className='fast_col'>
                <h1 className='text-light mb-2'>Cox's bazar</h1>
                <p className='text-light mb-4'>Cox's Bazar is a city, fishing port, tourism centre and
                 district headquarters in southeastern Bangladesh. It is famous
                mostly for its long natural sandy beach, and it ...</p>

                <Button variant="warning"><Link to='/coxbooking'>Booking</Link></Button>{' '}
            </Col>
            <Col xs lg="8" className='second_col'>
                

                <Row>
                   <Col xs lg="3">
                 
                   </Col>

                   <Col xs lg="8">
                   <div border="primary" style={{ width: '40rem'}} className='card_1'>
                                        
                                        <div className='card_content'>
                                          <Link to='/'><h1>COX'S BAZAR</h1></Link>  
                                        
                                        </div>
                                    </div>
                                    <br />
                                    <br />


                                    <div border="primary" style={{ width: '40rem'}} className='card_2'>
                                        
                                        <div className='card_content'>
                                       <Link to='/sundarbans'><h1>SUNDARBANS</h1></Link> 
                                        
                                        </div>
                                    </div>
                                    <br />
                                    <br />


                                    <div border="primary" style={{ width: '40rem'}} className='card_3'>
                                        
                                        <div className='card_content'>
                                            <Link to='/sreemangal'><h1>SREEMANGAL</h1></Link>
                                         
                                        </div>
                                    </div>
                                    <br />
                   </Col>

                   <Col xs lg="1">
                
                   </Col>
                </Row>
                
            </Col>
        </Row>
        </Container>
        </div>
  
        </div>
    );
};

export default Header;