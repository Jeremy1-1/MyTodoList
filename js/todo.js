addButton.addEventListener("click", createTodo);

function createTodo(e) {
    e.preventDefault();

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoList.appendChild(todoContainer);

    const listElement = document.createElement("li");
    listElement.classList.add("todo-item");
    listElement.innerHTML = inputField.value;
    todoContainer.appendChild(listElement);
    inputField.value = "";

    const checkButton = document.createElement("button");
    checkButton.classList.add("check-btn");
    checkButton.innerHTML = '<i class="fas fa-check fa-2x"></i>';
    todoContainer.appendChild(checkButton);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="far fa-trash-alt fa-2x"></i>';
    todoContainer.appendChild(trashButton); 

    checkButton.addEventListener("click", function(){
        listElement.style.textDecoration = "line-through";
        listElement.style.transition = "all 3s linear";
    })

    trashButton.addEventListener("click", del);

    function del(){
        todoContainer.removeChild(listElement);
        todoContainer.removeChild(trashButton);
        todoContainer.removeChild(checkButton);
        todoContainer.style.margin = "0 0 0 0";
    }

    // let empty = inputField = ""; 

    // if (empty){
        // todoContainer.removeChild(trashButton);
        // todoContainer.removeChild(checkButton);
    // }
}