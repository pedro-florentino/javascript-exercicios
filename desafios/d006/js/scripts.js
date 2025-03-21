function addTask() {
    const taskTitle = document.querySelector("#task-title").value

    if (taskTitle) {
        // Clona o template
        const template = document.querySelector(".template")
        const newTask = template.cloneNode(true)
        
        // Adiciona título
        newTask.querySelector(".task-title").textContent = taskTitle

        // Remove as classes desnecessárias do template
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        // Adiciona tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask)

        // Adiciona o evento de Remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this)
        })

        // Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this)
        })


        // Limpa o texto
        document.querySelector("#task-title").value = ""
    }

}

// Função de remover tarefa
function removeTask (task) {
   task.parentNode.remove(true) 
}

// Função de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")
}

// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e) {
    e.preventDefault()
    addTask()
})