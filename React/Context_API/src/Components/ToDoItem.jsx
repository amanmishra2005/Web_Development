import { useContext } from "react";
import { TodoItemsContext } from "../Store/ToDo_Items_Store";

function ToDoItem({ date, task }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(task)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
