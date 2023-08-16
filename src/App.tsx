import { useState } from "react";
import "./App.css";
import OnOff from "./components/OnOff";
import Todolist, { FilterType } from "./Todolist";
import Messages from "./components/Messages";
import { v1 } from "uuid";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
  additional?: boolean;
};
export type TodoListsType = {
  id: string;
  title: string;
  filter: FilterType;
};
export type TasksType = {
  [key: string]: TaskType[];
};
function App() {
  const todoList1 = v1();
  const todoList2 = v1();

  let [on, setOn] = useState<boolean>(false);
  // let [tasks, setTasks] = useState<TaskType[]>([
  //   { id: v1(), title: "Html", isDone: true },
  //   { id: v1(), title: "React", isDone: false },
  //   { id: v1(), title: "Redux", isDone: false },
  // ]);
  const [tasks, setTasks] = useState<TasksType>({
    [todoList1]: [
      { id: v1(), title: "Html", isDone: true },
      { id: v1(), title: "React", isDone: false },
      { id: v1(), title: "Redux", isDone: false },
    ],
    [todoList2]: [
      { id: v1(), title: "Css", isDone: true },
      { id: v1(), title: "Angular", isDone: false },
      { id: v1(), title: "Mobx", isDone: false },
    ],
  });
  const [todoLists, setTodoLists] = useState<TodoListsType[]>([
    { id: todoList1, title: "what to learn now", filter: "all" },
    { id: todoList2, title: "what to learn in future", filter: "all" },
  ]);

  const removeTask = (idTodo: string, id: string) => {
    setTasks({
      ...tasks,
      [idTodo]: tasks[idTodo].filter((task) => task.id !== id),
    });
    console.log(tasks);
  };

  const addTask = (idTodo: string, title: string) =>
    setTasks({
      ...tasks,
      [idTodo]: [...tasks[idTodo], { id: v1(), title, isDone: false }],
    });
  //setTasks([...tasks, { id: v1(), title, isDone: false }]);

  const changeCheckedInput = (idTodo: string, id: string, isDone: boolean) =>
    setTasks({
      ...tasks,
      [idTodo]: tasks[idTodo].map((task) =>
        task.id === id ? { ...task, isDone } : task
      ),
    });
  //setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone } : task)));

  return (
    <div className="App">
      {/* //   <Todolist
    //     title="to learn"
    //     tasks={tasks}
    //     removeTask={removeTask}
    //     addTask={addTask}
    //     changeCheckedInput={changeCheckedInput}
    //   /> */}
      {todoLists.map((list) => (
        <Todolist
          listId={list.id}
          title={list.title}
          tasks={tasks[list.id]}
          removeTask={removeTask}
          addTask={addTask}
          changeCheckedInput={changeCheckedInput}
        />
      ))}
      <OnOff on={on} setOn={setOn} />
      <OnOff on={on} setOn={setOn} />
      <Messages />
    </div>
  );
}

export default App;
