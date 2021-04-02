import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AllOrderList from './AllOrderList';
import AllUserList from './AllUserList';
import OrderDetailsScreen from './OrderDetailsScreen';
import UploadProduct from './UploadProduct';

const AdminScreen = ({history}) => {
    const userSignIn = useSelector(state => state.userSignIn)
    const {userInfo} = userSignIn
    useEffect(()=> {
        if(!userInfo.isAdmin) {
            history.push('/signin')
        }
    }, [userInfo, history])

    return (
        <BrowserRouter>
        <Container fluid>
            <Helmet>
                <title>ADMIN PANEL</title>
            </Helmet>
            <Row>
                <Col md={2} className="sidebar" >
                    <Row>
                        <Col md={12}>
                           <Link to="/admin/upload"><Button variant="success btn-block mb-1">Upload A Product</Button></Link> 
                        </Col>
                        <Col md={12}>
                           <Link to="/admin"><Button variant="success btn-block mb-1">All Order List</Button></Link> 
                        </Col>
                        <Col md={12}>
                       <Button variant="success mb-1 btn-block">All User List</Button> 
                        </Col>
                        <Col md={12}>
                       <Button variant="success mb-1 btn-block">All Admin List</Button> 
                        </Col>
                    </Row>

                </Col>
                <Col md={10}>
                    <Route path="/admin" exact component={AllOrderList} />
                    <Route path="/admin/upload"  component={UploadProduct} />
                    <Route path="/admin/alluser"  component={AllUserList} />
                    <Route path="/admin/order/:orderId" component={OrderDetailsScreen} />
                </Col>
            </Row>
        </Container>
        </BrowserRouter>
    );
};

export default AdminScreen;