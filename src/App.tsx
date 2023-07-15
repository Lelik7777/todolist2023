import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
import OnOff from "./OnOff";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
  additional?: boolean;
};

function App() {
  let [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "React", isDone: false },
    { id: 3, title: "Redux", isDone: false },
  ]);

  const removeTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));
  return (
    <div className="App">
      <Todolist
        title={"what to learn"}
        tasks={tasks}
        condition={true}
        removeTask={removeTask}
      />

      <OnOff on={true} />
      <OnOff on={false} />
    </div>
  );
}

export default App;