import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AllOrderList from './AllOrderList';
import UploadProduct from './UploadProduct';

const AdminScreen = () => {
    return (
        <BrowserRouter>
        <Container fluid>
            <Row>
                <Col md={2} className="sidebar" >
                    <Row>
                        <Col md={12}>
                           <Link to="/admin/upload"><Button variant="success btn-block mb-1">Upload A Product</Button></Link> 
                        </Col>
                        <Col md={12}>
                           <Link to="/admin/allorder"><Button variant="success btn-block mb-1">All Order List</Button></Link> 
                        </Col>
                        <Col md={12}>
                        <Link to="/admin/allorder"><Button variant="success mb-1 btn-block">All Order List</Button></Link> 
                        </Col>
                    </Row>
                    
                    
                </Col>
                <Col md={10}>
                    <Route path="/admin/upload"  component={UploadProduct} />
                    <Route path="/admin/allorder" component={AllOrderList} />
                </Col>
            </Row>
        </Container>
        </BrowserRouter>
    );
};

export default AdminScreen;