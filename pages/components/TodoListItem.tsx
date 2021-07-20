import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
interface TodoListItemProps {
  toDoList: Array<itemsObject>;
}
const listItem = (todoList: Array<itemsObject>) => {
  return todoList.map((items, key) => {
    return (
      <Row className="mt-3 mb-3" key={key}>
        {' '}
        <Col xs="1">{key + 1}</Col>
        <Col xs="3">{items.email}</Col>
        <Col xs="2">{items.fullname}</Col>
        <Col xs="1">{items.age}</Col>
        <Col xs="2">
          <Button variant="warning">Sửa</Button>
          <Button variant="danger">Xóa</Button>
        </Col>
      </Row>
    );
  });
};
const TodoListItem: React.FC<TodoListItemProps> = ({ toDoList }) => {
  return (
    <>
      <Row className="mt-5">
        <Col xs="1">
          <h3>STT</h3>
        </Col>
        <Col xs="3">
          <h3>Email</h3>
        </Col>
        <Col xs="2">
          <h3>FullName</h3>
        </Col>
        <Col xs="1">
          <h3>Age</h3>
        </Col>
        <Col xs="2"><h3>Chức năng</h3></Col>
      </Row>
      {toDoList.length > 0 ? (
        listItem(toDoList)
      ) : (
        <Col xs="7">
          <h1 className="mt-3 text-xl-center">Danh sách trống</h1>
        </Col>
      )}
    </>
  );
};

export default TodoListItem;
