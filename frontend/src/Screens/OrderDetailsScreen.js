import React, { useEffect } from "react";
import { Alert, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrderAction } from "../Actions/orderActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const OrderDetailsScreen = ({ match }) => {
  const orderId = match.params.orderId;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    dispatch(detailsOrderAction(orderId));
  }, [dispatch, orderId]);

  return (
    <Container>
      <h1 className="mb-2">Order Details</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1 className="font-weight-bold text-muted">#{order._id} </h1>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src={order.thumbnail}></Card.Img>
                <Card.Body>
                  <Card.Title className="font-weight-bold">{order.tripName}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Alert variant={order.isPaid ? "success" : "danger"}>
                      {order.isPaid ? "Paid" : "Not Paid"}
                    </Alert>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Alert variant={order.isConfirmed ? "success" : "danger"}>
                      {order.isConfirmed
                        ? "Your Trip Is Confirmed"
                        : "Not confirmed"}
                    </Alert>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Total Price: <strong>{order.total}</strong>{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Your Guest: <strong>{order.guest}</strong>
                  </ListGroup.Item>
                  <ListGroup.Item size="lg">
                    Start Date: <strong>{new Date(order.start).toLocaleDateString()}</strong> 
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Start Date: <strong>{new Date(order.end).toLocaleDateString()}</strong>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Super Host: <strong>{order.superHost}</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OrderDetailsScreen;
