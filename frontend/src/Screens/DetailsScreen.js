import {
  faArrowRight,
  faCheck,
  faHandSparkles,
  faHome,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Image,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import data from "../data";

const DetailsScreen = ({ match }) => {
  const id = match.params.id;
  console.log(id);
  const detailsTrip = data.find((item) => item._id === Number(id));
  console.log(detailsTrip);
  const {
    name,
    guestCapacity,
    innerView,
    frontView,
    total,
    rating,
    numReviews,
    perPerson,
    description,
    bedrooms,
    beds,
    baths,
    superHost,
    guideThumbnail,
    location,
  } = detailsTrip;
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Row noGutters className="mb-5">
            <Col md={6}>
              <Image style={{ width: "50vw" }} src={innerView} fluid />
            </Col>
            <Col sm={12} md={6}>
              <Image style={{ width: "50vw" }} src={frontView} fluid />
            </Col>
          </Row>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col md={8}>
            <h1>Left side</h1>
            <div
              style={{ alignItems: "center" }}
              className="d-flex justify-content-between p-2 mb-2"
            >
              <h2>{name}</h2>
              <div>
                <Image
                  src={guideThumbnail}
                  className="rounded-circle"
                  width={70}
                />
                <p>{superHost}</p>
              </div>
            </div>
            <p className="text-secondary">{location}</p>
            <p className="text-muted">
              {guestCapacity} guests, {bedrooms} bedrooms, {beds} beds, {baths}{" "}
              bathrooms{" "}
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
                <p className="text-secondary">You can check wih the doorman</p>
              </Col>
            </Row>
            <Row className="my-1">
              <Col md={1}>
                <FontAwesomeIcon icon={faHandSparkles} className="fa-2x success" />
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
                  {superHost} is your Super host
                </p>
                <p className="text-secondary">
                  Super hosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </p>
              </Col>
            </Row>
            <p className="text-secondary mt-4">
              {description}
              worm.
            </p>
          </Col>
          <Col md={4}>
            <h1>Right side</h1>
            <Card>
              <Card.Body>
                <h3>{perPerson}/night</h3>
                <p>
                  <FontAwesomeIcon icon={faStar} color="#2bde8c" />{" "}
                  <small>
                    {rating} ({numReviews} reviews)
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
                        <p className="mb-0"><small>$34 x 4 nights</small></p>
                        <p className="mb-0"><small>$135</small></p>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0"><small>Cleaning Free</small></p>
                        <p className="mb-0"><small>$13</small></p>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0"><small>Service Free</small></p>
                        <p className="mb-0"><small>$10</small></p>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                        <p className="mb-0"><strong>Total</strong></p>
                        <p className="mb-0"><strong>$135</strong></p>
                    </ListGroup.Item>
                </ListGroup>
                <Button variant="block btn-success my-2 py-3 "> Reserved
        </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row></Row>
    </Container>
  );
};

export default DetailsScreen;
