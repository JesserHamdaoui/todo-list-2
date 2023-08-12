import './task-list.css'

const TaskList = ({tasks, setTasks}) => {

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
                {tasks.map(task => {
                    return(
                    <li key={task.key}>
                        <p className={task.done? 'done':''}>{task.text}</p>
                        <div className="btns">
                            <p>edit</p>
                            <p onClick={() => handleDelete(task.key)}>delete</p>
                        </div>
                    </li>   
                    )
                })}
            </ul>
        </div>
     );
}
 
export default TaskList;