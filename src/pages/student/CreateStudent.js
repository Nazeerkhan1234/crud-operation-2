import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
export default function CreateStudent() {
  return (
    <>
      <div className="container">
        <h1>Create Student</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select teacher</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nazeer Ahmad</td>
              <td>
                <button className="btn btn-success btn-sm me-1">View</button>
                <button className="btn btn-primary btn-sm me-1">Edit</button>
                <button className="btn btn-danger btn-sm me-1">Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
