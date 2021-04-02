import React, { useEffect, useState } from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetailsAction } from '../Actions/userAction';
import Loader from "../components/Loader";
import Message from "../components/Message";
const ProfileScreen = ({history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo.email) {
          history.push("/signin");
        }
        else {
            dispatch(getUserDetailsAction(userInfo._id))
        }
      }, [userInfo, history, dispatch]);

    return (
        <Container>
            <Helmet>
            <title>MY PROFILE</title>
            </Helmet>
            <Row>
                <Col className="offset-md-3" md={6} >
                    <h1 className="text-center mb-3">My Profile</h1>
                    {
                        loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
                        <Form>
                            <div className=" d-flex justify-content-center" >
                               <div className="avatar d-flex text-uppercase justify-content-center align-items-center">{user.name.slice(0,1)}</div>
                            </div>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        placeholder="Full Name"
                        type="text"
                        onChange={(e)=> setName(e.target.value)}
                        value={user.name}
                        />
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        placeholder="example@email.com"
                        type="email"
                        onChange={(e)=> setEmail(e.target.value)}
                        value={user.email}
                        />
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        placeholder="Password"
                        type="password"
                        />
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        placeholder="Confirm Password"
                        type="password"
                        />
                        <Button variant="success btn-block my-2">Update</Button>
                    </Form>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileScreen;