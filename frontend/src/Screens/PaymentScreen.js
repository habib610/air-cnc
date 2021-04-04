import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckOutStep from "../components/CheckOutStep";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faStar } from "@fortawesome/free-solid-svg-icons";
import master from "../mastercard.png";
import visa from "../visa.png";
import amex from "../amex.png";
import paypal from "../paypal.png";
import { createOrder } from "../Actions/orderActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Helmet } from "react-helmet";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const messageUser = useSelector((state) => state.messageUser);
  
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const { userMessage } = messageUser;
  const { userInfo } = userSignIn;


  useEffect(() => {
    if (!userInfo) {
      history.push("/signin");
    }
  }, [userInfo, history]);



  const {
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
  } = cartItems;

  const [paymentMethod, setPaymentMethod] = useState("");
  const [startingDate, setStartingDate] = useState(new Date(startDate));
  const [endingDate, setEndingDate] = useState(new Date(new Date(endDate)));
  const [guest, setGuest] = useState(numOfGuest);

  const days = Math.ceil((endingDate - startingDate) / (1000 * 3600 * 24));


  cartItems.total = perPerson * days + cleaner + 10
  cartItems.paymentMethod = paymentMethod
  cartItems.start = startingDate
  cartItems.end = endingDate
  cartItems.guest = guest
  cartItems.message = userMessage
  cartItems.userId = userInfo._id


  const handleContinue = () => {
    dispatch(createOrder({...cart, cartItems: cart.cartItems}));
    alert("send to backend")
  };
  
  const createdOrder = useSelector((state) => state.createdOrder);
  const {loading, success, orderItems, error} = createdOrder

  useEffect(()=> {
    if(success) {
      history.push(`/order/${orderItems.order._id}`)
    }
  }, [history, success, orderItems])
  return (
    <Container>
      <Helmet>
            <title>PAYMENT</title>
          </Helmet>
      <CheckOutStep step1 step2 step3 />
      <Row>
        <Col md={7} className="mt-5">
          <h3 className="text-secondary mb-4">Payment Selection</h3>
          <Form>
            <Row className="p-4 border border-dark">
              <Col>
                <Row>
                  <Col md={1}>
                    <InputGroup>
                      <Form.Check
                        type="radio"
                        value="card"
                        onClick={(e) => setPaymentMethod(e.target.value)}
                        name="payment"
                        disabled
                      ></Form.Check>
                      {/* <Form.Check type="radio"   name="payment" ></Form.Check> */}
                    </InputGroup>
                  </Col>
                  <Col md={8}>
                    <h4>Credit Card</h4>
                    <p className="text-secondary">
                      <small>
                        Safe money transfer using your bank account. Visa,
                        Maestro, Discover, American Express.
                      </small>
                    </p>
                  </Col>
                  <Col md={3}>
                    <Image src={master} />
                    <Image className="mx-1" src={visa} />
                    <Image src={amex} />
                  </Col>
                </Row>
                <Row className=" mt-5">
                  <Col>
                    <p className="text-muted mb-1">
                      <small>Card Number</small>
                    </p>
                    <div className="cardNumber d-flex justify-content-between pr-2">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        maxLength="19"
                      />
                      <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                  </Col>
                </Row>
                <Row className=" my-4">
                  <Col md={5}>
                    <p className="text-muted mb-1">
                      <small>Card Name</small>
                    </p>
                    <div className="cardNumber ">
                      <input type="text" placeholder="Card Name" />
                    </div>
                  </Col>
                  <Col md={3}>
                    <p className="text-muted mb-1">
                      <small>Expire Date</small>
                    </p>
                    <div className="cardNumber">
                      <input type="text" placeholder="MM/YY" maxLength="5" />
                    </div>
                  </Col>
                  <Col md={3}>
                    <p className="text-muted mb-1">
                      <small>CVC</small>
                    </p>
                    <div className="cardNumber d-flex justify-content-between">
                      <input type="text" placeholder="CVC" maxLength="3" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="p-4 my-5 border border-dark">
              <Col md={1}>
                <InputGroup>
                  <Form.Check
                    type="radio"
                    value="paypal"
                    onClick={(e) => setPaymentMethod(e.target.value)}
                    name="payment"
                  ></Form.Check>
                </InputGroup>
              </Col>
              <Col md={8}>
                <h4>PayPal</h4>
                <p className="text-secondary">
                  <small>
                    Safe money transfer using your bank account. Visa, Maestro,
                    Discover, American Express.
                  </small>
                </p>
              </Col>
              <Col md={3}>
                <Image src={paypal} />
              </Col>
            </Row>
            <Button onClick={handleContinue} disabled={paymentMethod === ""} variant="success py-3">
              Checkout
            </Button>
          </Form>
          
            {loading && <Loader></Loader>}
            {error && <Message variant="danger">{error}</Message>} 
          
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

export default PaymentScreen;
