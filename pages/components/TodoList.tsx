import Head from 'next/head';
import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import AddTodo from './AddTodo';
import TodoListItem from './TodoListItem';
const TodoList: React.FC = () => {
    const [data, setData] = useState<Array<itemsObject>>([]);
    const addTodo : AddTodo = (newData : itemsObject) => {
        setData([...data, newData]);
    } 
    console.log(data);
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Todo State </title>
            </Head>
            <header>
                <Container>
                    <h1 className="text-center">ToDo State</h1>
                    <AddTodo addTodo = {addTodo}/>
                    <TodoListItem toDoList ={data}/>
                </Container>
            </header>
        </div>
    )
}

export default TodoList
