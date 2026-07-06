import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"

const ToDoItems = ({ ToDoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {ToDoItems.map((item) => (
      <ToDoItem date={item.dueDate} task={item.name}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
