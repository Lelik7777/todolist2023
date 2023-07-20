import React, { useState, MouseEvent, ChangeEvent, KeyboardEvent } from "react";
import { TaskType } from "./App";

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void;
  addTask: (title: string) => void;
  changeCheckedInput: (id: string, isDone: boolean) => void;
};
type FilterType = "all" | "completed" | "active";

export default function Todolist({
  title,
  tasks,
  removeTask,
  addTask,
  changeCheckedInput,
}: PropsType) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const marginLeft = { marginLeft: "10px" };

  if (filter === "active") tasks = tasks.filter((task) => !task.isDone);
  if (filter === "completed") tasks = tasks.filter((task) => task.isDone);

  const arrayTasks = tasks.map((task) => {
    const handlerOnClick = () => removeTask(task.id);
    const addInputCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) =>
      changeCheckedInput(task.id, e.currentTarget.checked);
    return (
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={addInputCheckboxHandler}
        />{" "}
        <span>{task.title}</span>
        <button style={marginLeft} onClick={handlerOnClick}>
          x
        </button>
      </li>
    );
  });
  const addTaskHandler = () => {
    if (!taskTitle) {
      setError(true);
      return;
    }

    addTask(taskTitle);
    setTaskTitle("");
  };
  const addInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
    setError(false);
  };
  const addKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(!taskTitle){
      setError(true);
      return;
    }
    if (e.key === "Enter" && taskTitle) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  const changeFilter = (title: FilterType) => setFilter(title);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={taskTitle}
          onChange={addInputHandler}
          onKeyDown={addKeyDownHandler}
          className={error ? "error" : ""}
        />
        <button onClick={addTaskHandler}>+</button>
        {error && <div className="error-message">title is required</div>}
      </div>
      <ul>{arrayTasks}</ul>
      <div>
        <button onClick={() => changeFilter("all")}>All</button>
        <button onClick={() => changeFilter("active")}>Active</button>
        <button onClick={() => changeFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}
