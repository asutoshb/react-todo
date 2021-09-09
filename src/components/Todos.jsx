import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import {TodosInput} from './TodosInput';
import '../App.css';

const Todos = () => {

    const [text, setText] = useState('');
    const [todosList, setTodoList] = useState([]);
    const [showall, setShowall] = useState(true);

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

        const toggle = (id) => {
        console.log(id);
        const updatedList = todosList.map(el => 
            el.id === id ?  {...el, status: !el.status}: el);
            console.log(updatedList);
            
            setTodoList(updatedList);

            
    }



    return <div>
        <h1>Todo List</h1>
        <TodosInput value={text} handleChange={handleChange} addTodoList={addTodoList}/>
        
        
        <div>
            {todosList.filter((item) => (showall ? true: item.status)).map((e) => <TodoList handleDelete={handleDelete} key={e.id} todo={e} toggle={toggle}/>)} 
       </div>
       
       <div>
           <button className="showall" onClick={() => setShowall(!showall)}>{showall ? "Show only finished tasks" : "Show all tasks"}</button>
       </div>

    </div>
};

export default Todos;

// {todosList.map(e => <div>{e.title} :- {e.status?"Done":"Not Done"}</div>)} 