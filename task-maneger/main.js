// 1️⃣ This function saves user's name using sessionStorage
function saveName() {
    const name = document.getElementById("nameInput").value;
  
    if (name) {
      sessionStorage.setItem("username", name);  // save in sessionStorage
      document.getElementById("login").style.display = "none";
      document.getElementById("mainApp").style.display = "block";
  
      document.getElementById("welcome").innerText = "Hello, " + name + "!";
      showTasks(); // Show old tasks (if any)
    }
  }
  
  // 2️⃣ This function adds a task and stores in localStorage
  function addTask() {
    const task = document.getElementById("taskInput").value;
  
    if (task) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
      tasks.push(task); // Add task to the array
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to localStorage
  
      document.getElementById("taskInput").value = ""; // Clear input
      showTasks(); // Show updated task list
    }
  }
  
  // 3️⃣ This function shows tasks using a loop
  function showTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list before adding
  
    // Loop through tasks and show them
    for (let i = 0; i < tasks.length; i++) {
      let li = document.createElement("li");
      li.innerText = tasks[i];
      taskList.appendChild(li);
    }
  }
  
  // 4️⃣ When page loads, check if username already exists
  window.onload = function () {
    const name = sessionStorage.getItem("username");
  
    if (name) {
      document.getElementById("login").style.display = "none";
      document.getElementById("mainApp").style.display = "block";
      document.getElementById("welcome").innerText = "Welcome back, " + name + "!";
      showTasks();
    }
  }
  