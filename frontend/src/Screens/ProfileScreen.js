import React, { useEffect } from 'react';
import {Alert, Container} from 'react-bootstrap'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
const ProfileScreen = ({history}) => {
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!userInfo.email) {
          history.push("/signin");
        }
      }, [userInfo, history]);
    return (
        <Container>
            <Helmet>
            <title>MY PROFILE</title>
            </Helmet>
            <Alert variant="warning mt-5"><h1>This page is on processing...</h1></Alert>
        </Container>
    );
};

export default ProfileScreen;