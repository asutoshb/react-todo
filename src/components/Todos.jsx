import React, { useState } from 'react';
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
        const payload = {status: false, title: text}
        setTodoList([...todosList, payload]);
        setText('');
        //setTodoList(todosList.concat(text));
    }



    return <div>
        <h1>Todo List</h1>
        <input className="in" value={text} onChange={handleChange} type="text" placeholder="Add todo"/>
        <button onClick={addTodoList} className="btn">+</button>
        <div>
            {todosList.map((e, index) => <TodoList status={e.status?"Done":"Not Done"} title={e.title}/>)} 
       </div>
       
    </div>
};

export default Todos;

// {todosList.map(e => <div>{e.title} :- {e.status?"Done":"Not Done"}</div>)} 