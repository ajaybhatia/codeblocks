import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem } from "reactstrap";

export default Home = () => {
  return (
    <Container>
      <Col>
        <ListGroup>
          <ListGroupItem>
            <Link to="/add-test">Add Test</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/add-client">Add Client</Link>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Container>
  );
};
