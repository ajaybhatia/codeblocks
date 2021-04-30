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

import { getAllClients } from "../../api/clients/queries";

const AddClient = () => {
  const clients = useTracker(() => {
    const query = getAllClients.clone();
    const handle = query.subscribe();

    if (handle.ready()) {
      return query.fetch();
    }
  }, []);

  console.log(clients);

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
              <ListGroupItem key={client._id}>{client.name}</ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AddClient;
