import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchDate = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  const user: User = {
    name: "asasa",
    hobbies: ["映画", "ゲーム"]
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="20px" />
      <button onClick={onClickFetchDate}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
