import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";

function App() {
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "26/6/26",
    },
    {
      name: "Go to College",
      dueDate: "26/6/26",
    },
    {
      name: "Buy Bread",
      dueDate: "26/6/26",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems ToDoItems={todoItem}></ToDoItems>
    </center>
  );
}

export default App;
