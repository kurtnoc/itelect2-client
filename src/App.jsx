import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

// GT13:
const STARTING_TASKS = [
  { id: 1, title: "Set up project repo", dueDate: "2026-08-20" },
  { id: 2, title: "Wire up associations", dueDate: "2026-08-24" },
  { id: 3, title: "Deploy to Render", dueDate: "2026-10-14" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: "No due date",
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="task-manager">
      <h1>Task Manager</h1>
      <p className="count">{tasks.length} tasks</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;