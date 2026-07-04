function ToDoItem1(){
  let task = 'Buy Milk';
  let date = '26/05/2026';

 return(
  <div class = 'container'>
      <div class = 'row kg-row'>
        <div class = 'col-6'>
          {task}
        </div>
        <div class = 'col-4'>
          {date}
        </div>
        <div class = 'col-2'>
          <button type="button" class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
 );
}

export default ToDoItem1;