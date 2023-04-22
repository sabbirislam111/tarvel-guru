import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../shared/Header/Group 1330.png';
import './CoxBooking.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TimePicker  from 'react-time-picker';
import DatePicker from "react-datepicker";

const CoxBooking = () => {
    const [value, onChange] = useState('10:00');
    const [startDate, setStartDate] = useState(new Date());
    const handleTime = () =>{
        console.log(value);
    }
 
    return (
        <div className='cox_hero'>
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
            <h1 className='text-light mb-2'>Cox's bazar</h1>
            <p className='text-light mb-4'>Cox's Bazar is a city, fishing port, tourism centre and
             district headquarters in southeastern Bangladesh. It is famous
            mostly for its long natural sandy beach, and it ...</p>

        
        </Col>
        <Col xs lg="8" className='second_col'>
            

            <Row>
               <Col xs lg="3">
             
               </Col>

               <Col xs lg="8">

                <form className='bg-light p-5'>
                    <fieldset>
                        
                        <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Origin</label>
                        <input type="text" className="form-control" placeholder="Dhaka"/>
                        </div>

                        <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Destination</label>
                        <input type="text" className="form-control" placeholder="Cox’s Bazar"/>
                        </div>
                        

                        <div class="mb-3 d-flex justify-content-between">
                        <div>
                        <label for="disabledTextInput" class="form-label">From</label>
                        <input type="date" className="form-control from_inp" placeholder="Cox’s Bazar"/>
                        </div>
                       
                        <div>
                        <label for="disabledTextInput" class="form-label">To</label>
                        <input type="date" className="form-control from_inp" placeholder="Cox’s Bazar"/>
                        </div>
                        
                        </div>

                      
                   
                    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                </form>

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

export default CoxBooking;