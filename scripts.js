// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

// Initializes empty tasks array
const tasks = [];

// Function to add new tasks
function addTasks() {
  const totalTasks = 6;
  let tasksAdded = 0;

  while (tasksAdded < totalTasks) {
    // Loop until 6 tasks are added
    // Prompt user for task details
    const title = prompt(`Enter task ${tasksAdded + 1} title:`);
    const description = prompt(`Enter task ${tasksAdded + 1} description:`);

    let status = prompt(
      `Enter task ${tasksAdded + 1} status (todo, doing, done):`
    ).toLowerCase();
    while (status !== "todo" && status !== "doing" && status !== "done") {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      status = prompt(
        `Enter task ${tasksAdded + 1} status (todo, doing, done):`
      ).toLowerCase();
    }

    // Creates new task with incremental ID
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
    const newTask = {
      id: newId,
      title,
      description,
      status,
    };

    tasks.push(newTask);
    tasksAdded++;
  }
}

// Functions to filter and return completed tasks
function getCompletedTasks() {
  return tasks.filter((task) => task.status === "done");
}

// Main execution
addTasks();

// Logs all tasks
console.log("All tasks:", tasks);

// Logs completed tasks
const completedTasks = getCompletedTasks();
console.log("Completed tasks:", completedTasks);
