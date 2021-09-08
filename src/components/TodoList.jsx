import '../App.css';
import {useState} from "react"
function TodoList({todo, handleDelete})
{
    const {title, status, id} = todo;
    const blue = "#ccffff";
    const [bg, setBg] = useState(blue);

    const bgChange = () => {
        let newBg = "#66ff66";
        setBg(newBg);
    }

    return <div className="list" style={{backgroundColor:  bg}}>
        <div>
            {title}
        </div>
        <div>
            <button onClick={bgChange} className="done" style={{outline: 0}}></button>
            <button onClick={()=>handleDelete(id)} className="delete"></button>
        </div>
         
    </div>
}

export default TodoList;