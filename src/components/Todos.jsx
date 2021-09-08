import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import '../App.css';

const Todos = () => {

    const [text, setText] = useState('');
    const [todosList, setTodoList] = useState([]);

    const handleChange = (e)=>{
       // console.log("input box changed", e.target.value);
        setText(e.target.value);
    };

    const addTodoList = ()=>{
        const payload = {status: false, title: text, id: uuid()}
        setTodoList([...todosList, payload]);
        setText('');
        //setTodoList(todosList.concat(text));
    }

    const handleDelete = (id) => {
        let updatedList = todosList.filter((item) => item.id !== id);
        setTodoList(updatedList)
    }



    return <div>
        <h1>Todo List</h1>
        <div className="list">
            <input className="in" value={text} onChange={handleChange} type="text" placeholder="Add todo"/>
        <button onClick={addTodoList} className="btn"></button>
        </div>
        
        <div>
            {todosList.map((e, index) => <TodoList handleDelete={handleDelete} key={e.id} todo={e}/>)} 
       </div>
       
    </div>
};

export default Todos;

// {todosList.map(e => <div>{e.title} :- {e.status?"Done":"Not Done"}</div>)} 