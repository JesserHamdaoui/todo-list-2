import { useState } from 'react'
import './task-list.css'

const TaskList = ({tasks, setTasks}) => {

    const [input, setInput] = useState('')

    const handleEdit = (targetTask) => {
        if(targetTask.done || tasks.filter(task => {
            return(
                task.isEditing
            )
        }).length !== 0) {
            return false
        }
        setInput(targetTask.text)
        setTasks(tasks.map(task => (task.key === targetTask.key ? {...task, isEditing: !task.isEditing} : task ))
    )}

    const handleDelete = (key) => {
        setTasks(tasks.filter(task => {
            return(
                task.key !== key
            )
        }))
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleUpdate = (key) => {
        if(!input) return false
        setTasks(tasks.map(task => (task.key === key ? {...task, isEditing: !task.isEditing, text: input} : task ))
    )}

    const toggleCheckbox = (key) => {
        setTasks(tasks.map(task => (task.key === key ? {...task, done: !task.done} : task ))
    )}
    
    return ( 
        <div>
            <ul>
                {tasks.map(task => {
                    if(task.isEditing) {
                        return(
                            <li key={task.key}>
                                <input className='edit-input' value={input} onChange={(e) => handleChange(e)} type="text" />
                                <button className='ok-btn' onClick={() => handleUpdate(task.key)}>OK</button>
                            </li>
                        )
                    }
                    else {
                        return(
                            <li key={task.key}>
                                <input type="checkbox" checked={task.done? true:false} onChange={() => toggleCheckbox(task.key)}/>
                                <p className={task.done? 'done':''}>{task.text}</p>
                                <div className="btns">
                                    <p onClick={() => handleEdit(task)}>edit</p>
                                    <p onClick={() => handleDelete(task.key)}>delete</p>
                                </div>
                            </li>   
                        )
                    }
                })}
            </ul>
        </div>
     );
}
 
export default TaskList;