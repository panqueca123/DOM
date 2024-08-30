document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = tasks.map((task, index) => `
            <li class="${task.completed ? 'completed' : ''}">
                ${task.text}
                <div>
                    <button class="complete" onclick="toggleComplete(${index})">Concluir</button>
                    <button class="remove" onclick="removeTask(${index})">Excluir</button>
                </div>
            </li>
        `).join('');
    };

    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = () => {
        const text = taskInput.value.trim();
        if (text) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push({ text, completed: false });
            saveTasks(tasks);
            taskInput.value = '';
            loadTasks();
        }
    };

    window.toggleComplete = (index) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks[index].completed = !tasks[index].completed;
        saveTasks(tasks);
        loadTasks();
    };

    window.removeTask = (index) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        saveTasks(tasks);
        loadTasks();
    };

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});
