import '../App.css';
function TodoList({staus, title})
{
    return <div className="list">
        {title} <button className="delete"></button>
    </div>
}

export default TodoList;