let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoTasksImportance = [true, false];
let todoDueDate = ["11/12/24", "11/12/24"];

const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    const newDueDate = document.getElementById("new-task-date");

    if (newTask.value && newDueDate.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        todoTasksImportance.push(false);
        todoDueDate.push(newDueDate.value);

        newTask.value = "";
        newDueDate.value = "";

        updateTodoList();
    }
};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        // Add the <li> element to the list
        todoList.appendChild(newTodoTaskElement);
        //   <ul>
        //      <li><p>"walk chilli</p></li>
        //   </ul>
    }
};

const toggleComplete = (index) => {
    // If it is complete, set it to incomplete.
    // If it is incomplete, set it to complete.
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    console.log(todoTasksStatus);
    updateTodoList();
};

function toggleImportant(index) {
    if (todoTasksImportance[index] == false) {
        todoTasksImportance[index] = true;
    } else {
        todoTasksImportance[index] = false;
    }
    console.log(todoTasksImportance);
    updateTodoList();
}

const createNewTodoItemElement = (task, index) => {
    // Create a <p> element to store the task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = `${task} (Due: ${todoDueDate[index]})`;
    //   <p>"walk chilli Due: 11/12/24</p>

    // Apply a CSS class to the completed items
    if (todoTasksStatus[index] === true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    //   <li><p>"walk chilli</p></li>

    // Apply a CSS class to the important items
    if (todoTasksImportance[index] == true) {
        newTodoTaskElement.classList.add("important");
    }

    // Adding a button to mark each item as complete
    const completeButtonElement = document.createElement("input");
    //   <input type="button"></input>
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    // Important button to add important styling
    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.style.backgroundColor = "red";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };

    // Move item up button
    const upButtonElement = document.createElement("input");
    upButtonElement.type = "button";
    upButtonElement.value = "⬆️";
    upButtonElement.onclick = function () {
        moveTaskUp(index);
    };

    // Move item down button
    const downButtonElement = document.createElement("input");
    downButtonElement.type = "button";
    downButtonElement.value = "⬇️";
    downButtonElement.onclick = function () {
        moveTaskDown(index);
    };

    newTodoTaskElement.appendChild(importantButtonElement);
    newTodoTaskElement.appendChild(completeButtonElement);
    newTodoTaskElement.appendChild(upButtonElement);
    newTodoTaskElement.appendChild(downButtonElement);

    return newTodoTaskElement;
};

function moveTaskUp(index) {
    // if task is not already top of the list
    if (index > 0) {
        // Swap tasks
        [todoTasks[index], todoTasks[index - 1]] = [
            todoTasks[index - 1],
            todoTasks[index],
        ];
        [todoTasksStatus[index], todoTasksStatus[index - 1]] = [
            todoTasksStatus[index - 1],
            todoTasksStatus[index],
        ];
        [todoTasksImportance[index], todoTasksImportance[index - 1]] = [
            todoTasksImportance[index - 1],
            todoTasksImportance[index],
        ];
        [todoDueDate[index], todoDueDate[index - 1]] = [
            todoDueDate[index - 1],
            todoDueDate[index],
        ];
        updateTodoList();
    }
}

function moveTaskDown(index) {
    // if task is not already bottom of the list
    if (index < todoTasksImportance.length - 1) {
        // Swap tasks
        [todoTasks[index], todoTasks[index + 1]] = [
            todoTasks[index + 1],
            todoTasks[index],
        ];
        [todoTasksStatus[index], todoTasksStatus[index + 1]] = [
            todoTasksStatus[index + 1],
            todoTasksStatus[index],
        ];
        [todoTasksImportance[index], todoTasksImportance[index + 1]] = [
            todoTasksImportance[index + 1],
            todoTasksImportance[index],
        ];
        [todoDueDate[index], todoDueDate[index + 1]] = [
            todoDueDate[index + 1],
            todoDueDate[index],
        ];
        updateTodoList();
    }
}

updateTodoList();