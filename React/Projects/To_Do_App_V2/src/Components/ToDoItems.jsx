import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ ToDoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {ToDoItems.map((item) => (
        <ToDoItem
        key={item.name}
          date={item.dueDate}
          task={item.name}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
