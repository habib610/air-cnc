import {
  faArrowRight,
  faCheck,
  faHandSparkles,
  faHome,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { detailTripAction } from "../Actions/tripActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const DetailsScreen = ({ match }) => {
  const tripId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailTripAction(tripId));
  }, [dispatch, tripId]);

  const singleTrip = useSelector((state) => state.singleTrip);
  const { error, loading, trip } = singleTrip;
 
  return (
    <Container fluid>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
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
                  {trip.baths} bathrooms{" "}
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
                      <Form.Text>Date</Form.Text>
                      <Form.Control as="date" size="lg">
                        23/25/2019 <FontAwesomeIcon icon={faArrowRight} />{" "}
                        23/25/2019
                      </Form.Control>
                      <Form.Text>Guest</Form.Text>
                      <Form.Control as="select" size="lg">
                        <option>3 Guest</option>
                        <option>1 Guest</option>
                      </Form.Control>
                    </Form>
                    <ListGroup>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0">
                          <small>$34 x 4 nights</small>
                        </p>
                        <p className="mb-0">
                          <small>$135</small>
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0">
                          <small>Cleaning Free</small>
                        </p>
                        <p className="mb-0">
                          <small>$13</small>
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
                          <strong>$135</strong>
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button variant="block btn-success my-2 py-3 ">
                      {" "}
                      Reserved
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
};

export default DetailsScreen;
