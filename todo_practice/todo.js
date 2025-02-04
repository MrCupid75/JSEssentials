const tasks = []

const taskInputElement = document.getElementById("taskInput")
const addTaskBtn = document.querySelector("#addTaskBtn")
const taskList = document.querySelector("#taskList")

const addTasks = () => {
    let taskInput = taskInputElement.value;
    tasks.push(taskInput)
    console.log(tasks)
}

const displayTask = () => {
    addTasks()
    taskList.innerHTML = ""
    tasks.forEach((task) => {
        let listItem = document.createElement("li")
        listItem.innerHTML = task;
        taskList.appendChild(listItem)
    })
}

addTaskBtn.addEventListener("click", displayTask)