import React from "react";
import { FilterType, TaskType } from "./App";

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
  changeFilter: (value: FilterType) => void;
};
export default function Todolist({ title, tasks, removeTask,changeFilter }: PropsType) {
  const marginLeft = { marginLeft: "10px" };

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
        <button onClick={()=>changeFilter('all')}>All</button>
        <button onClick={()=>changeFilter('active')}>Active</button>
        <button onClick={()=>changeFilter('completed')}>Completed</button>
      </div>
    </div>
  );
}
