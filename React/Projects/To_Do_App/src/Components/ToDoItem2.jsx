function ToDoItem2(){
  let task = 'Go to College';
  let date = '16/08/2026';

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

export default ToDoItem2;