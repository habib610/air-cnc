import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FilterSidebar from '../components/FilterSidebar';
import Rating from '../components/Rating';
import data from '../data';

const HomeScreen = () => {
    const [trips, setTrips] = useState(data.slice(0, 4))
    const [homes, setHomes] = useState(data.slice(4))

    return (
        <Container fluid>
            <Row>
                <Col>
                <h1 className="my-3">Where Do you want to go?</h1> 
                </Col>
            </Row>
            <Row>
                <Col md={4} className="side-bar">
                    <FilterSidebar />
                </Col>
               <Col md={8}>
               <Col className="mb-4">
                    <h2>Experiences</h2>
                    <Row className="experience">
                    {
                        trips.map(trip => <Col xs={12} sm={12}  md={6} lg={3} key={trip._id}  >
                            <Card>
                                <Card.Img variant="top" src={trip.thumbnail} />
                                <Card.Body className="p-1">
                                <h6 className="place">{trip.place}</h6>
                                    <h5>{trip.name}</h5>
                                    <p>$ <strong>{trip.perPerson}</strong>  per person</p>
                                    <Rating rating={trip.rating} reviews={trip.numReviews} />
                                    </Card.Body>
                            </Card>
                        </Col>)
                    }
                    </Row>
                </Col>
               <Col className="mb-4">
                    <h2>Homes</h2>
                    <h2>Master adding</h2>
                    <Row className="experience">
                    {
                        homes.map(trip => <Col xs={12} sm={12}  md={4}  key={trip._id}  >
                            <Card>
                                <Card.Img variant="top" src={trip.thumbnail} />
                                <Card.Body className="p-1">
                                <h6 className="place">{trip.place}</h6>
                                    <h5>{trip.name}</h5>
                                    <p>$ <strong>{trip.perPerson}</strong>  per person</p>
                                    <Rating rating={trip.rating} reviews={trip.numReviews} superhost=" - superhost" /> 
                                    </Card.Body>
                            </Card>
                        </Col>)
                    }
                    </Row>
                </Col>
               </Col>
                
            
                
            </Row>
        </Container>
    );
};

export default HomeScreen;