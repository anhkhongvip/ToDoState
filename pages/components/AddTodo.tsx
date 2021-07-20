import React, { useState, ChangeEvent} from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
interface AddTodoProps {
  addTodo: AddTodo;
}
const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [dataForm, setDataForm] = useState<itemsObject>({
    email: '' ,
    fullname: '',
    age: '',
  });

  const changeForm = (e : ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    addTodo(dataForm);
    console.log('Send successful');
    setDataForm({
      email: '' ,
      fullname: '',
      age: '',
    })
  };

  return (
    <div>
      <Row className="mt-5">
        <Form>
          <Col xs="7">
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
          <Col xs="7" className="mt-4">
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
          <Col xs="7" className="mt-4">
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
          <Col xs="7" className="text-center mt-4">
            <Button variant="primary" type="submit" onClick={sendData}>
              Thêm mới
            </Button>{' '}
          </Col>
        </Form>
      </Row>
    </div>
  );
};

export default AddTodo;
