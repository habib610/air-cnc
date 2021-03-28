import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrderAction } from "../Actions/orderActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { PayPalButton } from "react-paypal-button-v2";


const OrderDetailsScreen = ({ match }) => {
  const [sdkReady, setSdkReady] = useState(false)
  const orderId = match.params.orderId;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    const addPayPalScript = async()=> {
      const {data} = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = "text/javascript"
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = ()=> {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }
    if(!order._id){
      dispatch(detailsOrderAction(orderId));
    } else {
      if(!order.isPaid){
        if(!window.paypal){
          addPayPalScript()
        } else {
          setSdkReady(true)
        }
      }
    }
    
  }, [dispatch, orderId, order]);
const successPaymentHandler = () => {

}
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
                    <Alert className="font-weight-bold" variant={order.isPaid ? "success" : "danger"}>
                      {order.isPaid ? "Paid" : "Not Paid"}
                    </Alert>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Alert className="font-weight-bold" variant={order.isConfirmed ? "success" : "danger"}>
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
            <Col md={6}>
              <ListGroup >
                <ListGroup.Item>
                  <h4 className="font-weight-bold text-center text-uppercase" >Order Summary</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 >{order.tripName}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 >Total Price: $<span className="font-weight-bold">{order.total}</span>  </h4>
                </ListGroup.Item>
              </ListGroup>
              {
                !order.isPaid && (
                  
                    <ListGroup>
                      <ListGroup.Item>
                        {
                          !sdkReady ? <Loader /> : (
                            <PayPalButton amount={order.total} onSuccess={successPaymentHandler} />
                          )
                        }
                      </ListGroup.Item>
                    </ListGroup>
                  
                )
              }
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OrderDetailsScreen;
