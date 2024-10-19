class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push({ task, completed: false });
    }
    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
        }
    }
    displayTasks() {
        return this.tasks.map((t, i) => `${i + 1}. ${t.task} - ${t.completed ? "Completed" : "Incomplete"}`).join('\n');
    }
}
const myTodoList = new TodoList();
myTodoList.addTask("Learn JavaScript");
myTodoList.addTask("Practice coding");
myTodoList.completeTask(0);
myTodoList.addTask("Learn Deep learning")
console.log(myTodoList.displayTasks());
