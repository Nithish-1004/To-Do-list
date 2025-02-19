
// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Function
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Enter Key to Add Task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  }
});

// Function to Add Task
function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">Delete</button>
  `;
  taskList.appendChild(li);

  // Mark as Completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete Task
  const deleteBtn = li.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent li click event
    taskList.removeChild(li);
  });
}