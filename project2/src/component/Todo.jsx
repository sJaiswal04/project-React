import { useState } from "react"
import "../style.css"
const Todo = () => {
    const [todo,setTodos] = useState([])
    const [input,setInput]= useState("")

    const handleSubmit = ()=>{
        setTodos((todo)=>{
            return todo.concat({
            text:input,
            id: Math.floor(Math.random()*10)
           }) 
        })
        setInput("");
    }

    const removeTodo = id => setTodos((todo) =>todo.filter((t)=>t.id !=id))
  return (
    <div className="container">
        <input type="text" placeholder="New todo" value={input} onChange={(e)=>setInput(e.target.value)} />

        <button onClick={handleSubmit}>Submit</button>

        <ul className="todo-list">
            {todo.map(({text,id})=>(
                <li className="todo" key={id}><span>{text}</span>
                <button className="close" onClick={()=>removeTodo(id)}>x</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
