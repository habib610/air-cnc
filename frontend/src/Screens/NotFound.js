import React from 'react';
import {Row, Container, Col, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
const NotFound = ({history}) => {
    return (
        <Container fluid className="bg-secondary">
            <Helmet>
                <title>ERROR || NOT FOUND</title>
            </Helmet>
            <Row>
                <Col className="mx-auto notFound" md={6}>
                    <div>
                    <h1 className="font-weight-bold">404</h1>
                    <h4>Sorry, Page Not Found</h4> 
                    <Button onClick={()=> history.push('/')} variant="success">Back to Home</Button>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;