function addTask(tasks, taskName) {
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    task: taskName,
    completed: false,
  };
  tasks.push(newTask);
}

function markCompleted(tasks, taskId) {
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.completed = true;
    }
  });
}

function removeCompleted(tasks) {
  return tasks.filter((task) => !task.completed);
}

function editTask(tasks, taskId, newTaskName) {
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.task = newTaskName;
    }
  });
}

let tasks = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Walk the dog", completed: false },
];

addTask(tasks, "Read a book");
editTask(tasks, 1, "Buy fresh vegetables");
markCompleted(tasks, 2);
tasks = removeCompleted(tasks);

console.log(tasks);
