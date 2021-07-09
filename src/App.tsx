import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

export default function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchDate = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchDate}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
