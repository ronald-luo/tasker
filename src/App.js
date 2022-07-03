import React, { useState } from "react";
import TaskerForm from "./components/TodoForm";
import TaskerList from "./components/TodoList";

function App() {

  const [tasks, setTasks] = useState(
      {
          "task": [0, ""],
          "tasks": [],
      }
  );

  const addTask = () => {
    setTasks(
        {
            "task": "",
            "tasks": [...tasks.tasks, tasks.task]
        }
    )
  }

  const deleteTask = (id) => {
    const newTasks = tasks.tasks.filter(task => {
      return task[0] !== id
    })

    setTasks(
      {
        ...tasks,
        "tasks": [...newTasks]
      }
    )
  }

  const handleChange = (e) => {
    setTasks(
        {
            ...tasks,
            "task": [crypto.randomUUID(), e.target.value]
        }
    )
  }

  return (
    <main>
      <h1>tasker</h1>
      <TaskerForm addTask={ addTask } handleChange={ handleChange }/>
      <TaskerList deleteTask={ deleteTask } tasks={ tasks }/>
      <a className="ghost-link" href="https://www.ronald-luo.com/100-websites/"><img src="https://s2.svgbox.net/social.svg?ic=ghost&color=000" width="32" height="32"></img></a>
    </main>
  );
}

export default App;
