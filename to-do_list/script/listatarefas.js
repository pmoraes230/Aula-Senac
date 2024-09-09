document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);
    taskList.addEventListener('change', handleCheckboxChange);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');

        // Criando o Checkbox
        const Checkbox = document.createElement('input');
        Checkbox.type = 'checkbox'
        Checkbox.classList.add('task-checkbox') // criação de class para estilização

        // Adicionando o texto da tarefa
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText

        // Criando o botão de excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('delete-btn');

        //Adicionar checkbox, texto e botão ao item da lista
        taskItem.appendChild(Checkbox);
        taskItem.appendChild(taskTextElement)
        taskItem.appendChild(deleteBtn)

        // Adicionando o item da tarefa à lista
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    // Função para lidar com botões da exclusão e marcar/desmacar com concluída
    function handleTaskAction(event) {
        if (event.target.classList.contains('delete-btn')) {
            // Se for clicado o botão de excluir, remover a tarefa
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    }

    // Função de marcar como concluído a tarefa
    function handleCheckboxChange(event) {
        if (event.target.classList.contains('task-checkbox')) {
            // se for clicado o checkbox, marcar ou desmarcar a tarefa como concluída
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle('completed');
        }
    }

    // função para filtrar as tarefas
    function filterTasks(filter) {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            switch (filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'pending':
                    if (task.classList.contains('completed')) {
                        task.style.display = 'none';
                    } else {
                        task.style.display = 'flex';
                    }
                    break;
                case 'completed':
                    if (task.classList.contains('completed')) {
                        task.style.display = 'flex';
                    } else {
                        task.style.display = 'none';
                    }
            }
        })
    }

    // eventos de clique nos botões de filtro
    document.getElementById('filter-all').addEventListener('click', () => filterTasks('all'));
    document.getElementById('filter-pending').addEventListener('click', () => filterTasks('pending'));
    document.getElementById('filter-completed').addEventListener('click', () => filterTasks('completed'));
})