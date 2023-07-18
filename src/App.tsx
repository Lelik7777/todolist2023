import { useState } from "react";
import "./App.css";
import OnOff from "./components/OnOff";
import Todolist from "./Todolist";
import Messages from "./components/Messages";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
  additional?: boolean;
};
export type FilterType = "all" | "active" | "completed";
function App() {
  let [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "Html", isDone: true },
    { id: 2, title: "React", isDone: false },
    { id: 3, title: "Redux", isDone: false },
  ]);

  const removeTask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="App">
      <Todolist title="to learn" tasks={tasks} removeTask={removeTask} />

      <OnOff on={true} />
      <OnOff on={false} />
      <Messages />
    </div>
  );
}

export default App;
