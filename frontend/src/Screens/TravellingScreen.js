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
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { cartAddAction } from "../Actions/cartAction";
import { messageUserAction } from "../Actions/userAction";
import { Helmet } from "react-helmet";

const TravellingScreen = ({ history }) => {
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
  const days = Math.ceil((endingDate - startingDate) / (1000 * 3600 * 24));
  const [message, setMessage] = useState('');

  const handleContinue = () => {
    dispatch(
      cartAddAction(
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
        superHost
      )
    );
    dispatch(messageUserAction(message))
    history.push("/payment-method");
  };

  return (
    <Container>
      <Helmet>
            <title>READY FOR TRAVEL</title>
          </Helmet>
      <CheckOutStep step1 step2 />
      <Row>
        <Col md={7} className="mt-5">
          <h3>Traveling for work?</h3>
          <Row>
            <Col md={9}>
              <p className="mb-0">
                <small>Say hello to your host</small>
              </p>
              <p>
                <small>
                  Let Rowdra know a little about yourself and why you’re coming.
                </small>
              </p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" className="my-5" onChange={(e)=> setMessage(e.target.value)} placeholder="Message to your super host" rows={5} />
                </Form.Group>
              </Form>
              <Button disabled={message.length < 6} onClick={handleContinue} variant="success py-3">
               Continue
              </Button>
            </Col>
            <Col
              md={3}
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <Image
                className="rounded-circle fluid w-75"
                src={guideThumbnail}
              />
              <p className="text-dark ">{superHost}</p>
            </Col>
          </Row>
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
    </Container>
  );
};

export default TravellingScreen;
