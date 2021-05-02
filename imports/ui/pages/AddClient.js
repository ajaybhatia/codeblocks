import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

import getAllClients from "/imports/api/clients/queries/getAllClients";

const AddClient = () => {
  const clients = useTracker(() => {
    const query = getAllClients.clone();
    const handle = query.subscribe();

    if (handle.ready()) {
      return query.fetch();
    }
  }, []);

  return (
    <Container>
      <Row>
        <Link to="/">Home</Link>
      </Row>
      <Row>
        <Col md={6} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              const { name } = e.currentTarget.elements;

              Meteor.call(
                "addClient",
                {
                  name: name.value,
                },
                (error) => {
                  if (error) {
                    console.log(error.message);
                  }
                }
              );
            }}
          >
            <FormGroup>
              <Label>Name</Label>
              <Input name="name" />
            </FormGroup>
            <Button type="submit">Add</Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6} className="mx-auto">
          <ListGroup>
            {clients?.map((client) => (
              <ListGroupItem
                key={client._id}
                className="d-flex justify-content-between"
              >
                <span>{client.name}</span>
                <span>
                  {client?.tests?.map((test) => test.name).join(", ")}
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AddClient;
