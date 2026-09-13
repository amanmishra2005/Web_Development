import { useContext } from "react";
import styles from "./Welcome_Message.module.css";
import { TodoItemsContext } from "../Store/ToDo_Items_Store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>All tasks done! Enjoy your Day 😍</p>
    )
  );
};

export default WelcomeMessage;
