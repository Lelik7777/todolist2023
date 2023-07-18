import React, { useState } from "react";
import { FilterType, TaskType } from "./App";

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
};
export default function Todolist({ title, tasks, removeTask }: PropsType) {
  let [filter, setFilter] = useState<FilterType>("all");
  const marginLeft = { marginLeft: "10px" };

  if (filter === "active") tasks = tasks.filter((task) => !task.isDone);
  if (filter === "completed") tasks = tasks.filter((task) => task.isDone);

  const arrayTasks = tasks.map((task) => (
    <li key={task.id}>
      <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
      <button
        style={marginLeft}
        onClick={() => {
          removeTask(task.id);
        }}>
        x
      </button>
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
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}
