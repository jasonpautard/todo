// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveTask);


// Save tasks
function saveTask(e){

  var todoInput = document.getElementById('todoInput').value;

  var todoTask = {
    task: todoInput
  }

// Test if todoTasks is null
if(localStorage.getItem('todoTasks') === null){
  // Init array
  var todoTasks = [];
  // Add to array
  todoTasks.push(todoTask);
  // Set to LocalStorage
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
} else {
  // Get todoTasks from LocalStorage
  var todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
  // Add todoTasks to array
  todoTasks.push(todoTask)
  // Re-set back to LocalStorage
  localStorage.setItem('todoTasks', JSON.stringify(todoTasks))
}

// Re-fetch todoTasks
fetchToDoTasks();

// Prevent form from submitting
e.preventDefault();
}

// Delete todoTask
function deleteToDoTask(task){
    // Get todoTasks from LocalStorage
    var todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
    // Loop trought todoTasks
    for(var i=0; i < todoTasks.length; i++){
      if(todoTasks[i].task == task){
        // Remove from array
        todoTasks.splice(i, 1);
      }
}
// Re-set back to LocalStorage
localStorage.setItem('todoTasks', JSON.stringify(todoTasks));

// Re-fetch todoTasks
fetchToDoTasks();
}


// Fetch todoTasks
function fetchToDoTasks(){
  // Get todoTasks from LocalStorage
  var todoTasks = JSON.parse(localStorage.getItem('todoTasks'));
  // Get output id
  var todoTasksResults = document.getElementById('todoList');
  // Build output
  todoTasksResults.innerHTML = '';
  for(var i=0; i < todoTasks.length; i++){
      var task = todoTasks[i].task
      todoTasksResults.innerHTML +=
      '<li class="list-group-item">'+'<button onclick="deleteToDoTask(\''+task+'\')" class="btn btn-outline-primary btn-circle mr-3 float-left\'"></button>'+task+'</li>'
      todoInput.value = "";
  }
}

/*
// Local storage test
localStorage.setItem('test', 'hello world');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));
*/
