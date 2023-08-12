import './task-list.css'

const TaskList = ({tasks, setTasks}) => {

    const handleEdit = (key) => {
        console.log(key)
        setTasks(tasks.map(task => (task.key === key ? {...task, isEditing: !task.isEditing} : task ))
    )}

    const handleDelete = (key) => {
        setTasks(tasks.filter(task => {
            return(
                task.key !== key
            )
        }))
    }

    return ( 
        <div>
            <ul>
                {console.log(tasks)}
                {tasks.map(task => {
                    if(task.isEditing) {
                        return(
                            <li key={task.key}>
                                <input type="text" />
                                <button>OK</button>
                            </li>
                        )
                    }
                    else {
                        return(
                            <li key={task.key}>
                                <p className={task.done? 'done':''}>{task.text}</p>
                                <div className="btns">
                                    <p onClick={() => handleEdit(task.key)}>edit</p>
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