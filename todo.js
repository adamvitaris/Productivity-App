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
        const trashBtn = document.createElement("button");

        checkboxItem.classList.add("checkbox-item");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", taskId);
        label.setAttribute("for", checkbox.id);
        label.classList.add("checkbox-text");
        trashBtn.classList.add("trash-can");
        label.textContent = textInput.value;

        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);
        checkboxItem.appendChild(trashBtn);
        trashBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        newTaskContainer.appendChild(checkboxItem);
        listContainer.appendChild(newTaskContainer);

        textInput.value = "";

        label && checkbox.addEventListener("click", function () {
            label.classList.toggle("toggle-line");
        });
    }
}

