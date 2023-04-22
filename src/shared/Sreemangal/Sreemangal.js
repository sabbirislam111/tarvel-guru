import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Header/Group 1330.png';
import './Sreemangal.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sreemangal = () => {
    return (
        <div>
           <div className='sre_hero'>
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
                    <Nav.Link className='text-light'>Features</Nav.Link>
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
                <h1 className='text-light mb-2'>SREEMANGAL</h1>
                <p className='text-light mb-4'>Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh.
                 Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila.
                  It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress ...</p>

                <Button variant="warning">Booking</Button>{' '}
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
        </div>
    );
};

export default Sreemangal;