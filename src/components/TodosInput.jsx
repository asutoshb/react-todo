import '../App.css';
function TodosInput({value, handleChange, addTodoList})
{
   return (
            <div className="list">
            <input className="in" value={value} onChange={handleChange} type="text" placeholder="Add todo"/>
        <button onClick={addTodoList} className="btn"></button>
        
        </div>
        );
}

export {TodosInput};