import { useState } from "react";
import { NewTask, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState([
    { key: 1, done: false, text: "Buy groceries", isEditing: false },
    { key: 2, done: true, text: "Clean the house", isEditing: false },
    { key: 3, done: false, text: "Finish React project", isEditing: false },
    { key: 4, done: true, text: "Go for a walk", isEditing: false },
    { key: 5, done: false, text: "Read a book", isEditing: false },
  ]);

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
