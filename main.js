let todoList = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim(); //her iki terefden boshluqlari goturur

  if (newTask !== "") {
    todoList.push(newTask); // arrayin sonuna yeni element elave edir
    taskInput.value = "";
    displayTasks();
    console.dir(taskInput);
    console.dir(todoList);
  } else {
    alert("Sən canı məzələnmə");
  }
}

function displayTasks() {
  const listContainer = document.getElementById("todoList");
  listContainer.innerHTML = "";

  todoList.forEach((task, index) => {
    //arrayin her bir elementi ucun gosterilen funksiyani chagirir
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span contenteditable="false">${task}</span>
          <button onclick="editTask(${index})">Edit</button> 
          <button onclick="deleteTask(${index})">Delete</button>`;
    listContainer.appendChild(listItem); // DOM metodudur listin sonuna iten eleve edir
    console.dir(listItem);
  });
}

function editTask(index) {
  const spanElement = document.querySelectorAll("span")[index];
  const editButton = spanElement.nextElementSibling;

  if (spanElement.getAttribute("contenteditable") === "false") {
    //atributu gosterir meselen class adini
    spanElement.setAttribute("contenteditable", true); // yuxaridakini deyishir   yeni editi click edenden sonra spanda deyishiklik etsek edit button chevrilsin save buttona
    editButton.textContent = "Save";
    spanElement.focus(); // DOM metodu gosterilen yere fokuslanmaq ucundur burada focus spana olur ki icinde yazmaq olsun
  } else {
    spanElement.setAttribute("contenteditable", false);
    editButton.textContent = "Edit";
    console.dir(editButton);
  }
  console.dir(todoList);
}

function deleteTask(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    const deletedTask = todoList[index]; //Arrayin index-i dir.
    todoList.splice(index, 1); //delete testiq olunanda array-den 1 elementi sil(silineni)
    displayTasks();
  } else {
    console.log("Deletion canceled.");
    console.dir(deleteTask);
  }
  console.dir(todoList);
}
