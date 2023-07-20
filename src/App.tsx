import { useState } from "react";
import "./App.css";
import OnOff from "./components/OnOff";
import Todolist from "./Todolist";
import Messages from "./components/Messages";
import { v1 } from "uuid";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
  additional?: boolean;
};

function App() {
  let [tasks, setTasks] = useState<TaskType[]>([
    { id: v1(), title: "Html", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
  ]);

  const removeTask = (id: string) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const addTask = (title: string) =>
    setTasks([...tasks, { id: v1(), title, isDone: false }]);
  const changeCheckedInput = (id: string, isDone: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, isDone: isDone } : task))
    );
  };
  return (
    <div className="App">
      <Todolist
        title="to learn"
        tasks={tasks}
        removeTask={removeTask}
        addTask={addTask}
        changeCheckedInput={changeCheckedInput}
      />

      <OnOff on={true} />
      <OnOff on={false} />
      <Messages />
    </div>
  );
}

export default App;
