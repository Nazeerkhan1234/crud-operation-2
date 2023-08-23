import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
export default function CreateStudent() {
  //hooks area
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/teachers`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.data[0].attributes.name);
        setTeacher(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://localhost:1337/api/students?populate=*`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.data[0].attributes.name);
        setStudent(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let createStudent = () => {
    // alert("okkk")
    let payload = {
      data: {
        name: document.getElementById("student_name").value,
        teachers: [parseInt(document.getElementById("teacher_name").value)],
      },
    };
    // console.log(payload);

    fetch("http://localhost:1337/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  let deleteStudent = (e) => {
    let tr=e.target.closest("tr");
    let sid = tr.querySelector("td:first-child").innerHTML;
    let x = window.confirm("Do you really want to delete student ?");
    if (x) {
      fetch(`http://localhost:1337/api/students/ ${sid}`, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => {
            tr.remove();
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  let updateStudent = () => {
    let payload = {
      data: {
        name: document.getElementById("student_name").value,
      },
    };
    console.log(payload);
  };

  return (
    <>
      <div className="container">
        <h1>Create Student</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select teacher</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="teacher_name"
              
            >
              {teacher.map((cv, idx, arr) => {
                return (
                  <option key={idx} value={cv.id}>
                    {cv.attributes.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              id="student_name"
              placeholder="Enter name"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              createStudent();
            }}
          >
            Submit
          </Button>
        </Form>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Teacher Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((cv, idx, arr) => {
              return (
                <tr key={idx}>
                  <td>{cv.id}</td>
                  <td>{cv.attributes.name}</td>
                  <td>
                        {
                        cv.attributes.teachers.data.map((cv2,idx2,arr2)=>{
                            return cv2.attributes.name
                        }).toString()

                        }

                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-1">
                      View
                    </button>
                    <button
                      className="btn btn-primary btn-sm me-1"
                      onClick={() => {
                        updateStudent();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm me-1"
                      onClick={(e) => {
                        deleteStudent(e);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
