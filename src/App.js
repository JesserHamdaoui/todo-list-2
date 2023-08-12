import { useState } from "react";
import { NewTask, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState([
    { key: 1, done: false, text: "Buy groceries" },
    { key: 2, done: true, text: "Clean the house" },
    { key: 3, done: false, text: "Finish React project" },
    { key: 4, done: true, text: "Go for a walk" },
    { key: 5, done: false, text: "Read a book" },
  ]);

  return (
    <div className="App">
      <NewTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
