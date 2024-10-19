document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.textContent = taskInput;
        newTask.addEventListener('click', function() {
            newTask.style.textDecoration = newTask.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });
        taskList.appendChild(newTask);
        document.getElementById('taskInput').value = '';
    }
});
