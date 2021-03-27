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

const FilterSidebar = ({history}) => {

  const [chevron, setChevron] = useState(false);
  const [keyword, setKeyWord] = useState('');
  const [child, setChild] = useState(2)
  const [adult, setAdults] = useState(2)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(keyword.trim()){
      history.push(`/search/${keyword}`)
    }
    else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
    <Row>
      <Col md={12} className="my-2">
        <Card>
          <Card.Body className="p-2">
            <p className="text-uppercase">
              <strong>Location</strong>
            </p>
           
              <FormControl
                type="text"
                placeholder="Add city landmark or address"
                className="mr-sm-2 border-0"
                onChange={(e)=> setKeyWord(e.target.value)}
              />
          
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
        <Accordion >
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
                    <strong>{adult} Adults, {child} Child</strong>
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
                      <Button variant="secondary" onClick={()=> setAdults(adult + 1)} >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      <strong className="mx-2 ">{adult}</strong>
                      <Button variant="secondary" onClick={()=> setAdults(adult - 1)} disabled={adult < 2 }>
                        <FontAwesomeIcon icon={faMinus}  />
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
                      <Button variant="secondary" onClick={()=> setChild(child + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      <strong className="mx-2">{child}</strong>
                      <Button variant="secondary" disabled={child < 2 } onClick={()=> setChild(child - 1)}>
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
        <Button type="submit" variant="block btn-success my-2 py-3 rounded-pill">
          <FontAwesomeIcon icon={faSearch}  /> Search
        </Button>
      </Col>
    </Row>
    </Form>
  );
};

export default FilterSidebar;
