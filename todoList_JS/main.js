const addBtn = document.querySelector("#add-task-btn");
const todoWrapper = document.querySelector(".todos-wrapper");
const input = document.getElementById("description-task");

let tasks;
localStorage.length ? tasks = JSON.parse(localStorage.getItem("tasks")) : tasks = [];

const fillTodoWrapper = (task)=>{
  todoWrapper.innerHTML += `
        <div class="todo-item ${task.completed ? "checked" : ""}">
          <div class="description">
            <p>${task.task}</p>
          </div>
          <div class="buttons">
            <input  type="checkbox" onclick = "checkTodo(this)" ${task.completed ? "checked" : ""}>
            <button onclick = "deleteTask(this)">Delete</button>
          </div>
        </div>`;
}

// getting todos from local storage
const fillFromStorage = ()=>{
  if(tasks.length != 0){
    todoWrapper.innerHTML = "";
    tasks.forEach(task => {
      fillTodoWrapper(task);
    });
  }
  else {
    todoWrapper.innerHTML = "";
  }
} 

fillFromStorage();

// sending completed todos to the end
const filterTodos = ()=>{
  let done = tasks.filter(task => task.completed == true);
  let notDone = tasks.filter(task => task.completed == false);

  let filteredTasks = [...notDone,...done];
  tasks = filteredTasks;
}


addBtn.addEventListener('click',()=>{
  let task = input.value;
  if(task.length == 0){
    alert("Please add description to the task");
  }
  else{
    input.value = '';

    let taskObj = {
      task:task,
      completed:false
    };

    fillTodoWrapper(taskObj);
  
    tasks.push(taskObj);
    updateToLocalStorage(tasks);
  }
})


const updateToLocalStorage = (tasks)=>{
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


const checkTodo = (el)=>{
  let checkedTodo = el.parentElement.parentElement;
  checkedTodo.classList.toggle("checked");

  let indexOfCheckTodo = getElementIndex(checkedTodo);

  tasks[indexOfCheckTodo].completed = !tasks[indexOfCheckTodo].completed;
  filterTodos();
  updateToLocalStorage(tasks);
  fillFromStorage();
}


const deleteTask = (el)=>{
  let deletedTask = el.parentElement.parentElement;
  deletedTask.classList.add("delition");

  let indexOfDelTodo = getElementIndex(deletedTask);

  tasks.splice(indexOfDelTodo,1);
  updateToLocalStorage(tasks);

  setTimeout(()=>{
    fillFromStorage();
  },500);
}

const getElementIndex = (el) => {
  let todos = [...todoWrapper.children]; //htmlcollection to array 
  let indexOfTodo = todos.indexOf(el);
  return indexOfTodo;
}