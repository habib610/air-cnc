import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, InputGroup, Row } from "react-bootstrap";

import Form from "react-bootstrap/Form";

import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { listTripActions } from "../Actions/tripActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const SearchScreen = ({ history, match }) => {
    const keyword = match.params.keyword;
    const [nextKeyword, setNextKeyword] = useState("");

    const cardClick = (id) => {
        history.push(`/details/${id}`);
    };

    const handleSearch = () => {
        if (keyword.trim()) {
            history.push(`/search/${nextKeyword}`);
        } else {
            history.push("/");
        }
    };

    const handleTimes = () => {
        history.push("/");
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTripActions(keyword));
    }, [dispatch, keyword]);

    const listTrip = useSelector((state) => state.listTrip);
    const { loading, homes, experiences, error } = listTrip;
    return (
        <Container>
            <Helmet>
                <title>SEARCH FOR TRIP</title>
            </Helmet>

            {/* Search Box */}

            <Row className=" my-4">
                <Col sm={12} md={7}>
                    <Form>
                        <div className="searchWraper">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search For Places"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) =>
                                        setNextKeyword(e.target.value)
                                    }
                                />
                                <Button
                                    variant="outline-secondary"
                                    id="button-addon2"
                                    className="btn btn-success"
                                    onClick={handleSearch}
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </div>
                    </Form>
                </Col>
            </Row>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Row>
                        <Col md={7}>
                            <p className="mb-0">
                                <small>252 stays Apr 13-17 3 guests</small>
                            </p>
                            <h4>Stay in Dhaka Division</h4>
                            <Button variant="outline-success mr-2 mt-2">
                                Cancellation
                            </Button>
                            <Button variant="outline-success mr-2 mt-2">
                                Type Of place
                            </Button>
                            <Button variant="outline-success mr-2 mt-2">
                                Price
                            </Button>
                            <Button variant="outline-success mr-2 mt-2">
                                Instant Book
                            </Button>
                            <Button variant="outline-success mr-2 mt-2">
                                More Filters
                            </Button>
                            <div className="my-4"></div>

                            <Row className="home">
                                {experiences.map((trip) => (
                                    <Col key={trip._id}>
                                        <Card
                                            className="p-2 border-gray mb-2"
                                            onClick={() => cardClick(trip._id)}
                                        >
                                            <Row>
                                                <Col md={5}>
                                                    <Card.Img
                                                        className="rounded"
                                                        variant="top"
                                                        src={trip.thumbnail}
                                                    />
                                                </Col>
                                                <Col md={7}>
                                                    <p className="font-weight-bold">
                                                        {trip.name}
                                                    </p>
                                                    <p className="text-muted mb-0">
                                                        <small>
                                                            {trip.guestCapacity}{" "}
                                                            guest{" "}
                                                            {trip.bedrooms}{" "}
                                                            bedrooms {trip.beds}{" "}
                                                            beds {trip.baths}{" "}
                                                            baths
                                                        </small>
                                                    </p>
                                                    <p className="text-muted mb-0">
                                                        <small>
                                                            Wifi Air
                                                            conditioning Kitchen
                                                        </small>
                                                    </p>
                                                    <p className="text-muted mt-3">
                                                        <small>
                                                            Cancellation
                                                            flexibility
                                                            available
                                                        </small>
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                color="#2bde8c"
                                                            />
                                                            {trip.rating} (
                                                            {trip.numReviews})
                                                        </p>

                                                        <div>
                                                            <p>
                                                                <strong>
                                                                    {
                                                                        trip.perPerson
                                                                    }
                                                                    /night
                                                                </strong>
                                                            </p>
                                                            <p className="text-muted mb-0">
                                                                ${trip.total}{" "}
                                                                total
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}
                                {homes.map((trip) => (
                                    <Col key={trip._id}>
                                        <Card
                                            className="p-2 border-gray mb-2"
                                            onClick={() => cardClick(trip._id)}
                                        >
                                            <Row>
                                                <Col md={5}>
                                                    <Card.Img
                                                        className="rounded"
                                                        variant="top"
                                                        src={trip.thumbnail}
                                                    />
                                                </Col>
                                                <Col md={7}>
                                                    <p className="font-weight-bold">
                                                        {trip.name}
                                                    </p>
                                                    <p className="text-muted mb-0">
                                                        <small>
                                                            {trip.guestCapacity}{" "}
                                                            guest{" "}
                                                            {trip.bedrooms}{" "}
                                                            bedrooms {trip.beds}{" "}
                                                            beds {trip.baths}{" "}
                                                            baths
                                                        </small>
                                                    </p>
                                                    <p className="text-muted mb-0">
                                                        <small>
                                                            Wifi Air
                                                            conditioning Kitchen
                                                        </small>
                                                    </p>
                                                    <p className="text-muted mt-3">
                                                        <small>
                                                            Cancellation
                                                            flexibility
                                                            available
                                                        </small>
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-0">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                color="#2bde8c"
                                                            />
                                                            {trip.rating} (
                                                            {trip.numReviews})
                                                        </p>
                                                        <div>
                                                            <p className="mb-0">
                                                                <strong>
                                                                    {
                                                                        trip.perPerson
                                                                    }
                                                                    /night
                                                                </strong>
                                                            </p>
                                                            <p className="text-muted mb-0">
                                                                ${trip.total}{" "}
                                                                total
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))}
                                {homes.length === 0 &&
                                    experiences.length === 0 && (
                                        <h1>No Result Found</h1>
                                    )}
                            </Row>
                        </Col>

                        {/* <Col md={5}>
                            <iframe
                                title={"welcomeDhaka"}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22356.45173751323!2d90.40554682370814!3d23.80605412029965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616845287856!5m2!1sen!2sbd"
                                width="600"
                                height="100%"
                            ></iframe>
                        </Col> */}
                    </Row>
                </>
            )}
        </Container>
    );
};

export default SearchScreen;
