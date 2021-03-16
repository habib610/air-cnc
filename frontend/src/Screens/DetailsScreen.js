import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import data from '../data';

const DetailsScreen = ({match}) => {
    const id = match.params.id
    console.log(id)
    const detailsTrip = data.find(item => item._id === Number(id))
    console.log(detailsTrip)
    return (
        <Container fluid>
        <Row  >
            <Col md={8} className="offset-md-2" >
                <Row noGutters>
                    <Col sm={12} md={6} ><Image src={detailsTrip.frontView} fluid /></Col>
                <Col sm={12} md={6} ><Image src={detailsTrip.innerView} fluid /></Col>
                </Row>
            </Col>
        </Row>
        <Row>
        </Row>
        </Container>
    );
};

export default DetailsScreen;