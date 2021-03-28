import React, { useEffect, useState } from "react";
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
import CheckOutStep from "../components/CheckOutStep";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faChevronDown,
  faChevronUp,
  faExclamationCircle,
  faPaw,
  faSmoking,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { cartAddAction } from "../Actions/cartAction";

const ReviewScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { userInfo } = userSignIn;

  useEffect(() => {
    if (!userInfo) {
      history.push("/signin");
    }
  }, [userInfo, history]);

  const {
    id,
    name,
    thumbnail,
    numReviews,
    guestCapacity,
    cleaner,
    perPerson,
    rating,
    startDate,
    endDate,
    numOfGuest,
    guideThumbnail,
    superHost,
  } = cartItems;

  const [startingDate, setStartingDate] = useState(new Date(startDate));
  const [endingDate, setEndingDate] = useState(new Date(new Date(endDate)));
  const [guest, setGuest] = useState(numOfGuest);
  const [showMore, setShowMore] = useState(false);
  const days = Math.ceil((endingDate - startingDate) / (1000 * 3600 * 24));

  const checkIn = startingDate.toDateString();
  const checkInHours = new Date(startingDate);

  const checkOut = endingDate.toDateString();
  const checkOutHours = new Date(endingDate);

  const handleContinue = () => {
    dispatch(cartAddAction( 
      id,
      name,
      thumbnail,
      numReviews,
      guestCapacity,
      cleaner,
      perPerson,
      rating,
      startingDate,
      endingDate,
      guest,
      guideThumbnail,
      superHost,))
    history.push("/travelling");
  };

  return (
    <Container>
      <CheckOutStep step1 />
      <Row>
        <Col md={7}>
          <h1>Review House Roles</h1>
          <h4 className="my-4">{days} nights in Dhaka</h4>
          <Row>
            <Col md={6}>
              <Row noGutters>
                <Col md={3}>
                  <h6 className="bg-secondary text-center text-uppercase p-2 mr-2">
                    {checkIn.split(" ")[1]}
                    <br />
                    {checkIn.split(" ")[2]}
                  </h6>
                </Col>
                <Col md={9}>
                  <p className="text-secondary mb-0 small">
                    <small>
                      {startingDate.toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                      day CheckIn
                    </small>
                  </p>
                  <p className="text-secondary mb-0">
                    <small>
                      After{" "}
                      {checkInHours.toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: true,
                      })}
                    </small>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row noGutters>
                <Col md={3}>
                  <h6 className="bg-secondary text-center text-uppercase p-2 mr-2">
                    {checkOut.split(" ")[1]}
                    <br />
                    {checkOut.split(" ")[2]}
                  </h6>
                </Col>
                <Col md={9}>
                  <p className="text-secondary mb-0 small">
                    <small>
                      {endingDate.toLocaleDateString("en-US", {
                        weekday: "long",
                      })}{" "}
                      Checkout
                    </small>
                  </p>
                  <p className="text-secondary mb-0">
                    <small>
                      Before{" "}
                      {checkOutHours.toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: true,
                      })}
                    </small>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <p className="text-dark my-4">Self Check In With Building Stuff</p>
          <div className="bg-dark my-4" style={{ height: "3px" }}></div>
          <h4 className="my-4">Things to keep in Mind</h4>

          <div
            className="showMoreContainer"
            style={{ height: showMore ? "226px" : "115px" }}
          >
            <p className="my-4">
              {" "}
              <span className="p-2 border rounded mr-3 my-2">
                {" "}
                <FontAwesomeIcon icon={faBabyCarriage} />
              </span>{" "}
              Suitable for children and infants{" "}
            </p>
            <p className="my-4">
              {" "}
              <span className="p-2 border rounded mr-3">
                {" "}
                <FontAwesomeIcon icon={faPaw} />
              </span>{" "}
              Pets allowed{" "}
            </p>
            <p className="my-4">
              {" "}
              <span className="p-2 border rounded mr-3 text-danger">
                {" "}
                <FontAwesomeIcon icon={faExclamationCircle} />
              </span>{" "}
              No Parties Event{" "}
            </p>
            <p className="my-4">
              {" "}
              <span className="p-2 border rounded mr-3">
                {" "}
                <FontAwesomeIcon icon={faSmoking} />
              </span>{" "}
              Smoking Allowed{" "}
            </p>
          </div>
          <h5
            className="showMore text-primary"
            onClick={() => setShowMore(!showMore)}
          >
            {" "}
            {showMore ? "Read Less" : "Read More"}{" "}
            <FontAwesomeIcon icon={showMore ? faChevronUp : faChevronDown} />{" "}
          </h5>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Row noGutters>
                <Col md={8}>
                  <h3 className="mx-0">{name}/night</h3>
                  <p>
                    <FontAwesomeIcon icon={faStar} color="#2bde8c" />
                    <small>
                      {rating} ({numReviews} reviews)
                    </small>
                  </p>
                </Col>
                <Col md={4}>
                  <Image fluid src={thumbnail} />
                </Col>
              </Row>

              <Form>
                <Form.Group>
                  <Form.Text>From</Form.Text>
                  <Form.Group>
                    <div className="vw-26">
                      <DatePicker
                        selected={startingDate}
                        onChange={(date) => setStartingDate(date)}
                      />
                    </div>
                  </Form.Group>
                  <Form.Text>To</Form.Text>
                  <Form.Group>
                    <div className="vw-26">
                      <DatePicker
                        selected={endingDate}
                        onChange={(date) => setEndingDate(date)}
                      />
                    </div>
                  </Form.Group>
                  <Form.Text>Guest</Form.Text>
                  <Form.Control
                    as="select"
                    size="lg"
                    value={guest}
                    onChange={(e) => setGuest(Number(e.target.value))}
                  >
                    {[...Array(guestCapacity).keys()].map((item) => (
                      <option key={item + 1} value={item + 1}>
                        {item + 1} Guest
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between">
                  <p className="mb-0">
                    <small>
                      ${perPerson} x {days} nights
                    </small>
                  </p>
                  <p className="mb-0">
                    <small>${perPerson * days}</small>
                  </p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <p className="mb-0">
                    <small>Cleaning Free</small>
                  </p>
                  <p className="mb-0">
                    <small>${cleaner}</small>
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
                    <strong>${perPerson * days + cleaner + 10}</strong>
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button onClick={handleContinue} variant="success my-5 py-3">
        Agree And Continue
      </Button>
    </Container>
  );
};

export default ReviewScreen;
