import React, { useState} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import EditTodo from './EditTodo';
interface TodoListItemProps {
  toDoList: Array<itemsObject>;
  sendEditData : SendEditTodo;
  removeItem : RemoveItem;
}
const TodoListItem: React.FC<TodoListItemProps> = ({ toDoList, sendEditData, removeItem }) => {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<itemsObject>({
    id:'',
    email: '',
    fullname: '',
    age: '',
  });

  const handlerClickBtnEdit = (data : itemsObject) => {
    setToggleEdit(!toggleEdit);
    setDataEdit(data);
  };

  const handlerClickBtnRemove = (id : String) =>{
      removeItem(id);
  }

  const checkEditTodo : CheckEdit = (check : boolean) => {
    setToggleEdit(check);
  }

  const sendEditTodo : SendEditTodo = (data : itemsObject) => {
    sendEditData(data);
  }

  const listItem = (todoList: Array<itemsObject>) => {
    return todoList.map((item, key) => {
      return (
        <Col xs="9">
          <Row className="mt-3 mb-3" key={key}>
            <Col xs="1">{key + 1}</Col>
            <Col xs="4">{item.email}</Col>
            <Col xs="3">{item.fullname}</Col>
            <Col xs="1">{item.age}</Col>
            <Col xs="3">
              <Button variant="warning" onClick={() => handlerClickBtnEdit(item)}>
                Sửa
              </Button>
              <Button variant="danger" onClick={() => handlerClickBtnRemove(item.id)}>Xóa</Button>
            </Col>
          </Row>
        </Col>
      );
    });
  };

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
        <Col xs="2">
          <h3>Chức năng</h3>
        </Col>
      </Row>
      <Row>
        {toDoList.length > 0 ? (
          listItem(toDoList)
        ) : (
          <Col xs="7">
            <h1 className="mt-3 text-xl-center">Danh sách trống</h1>
          </Col>
        )}
        <Col xs="3">{toggleEdit ? <EditTodo editTodo={dataEdit} checkEditTodo = {checkEditTodo} sendEditTodo ={sendEditTodo}/> : null}</Col>
      </Row>
    </>
  );
};

export default TodoListItem;
