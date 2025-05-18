// Intilize Task board
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "todo",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "doing",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

// Initialize the task board when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTasks();
  setupTaskModal();
});

// Fills tasks in the rightful columns based on their task IDs
function initializeTasks() {
  // Find all list items with task IDs
  const taskListItems = document.querySelectorAll("li[data-task-id]");

  taskListItems.forEach((listItem) => {
    const taskId = parseInt(listItem.dataset.taskId);
    if (!isNaN(taskId)) {
      // Find the task with the matching ID
      const task = initialTasks.find((t) => t.id === taskId);

      if (task) {
        // Makes a paragraph element to display the task title
        const taskElement = document.createElement("p");
        taskElement.textContent = task.title;
        listItem.appendChild(taskElement);

        // Adds click event to open the task modal
        listItem.addEventListener("click", () => {
          openTaskModal(task);
        });
      }
    }
  });
}

// Sets up the task modal dialog and its event handlers
function setupTaskModal() {
  const modal = document.getElementById("taskModal");
  if (!modal) return;

  // Sets up click outside to close behavior
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      modal.close();
    }
  });

  const closeBtn = modal.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.close();
    });
  }
}

// Opens the task modal with the selected task data
function openTaskModal(task) {
  const modal = document.getElementById("taskModal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  if (!modal || !titleInput || !descInput || !statusSelect) return;

  // Fills form fields with task data
  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  // Store the current task ID for reference
  modal.dataset.taskId = task.id;

  // Display the modal
  modal.showModal();
}
