import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";
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

import { getAllClients } from "../../api/my-clients/queries";
import { getAllTests } from "../../api/my-tests/queries";

const AddTest = () => {
  const clients = useTracker(() => {
    const query = getAllClients.clone();
    const handle = query.subscribe();

    if (handle.ready()) {
      return query.fetch();
    }
  }, []);

  const tests = useTracker(() => {
    const query = getAllTests.clone();
    const handle = query.subscribe();

    if (handle.ready()) {
      return query.fetch();
    }
  }, []);

  console.log(tests);

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

              const { name, client } = e.currentTarget.elements;

              Meteor.call(
                "addTest",
                {
                  name: name.value,
                  clientId: client.value,
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
              <Label>Client</Label>
              <Input type="select" name="client">
                {clients?.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
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
            {tests?.map((test) => (
              <ListGroupItem key={test._id}>{test.name}</ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTest;
