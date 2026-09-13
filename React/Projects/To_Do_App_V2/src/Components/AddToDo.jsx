import { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDuedate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDuedate(event.target.value);
  // };

  // const handleAddButtonClicked = () => {
  //   onNewItem(todoName, dueDate);
  //   setTodoName("");
  //   setDuedate("");
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    // console.log(`${todoName} due on ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        {/* <div className="row kg-row"> */}
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Task Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}
          // value={dueDate} 
          // onChange={handleDateChange} 
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <IoMdAdd />
          </button>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
}

export default AddToDo;
