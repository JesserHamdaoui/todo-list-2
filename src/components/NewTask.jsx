import { useState } from "react";

const NewTask = ({tasks, setTasks}) => {

    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault()
        if(!input) return false
        setTasks([...tasks, {key: tasks.length + 1, done: false, text: input}])
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return ( 
        <div className="add-container">
            <form>
                <input type="text" placeholder="Add a task" value={input} onChange={handleChange}/>
                <button onClick={handleAddTask}>Add</button>
            </form>
            <hr />
        </div>
     );
}
 
export default NewTask;