import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const RegisterScreen = ({location}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const redirect = location.search ? location.search.split("=")[1] : "/"
    const handleSubmit = (e) => {
        e.preventDefault()
        if(password  !== confirmPassword){
        alert("Password doesn't Match")
        return
        }
    }
    return (
        <Container>
        <Row>
          <Col md={4} className="offset-md-4 my-5 p-3 border">
              <h3 className="text-center text-dark">Register</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control className="py-3 " type="name" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control className="py-3 " type="email" placeholder="Enter email" />
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword" className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=> setPassword(e.target.value)}  className="py-3" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={(e)=> setConfirmPassword(e.target.value)} className="py-3" type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Form.Text className="text-muted">
                  We'll never share your email and password  with anyone else.
                </Form.Text>
              <Button variant="success btn-block py-2 my-2" type="submit">
                Register
              </Button>
              <p className="text-center"> <small> Already Have Account? <Link to={`signin?redirect=${redirect}`}>Sing In </Link></small> </p>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default RegisterScreen;