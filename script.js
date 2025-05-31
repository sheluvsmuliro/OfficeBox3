function showTaskBoard() {
  document.querySelector('.welcome-screen').style.display = 'none';
  document.querySelector('.task-board').style.display = 'block';
}

function addTask() {
  const input = document.getElementById('newTaskInput');
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
}
