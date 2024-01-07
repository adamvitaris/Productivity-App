const textInput = document.querySelector("input");
const addBtn = document.querySelector("#add-btn");
const listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (textInput.value === "") {
        alert("Please enter your new task!")
    }
    else{
        const newTaskContainer = document.createElement("div");
        const checkboxItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");

        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "task" + (newTaskContainer.children.length + 1);
        label.setAttribute("for", checkbox.id);
        label.classList.add("checkbox-text");
        label.textContent = textInput.value;

        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);
        newTaskContainer.appendChild(checkboxItem);
        listContainer.appendChild(newTaskContainer);

        textInput.value = "";
    }
}