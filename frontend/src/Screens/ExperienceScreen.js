import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../components/Loader";
import { experienceAction } from '../Actions/tripActions';
import Message from '../components/Message';
import Rating from '../components/Rating';


const ExperienceScreen = ({history}) => {
    const dispatch = useDispatch()
    const experienceTrip = useSelector(state => state.experienceTrip)
    const {loading, error, experience} = experienceTrip
    useEffect(()=>{
        dispatch(experienceAction())
    }, [dispatch])

    const cardClick = (id)=> {
        history.push(`/details/${id}`)
    }
    return (
        <Container>
            <h1 className="mb-5 mt-3">Explore your experience</h1>
            {
                loading ?
                <Row>
                    <Col md={12}><Loader /></Col>
                </Row>
                 : error ? <Message variant="danger">{error}</Message> :
                <Row>
            {
            
            experience.map((trip) => (
                    <Col className="mb-4" xs={12} sm={12} md={6} lg={4} key={trip._id}>
                      <Card onClick={() => cardClick(trip._id)}>
                        <Card.Img variant="top" src={trip.thumbnail} />
                        <Card.Body className="py-0 px-2">
                          <h6 className="place">{trip.place}</h6>
                          <h5 className="text-success">{trip.name}</h5>
                          <p>
                            $ <strong>{trip.perPerson}</strong>{" "}
                            <small>per person</small>
                          </p>
                          <Rating
                            rating={trip.rating}
                            reviews={trip.numReviews}
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
            </Row>
        }
        </Container>
    );
};

export default ExperienceScreen;