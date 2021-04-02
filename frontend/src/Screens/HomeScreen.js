import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import FilterSidebar from "../components/FilterSidebar";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listTripActions } from "../Actions/tripActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Route } from "react-router";

const HomeScreen = ({ history, match }) => {


  const cardClick = (id) => {
    history.push(`/details/${id}`);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTripActions());
  }, [dispatch]);

  const listTrip = useSelector((state) => state.listTrip);
  const { loading, homes, experiences, error } = listTrip;

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="my-3">Where Do you want to go?</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="side-bar">
          <Route
            render={({ history }) => <FilterSidebar history={history} />}
          ></Route>
        </Col>
        <Col md={8}>
          <Col className="mb-4">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <>
                <h2>Experiences</h2>
                <Row className="experience">
                  {experiences.map((trip) => (
                    <Col className="mb-4" xs={12} sm={12} md={6} lg={3} key={trip._id}>
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
              </>
            )}
          </Col>
          <Col className="mb-4">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <>
                <h2>Homes</h2>
                <Row className="home">
                  {homes.map((trip) => (
                    <Col xs={12} sm={12} md={4} key={trip._id}>
                      <Card onClick={() => cardClick(trip._id)}>
                        <Card.Img variant="top" src={trip.thumbnail} />
                        <Card.Body className="p-1">
                          <h6 className="place">{trip.place}</h6>
                          <Card.Title>{trip.name}</Card.Title>
                          <p>
                            $ <strong>{trip.perPerson}</strong>{" "}
                            <small>per person</small>
                          </p>
                          <Rating
                            rating={trip.rating}
                            reviews={trip.numReviews}
                            superhost=" - superhost"
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
