import {
  faCheck,
  faHandSparkles,
  faHome,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { detailTripAction } from "../Actions/tripActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import 'react-calendar/dist/Calendar.css';
import { cartAddAction } from "../Actions/cartAction";
import { Helmet } from "react-helmet";


const DetailsScreen = ({ match, history }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date().setDate(new Date().getDate() + 1) );
  const [numOfGuest, setNumOfGuest] = useState(1)

  const tripId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailTripAction(tripId));
  }, [dispatch, tripId]);

  const singleTrip = useSelector((state) => state.singleTrip);
  const { error, loading, trip } = singleTrip;

const days = Math.ceil((endDate - startDate.getTime()) / (1000 * 3600 * 24))


const handleReserved = () => {
  history.push('/signin?redirect=review')
}

  return (
    <Container fluid>
      <Helmet>
            <title>DETAILS TRIP</title>
          </Helmet>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            <Col md={12}>
              <Row noGutters className="mb-5">
                <Col md={6}>
                  <Image style={{ width: "50vw" }} src={trip.innerView} fluid />
                </Col>
                <Col sm={12} md={6}>
                  <Image style={{ width: "50vw" }} src={trip.frontView} fluid />
                </Col>
              </Row>
            </Col>
          </Row>
          <Container>
            <Row>
              <Col md={8}>
                <div
                  style={{ alignItems: "center" }}
                  className="d-flex justify-content-between p-2 mb-2"
                >
                  <h2>{trip.name}</h2>
                  <div>
                    <Image
                      src={trip.guideThumbnail}
                      className="rounded-circle"
                      width={70}
                    />
                    <p>{trip.superHost}</p>
                  </div>
                </div>
                <p className="text-secondary">{trip.location}</p>
                <p className="text-muted">
                  {trip.guestCapacity} guests, {trip.bedrooms} bedrooms, {trip.beds} beds,{" "}
                  {trip.baths} bathrooms
                </p>
                <Row className="my-1">
                  <Col md={1}>
                    <FontAwesomeIcon icon={faHome} className="fa-2x success" />
                  </Col>
                  <Col md={11}>
                    <p className="text-secondary mb-0">Entire Home</p>
                    <p className="text-secondary">
                      You will have to control yourself
                    </p>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col md={1}>
                    <FontAwesomeIcon icon={faCheck} className="fa-2x success" />
                  </Col>
                  <Col md={11}>
                    <p className="text-secondary mb-0">Self check-in</p>
                    <p className="text-secondary">
                      You can check wih the doorman
                    </p>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col md={1}>
                    <FontAwesomeIcon
                      icon={faHandSparkles}
                      className="fa-2x success"
                    />
                  </Col>
                  <Col md={11}>
                    <p className="text-secondary mb-0 ">Sparkling Clean</p>
                    <p className="text-secondary ">
                      10 recent guests said this place was sparkling clean.
                    </p>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col md={1}>
                    <FontAwesomeIcon icon={faUser} className="fa-2x success" />
                  </Col>
                  <Col md={11}>
                    <p className="text-secondary mb-0">
                      {trip.superHost} is your Super host
                    </p>
                    <p className="text-secondary">
                      Super hosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </p>
                  </Col>
                </Row>
                <p className="text-secondary mt-4">
                  {trip.description}
                  worm.
                </p>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <h3>{trip.perPerson}/night</h3>
                    <p>
                      <FontAwesomeIcon icon={faStar} color="#2bde8c" />{" "}
                      <small>
                        {trip.rating} ({trip.numReviews} reviews)
                      </small>{" "}
                    </p>

                    <Form>

                      <Form.Group> 
                      <Form.Text>From</Form.Text>
                      <Form.Group>
                          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                      </Form.Group>
                      <Form.Text>To</Form.Text>
                      <Form.Group>
                          <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                      </Form.Group>
                      <Form.Text>Guest</Form.Text>
                      <Form.Control as="select" size="lg" onChange={(e)=> setNumOfGuest(Number(e.target.value))}>
                        {
                          [...Array(trip.guestCapacity).keys()].map(item =>
                          <option key={item + 1}
                          value={item + 1} 
                            >{item + 1} Guest</option> )
                        }
                      </Form.Control>
                      </Form.Group>
                    </Form>
                    <ListGroup>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0">
                          <small>${trip.perPerson} x {days} nights</small>
                        </p>
                        <p className="mb-0">
                          <small>${trip.perPerson * days}
                          </small>
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0">
                          <small>Cleaning Free</small>
                        </p>
                        <p className="mb-0">
                          <small>${trip.cleaner}</small>
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0">
                          <small>Service Free</small>
                        </p>
                        <p className="mb-0">
                          <small>$10</small>
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0">
                          <strong>Total</strong>
                        </p>
                        <p className="mb-0">
                          <strong>${ trip.perPerson * days +   trip.cleaner + 10 }</strong>
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button onClick = { ()=> {
                       dispatch(cartAddAction(
                         trip._id,  trip.name, trip.thumbnail,  trip.numReviews, trip.guestCapacity, trip.cleaner, trip.perPerson, trip.rating,  startDate, endDate,  numOfGuest, trip.guideThumbnail, trip.superHost));handleReserved()
                    }
                      }  disabled={(trip.perPerson * days +   trip.cleaner + 10) < 1 } variant={`block btn-success my-2 py-3 `}>
                      Reserved
                    </Button>
                    <Form.Text className="text-center">You won't be charged yet</Form.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Container>
  );
};

export default DetailsScreen;
