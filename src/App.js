import { useEffect, useState } from "react";
import { NewTask, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")).filter((task) => {
      return !task.done;
    })
  );

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks]
  );

  return (
    <div className="App">
      <div className="container">
        <NewTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
