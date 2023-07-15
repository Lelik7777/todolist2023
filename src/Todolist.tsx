import React from "react";
import { TaskType } from "./App";

type PropsType = {
  title: string;
  tasks: TaskType[];
  condition?: boolean;
  removeTask: (id:number) => void;
};

export default function Todolist({ title, tasks, condition,removeTask }: PropsType) {
  const arrayTasks = tasks.map((task: TaskType) => (
    <li key={task.id}>
      <input type="checkbox" checked={task.isDone} />
      <span>{task.title}</span>
      <button onClick={()=>removeTask(task.id)}>x</button>
    </li>
  ));
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>{arrayTasks}</ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      {condition && <div style={{ marginTop: "50px" }}>Condition</div>}
    </div>
  );
}
