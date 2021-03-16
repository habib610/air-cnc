import React, { useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Form,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChevronDown,
  faChevronUp,
  faMinus,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const FilterSidebar = () => {
  const [chevron, setChevron] = useState(false);
  return (
    <Row>
      <Col md={12} className="my-2">
        <Card>
          <Card.Body className="p-2">
            <p className="text-uppercase">
              <strong>Location</strong>
            </p>
            <Form >
              <FormControl
                type="text"
                placeholder="Add city landmark or address"
                className="mr-sm-2 border-0"
              />
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="my-3">
        <Card className="border-rounded">
          <Card.Body className="px-2 py-3  ">
            <Row>
              <Col className="mx-1">
                <p className="text-secondary small p-0 m-0"><small>Arrival</small></p>
                <p className="mb-0">
                24/04/2020
                </p>
              </Col>
              <Col className="ml-1">
                <FontAwesomeIcon className="fa-2x" icon={faCalendarAlt} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="my-3">
        <Card>
          <Card.Body className="px-2 py-3">
            <Row>
              <Col className="mx-1">
                <p className="text-secondary small p-0 m-0"><small>Departure</small></p>
                <p className="mb-0">
                  24/04/2020
                </p>
              </Col>
              <Col className="ml-1">
                <FontAwesomeIcon className="fa-2x" icon={faCalendarAlt} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} className="my-2">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              onClick={() => setChevron(!chevron)}
              className="px-3 py-1"
            >
              <div
                className="d-flex justify-content-between"
                style={{ alignItems: "center" }}
              >
                <div>
                  <p className="text-secondary m-0 p-0">
                    <small>Guest</small>
                  </p>
                  <p className="mb-1">
                    {" "}
                    <strong>2 Adults, 1 Child</strong>{" "}
                  </p>
                </div>
                {chevron ? (
                  <FontAwesomeIcon  icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon  icon={faChevronUp} />
                )}
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="py-1">
               <ListGroup>
                 <ListGroup.Item>
                 <div
                  className="d-flex justify-content-between"
                  style={{ alignItems: "center" }}
                >
                  <p className="text-secondary ">
                    <strong>Adults</strong>
                  </p>
                  <div>
                    <p className="pt-2">
                      <Button variant="secondary">
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      <strong className="mx-2 ">2</strong>
                      <Button variant="secondary">
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </p>
                  </div>
                </div>
                 </ListGroup.Item>
               </ListGroup>

                <ListGroup variant="flush">
                  <ListGroup.Item variant="flush">
                  <div
                  className="d-flex justify-content-between"
                  style={{ alignItems: "center" }}
                >
                  <p className="text-secondary ">
                    <strong>Child</strong>
                  </p>
                  <div>
                    <p className="pt-2">
                      <Button variant="secondary">
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      <strong className="mx-2">2</strong>
                      <Button variant="secondary">
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </p>
                  </div>
                </div>
                  </ListGroup.Item>
                </ListGroup>
                <div className="d-flex justify-content-end my-2">
                  <Button variant="outline-success">Apply</Button>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Button variant="block btn-success my-2 py-3 rounded-pill">
          <FontAwesomeIcon icon={faSearch} /> Search
        </Button>
      </Col>
    </Row>
  );
};

export default FilterSidebar;
