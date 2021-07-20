import React, { useState, ChangeEvent } from 'react';
import { Col, Form, Button } from 'react-bootstrap';

interface EditTodoProp {
  editTodo: itemsObject;
  checkEditTodo : CheckEdit;
  sendEditTodo : SendEditTodo;
}

const EditTodo: React.FC<EditTodoProp> = ({ editTodo, checkEditTodo, sendEditTodo }) => {
  const [dataForm, setDataForm] = useState<itemsObject>({
    id : editTodo.id,
    email: editTodo.email,
    fullname: editTodo.fullname,
    age: editTodo.age
  });

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    checkEditTodo(false);
    sendEditTodo(dataForm);
    console.log('Edit successful');
   
  };

  return (
    <div>
      <h3 className="text-center">Sửa thông tin</h3>
      <Form>
        <Col>
          <Form.Group className="mb-6" controlId="formEmail">
            <Form.Label>Email address : </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={changeForm}
              value={dataForm.email}
            />
          </Form.Group>
        </Col>
        <Col className="mt-4">
          <Form.Group className="mb-6" controlId="formFullName">
            <Form.Label>Full Name : </Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              placeholder="Enter fullname"
              onChange={changeForm}
              value={dataForm.fullname}
            />
          </Form.Group>
        </Col>
        <Col className="mt-4">
          <Form.Group className="mb-6" controlId="formAge">
            <Form.Label>Age : </Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Enter age"
              onChange={changeForm}
              value={dataForm.age}
            />
          </Form.Group>
        </Col>
        <Col className="text-center mt-4 d-grid">
          <Button className="btn-block" variant="primary" type="submit" onClick= {sendData}>
            Sửa
          </Button>{' '}
        </Col>
      </Form>
    </div>
  );
};

export default EditTodo;
