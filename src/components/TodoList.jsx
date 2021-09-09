import '../App.css';
import {useState} from "react"
function TodoList({todo, handleDelete, toggle})
{
    const {title, status, id} = todo;
    const blue = "#ccffff";
    const [bg, setBg] = useState(blue);
    const [chng, setLine] = useState("none");

    const bgChange = () => {
        let newBg = "#66ff66";
        setBg(newBg);
    }

    const textChange = () => {
        let chng = "line-through";
        setLine(chng);
    }

    return <div className="list" style={{backgroundColor:  bg}}>
        <div style={{textDecoration: chng}}>
            {title}
        </div>
        <div>
            <button onClick={() =>{toggle(id); bgChange(); textChange()}} className="done" style={{outline: 0}}></button>
            <button onClick={()=>handleDelete(id)} className="delete"></button>
        </div>
         
    </div>
}

export default TodoList;