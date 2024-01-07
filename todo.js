const textInput = document.querySelector("input");
const addBtn = document.querySelector("#add-btn");
const listContainer = document.getElementById("list-container");
let currentId = 0;

addBtn.addEventListener("click", addTask);

function addTask() {
    if (textInput.value === "") {
        alert("Please enter your new task!")
    }
    else{
        currentId++;
        const taskId = "task" + currentId;
        const newTaskContainer = document.createElement("div");
        const checkboxItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");

        checkboxItem.classList.add("checkbox-item");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", taskId);
        label.setAttribute("for", checkbox.id);
        label.classList.add("checkbox-text");
        label.textContent = textInput.value;

        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);
        newTaskContainer.appendChild(checkboxItem);
        listContainer.appendChild(newTaskContainer);

        textInput.value = "";

        //Add overline to the finished tasks. Not finished yet...
        checkboxItem.addEventListener("click", function taskDone() {
            label.textContent.style.textDecoration = overline;
        });
    }
}

