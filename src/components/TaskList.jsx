import './task-list.css'

const TaskList = ({tasks, setTasks}) => {

    const handleEdit = (key) => {
        console.log(key)
        setTasks(tasks.map(task => (task.id === key ? {...tasks, isEditing: !task.isEditing} : task ))
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
                            <div>
                                <input type="text" />
                                <button>OK</button>
                            </div>
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