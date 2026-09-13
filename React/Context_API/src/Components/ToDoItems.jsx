import { useContext } from "react";
import { TodoItemsContext } from "../Store/ToDo_Items_Store";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          ToDoItem
          date={item.dueDate}
          task={item.name}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
