import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsAction, updateUserProfileAction } from "../Actions/userAction";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { UPDATE_USER_PROFILE_RESET } from "../Constants/userConstant";
const ProfileScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdate;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo.email) {
      history.push("/signin");
    } else if(!user) {
      dispatch({type: UPDATE_USER_PROFILE_RESET})
      dispatch(getUserDetailsAction(userInfo._id));
    } else{
        setName(user.name)
        setEmail(user.email)
    }
  }, [userInfo._id, userInfo.email, user, history, dispatch]);

  const handleSubmit = (e) => {
      e.preventDefault()
      if(password !== confirmPassword) {
          alert("Password Doesn't Match")
      } else {
            dispatch(updateUserProfileAction({
                userId: user._id,
                name,
                email,
                password
            }))
      }
  }
  return (
    <Container>
      <Helmet>
        <title>MY PROFILE</title>
      </Helmet>
      <Row>
        <Col className="offset-md-3" md={6}>
          <h1 className="text-center mb-3">My Profile</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={handleSubmit}>
                {
                    successUpdate && <Alert variant="success my-2">Profile Updated Successfully</Alert>
                }
                {
                    errorUpdate && <Message variant="danger">{errorUpdate}</Message>
                }
                {
                    loadingUpdate && <Loader />
                }
              <div className=" d-flex justify-content-center">
                <div className="avatar d-flex text-uppercase justify-content-center align-items-center">
                  {user.name.slice(0, 1)}
                </div>
              </div>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Full Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="example@email.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)} />
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control placeholder="Confirm Password" type="password" onChange={(e)=> setConfirmPassword(e.target.value)} />


              <Button type="submit" variant="success btn-block my-2 py-2">Update</Button>

            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
