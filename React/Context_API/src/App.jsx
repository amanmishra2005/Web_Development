import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/Welcome_Message";
import "./App.css";
import { TodoItemsContextProvider } from "./Store/ToDo_Items_Store";

function App() {
  return (
  <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <WelcomeMessage></WelcomeMessage>
      <ToDoItems></ToDoItems>
    </center>
  </TodoItemsContextProvider>
  );
}

export default App;



// const todoItemsReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//   } else if (action.type === "DELETE ITEM") {
//     newTodoItems = currTodoItems.filter(
//       (item) => item.name !== action.payload.itemName,
//     );
//   }
//   return newTodoItems;
// };

// function App() {
//   // const [todoItems, setTodoItems] = useState([]);
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

//   const addNewItem = (itemName, itemDueDate) => {
//     const newItemAction = {
//       type: "NEW ITEM",
//       payload: {
//         itemName,
//         itemDueDate,
//       },
//     };
//     dispatchTodoItems(newItemAction);
//   };

//   const deleteItem = (todoItemName) => {
//     const deleteItemAction = {
//       type: "DELETE ITEM",
//       payload: {
//         itemName: todoItemName,
//       },
//     };
//     dispatchTodoItems(deleteItemAction);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         addNewItem,
//         deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddToDo />
//         <WelcomeMessage></WelcomeMessage>
//         <ToDoItems></ToDoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;
