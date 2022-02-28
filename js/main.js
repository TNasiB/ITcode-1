const title = document.querySelector(".input-title"),
      btn = document.querySelector(".send-task"),
      unDo = document.querySelector(".undo-tasks"),
      desc = document.querySelector(".input-desc")

btn.addEventListener("click", createTask)

function createTask() {
    if (title.value != "") {
        unDo.innerHTML += `
        <div class="task">
            <h2 class="task__title">${title.value}</h2>
            <p class="task__desc">${desc.value}</p>
            <button class="task-btn">Выполнено</button>
        </div>
        `
    }
}
document.addEventListener("click", switchTask)

function switchTask() {
    if (e.target.classList.contains("task-btn")) {
        console.log(this)
    }
}

