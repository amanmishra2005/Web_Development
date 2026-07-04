import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      {/* <h1>To-Do App</h1> */}

      {/* Using Components */}

      <AppName />
      <AddToDo />
      <div class ="items-container">
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
      

      {/* Normal Method */}

      {/* <div class = 'container'>

      <div class = 'row'>
        <div class = 'col-6'>
          <input type="text" placeholder="Enter Task Here" />
        </div>
        <div class = 'col-4'>
          <input type="date" />
        </div>
        <div class = 'col-2'>
          <button type="button" class="btn btn-success">Add</button>
        </div>
      </div>

      <div class = 'row'>
        <div class = 'col-6'>
          Buy Milk
        </div>
        <div class = 'col-4'>
          26/5/2026
        </div>
        <div class = 'col-2'>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

      <div class = 'row'>
        <div class = 'col-6'>
          Go to College
        </div>
        <div class = 'col-4'>
          16/08/2026
        </div>
        <div class = 'col-2'>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

    </div> */}
    </center>
  );
}

export default App;
