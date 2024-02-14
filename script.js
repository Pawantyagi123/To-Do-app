function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
    
    if (todoInput.value === "") {
        alert("Please enter a task!");
        return;
    }
    
    var li = document.createElement("li");
    li.textContent = todoInput.value;
    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    todoInput.value = "";
}

