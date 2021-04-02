import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { homesAction } from "../Actions/tripActions";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet";

const HomesCategory = ({ history }) => {
  const dispatch = useDispatch();
  const homesTrip = useSelector((state) => state.homesTrip);
  const { loading, error, homes } = homesTrip;
  useEffect(() => {
    dispatch(homesAction());
  }, [dispatch]);

  const cardClick = (id) => {
    history.push(`/details/${id}`);
  };
  return (
    <Container>
      <Helmet>
            <title>EXPLORE YOUR HOMES</title>
          </Helmet>
      <h1 className="mt-3">Explore your homes</h1>
      {loading ? (
        <Row>
          <Col md={12}>
            <Loader />
          </Col>
        </Row>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {homes.map((trip) => (
            <Col className="my-4" xs={12} sm={12} md={6} lg={4} key={trip._id}>
              <Card   onClick={() => cardClick(trip._id)}>
                <Card.Img variant="top" src={trip.thumbnail} />
                <Card.Body className="py-0 px-2">
                  <h6 className="place">{trip.place}</h6>
                  <h5 className="text-success">{trip.name}</h5>
                  <p>
                    $ <strong>{trip.perPerson}</strong>{" "}
                    <small>per person</small>
                  </p>
                  <Rating rating={trip.rating} reviews={trip.numReviews} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomesCategory;
