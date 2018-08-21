import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Col, Jumbotron } from 'react-bootstrap';
import email from './email.jpg';
import phone from './phone.png';
import contact from './bg.jpg';

class ContactMe extends Component {
    constructor() {
        super();
        this.state = {
            submit: ''
        }
    }

    submit = input => {
        this.setState({ submit: 'Thank You! :)' })
    }

    render() {
        return (
            <div >
              
                <div className="contact">
                    <div className="row">
                        <div className='col-md-6 order-md-5 mb-5'>
                        <Jumbotron>
                            <Form className="text-dark">
                                <Col sm={{ size: 5, order: 5, offset: 3 }}>
                                        <h5 className="text-dark"> <em><b> Drop me a line! I would love to hear from you </b> </em> </h5>
                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Label htmlFor="name" sm={4} size="sm" className="text-dark"> Your Name: </Label>
                                                <input className="form-control" required type="text" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Label htmlFor="email" sm={4} size="sm" className="text-dark"> Your email: </Label>
                                                <input className="form-control" required type="text" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Label htmlFor="subject" sm={4} size="sm" className="text-dark"> Subject: </Label>
                                                <input className="form-control" required type="text" />
                                            </Col>

                                        </FormGroup>
                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Label htmlFor="message" sm={4} size="sm" className="text-dark">
                                                    Message: </Label>
                                                <textarea className="form-control" required rows="2" cols="28" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Button bsStyle="success" onClick={this.submit}> Send </Button>
                                            </Col>
                                        </FormGroup>
                                        <p className="text-success" > <b> {this.state.submit} </b> </p>
                                   
                                </Col>

                            </Form>
                           </Jumbotron>
                        </div>

                        <div align="right" className='col-md-6 order-md-5 mb-5'>
                            <img src={email} width="70" height="70" alt="email" />
                            <h5 className="text-dark"> <b> priyanka.suresh1@wipro.com </b> </h5>
                            <img src={phone} width="70" height="70" alt="phone" />
                            <h5 className="text-dark"> <b> +91 9789921339 </b> </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;
