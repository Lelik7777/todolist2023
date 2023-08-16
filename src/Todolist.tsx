import React, { useState, MouseEvent, ChangeEvent, KeyboardEvent } from "react";
import { TaskType } from "./App";

type PropsType = {
  listId: string;
  title: string;
  tasks: TaskType[];
  removeTask: (idTodo: string, id: string) => void;
  addTask: (idTodo: string, title: string) => void;
  changeCheckedInput: (idTodo: string,id: string, isDone: boolean) => void;
};
export type FilterType = "all" | "completed" | "active";

export default function Todolist({
  listId,
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
    const handlerOnClick = () => removeTask(listId, task.id);
    const addInputCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) =>
      changeCheckedInput(listId,task.id, e.currentTarget.checked);
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

    addTask(listId, taskTitle);
    setTaskTitle("");
  };
  const addInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
    setError(false);
  };
  const addKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!taskTitle) {
      setError(true);
      return;
    }
    if (e.key === "Enter" && taskTitle) {
      addTask(listId,taskTitle);
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
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => changeFilter("all")}>
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => changeFilter("active")}>
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => changeFilter("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}
