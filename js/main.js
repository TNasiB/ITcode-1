const title = document.querySelector(".input-title"),
      btn = document.querySelector(".send-task"),
      unDo = document.querySelector(".undo-tasks"),
      desc = document.querySelector(".input-desc"),
      completedTask = document.querySelector(".completed-tasks")

btn.addEventListener("click", createTask)

//Функция создания задачи
function createTask() {
    //Отрабатывает только если есть заглавие задачи
    if (title.value != "") {
        let task = document.createElement('div')
        task.classList.add("task")

        let taskTitle = document.createElement('h2')
        taskTitle.classList.add("task__title")
        taskTitle.innerText = title.value
        
        let taskDesc = document.createElement('p')
        taskDesc.classList.add("task__desc")
        taskDesc.innerHTML = desc.value

        let taskBtn = document.createElement('button')
        taskBtn.classList.add("task-btn")
        taskBtn.innerText = "Выполнено"

        task.append(taskTitle)
        task.append(taskDesc)
        task.append(taskBtn)
        
        unDo.append(task)
    }
}
document.addEventListener("click", (e) => switchTask(e))
//Функция переноса задачи во вкладку выполненных
function switchTask(e) {
    if (e.target.classList.contains("task-btn")) {
        completedTask.append(e.target.parentElement)
        e.target.remove()
    }
}