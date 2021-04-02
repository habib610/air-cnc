import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { userSingInAction } from "../Actions/userAction";
import { Helmet } from "react-helmet";
const LoginScreen = ({location, history}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split("=")[1] : "/";
  
  const dispatch = useDispatch()
  const userSignIn = useSelector(state => state.userSignIn);
  const {userInfo }= userSignIn;
  
useEffect(()=>{
if(userInfo && userInfo.email) {
  history.push(redirect)
}
}, [userInfo, history, redirect])


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userSingInAction(email, password))
  }
  return (
    <Container>
      <Helmet>
            <title>SING IN</title>
          </Helmet>
      <Row>
        <Col md={4} className="offset-md-4 my-5 p-3 border">
            <h3 className="text-center text-dark">Log In</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control  onChange={(e)=> setEmail(e.target.value)} className="py-3 " type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=> setPassword(e.target.value)} className="py-3" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
                We'll never share your email and password  with anyone else.
              </Form.Text>
            <Button variant="success btn-block py-2 my-2" type="submit">
              Sing In
            </Button>
            <p className="text-center"> <small> Don't Have Account? <Link to={`register?redirect=${redirect}`}>Register</Link></small> </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
