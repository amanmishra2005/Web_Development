import { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDuedate] = useState("");

  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDuedate(event.target.value);
    console.log(`No of Updates are :${noOfUpdates.current}`);
  };

  // const handleAddButtonClicked = () => {
  //   onNewItem(todoName, dueDate);
  //   setTodoName("");
  //   setDuedate("");
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDuedate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        {/* <div className="row kg-row"> */}
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Task Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
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
