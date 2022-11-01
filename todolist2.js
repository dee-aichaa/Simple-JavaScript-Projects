// document.write("Write this to the page");

// let element = document.getElementById("newTodo");
// console.log(element);

// let element = document.getElementsByName("icon");
// console.log(element);

// let elements = document.getElementsByTagName("div");
// console.log(elements);

// let element = document.querySelector(".task");
// console.log(element);

// let element = document.querySelectorAll(".task");
// console.log(element);

// let heading = document.createElement("h1");
// heading.textContent = "Hello World!";

// heading.className = "newElement";
// heading.id = "firstH1";

// let parentHead = document.querySelector(".head");
// parentHead.appendChild(heading);
// parentHead.removeChild(heading);

// setTimeout(function () {
//   parentHead.appendChild(heading);
// }, 3000);

let todos = [
  {
    id: 1,
    title: "Complete online javascript course",
    completed: false,
  },
  {
    id: 2,
    title: "10 minute meditation",
    completed: true,
  },
  {
    id: 3,
    title: "Read for 1 hour",
    completed: true,
  },
];

let todosContainer = document.querySelector(".tasks");
let tasksLeft = document.getElementById("tasksLeft");
let letterS = document.querySelector("#letterS");

let form = document.getElementById("form");
let input = document.getElementById("newTodo");

let todosLeft = 0;
for (let i = 0; i < todos.length; i++) {
  todosContainer.innerHTML += `<div class="task">
  <div>
    ${
      todos[i].completed
        ? '<i class="bx bxs-check-circle"></i>'
        : '<i class="bx bx-circle"></i>'
    }
    <h5>${todos[i].title}</h5>
  </div>
  <button>
    <i class="bx bx-x"></i>
  </button>
</div>`;

  if (todos[i].completed == false) todosLeft++;
}

tasksLeft.textContent = todosLeft;
if (todosLeft == 1) {
  letterS.textContent = "";
} else {
  letterS.textContent = "s";
}

form.addEventListener("submit", function () {
  console.log("Event Fired");
});

{
  /* <div class="task">
<div>
  <i class="bx bx-circle" ></i>
  <h5>Complete online JavaScript course</h5>
</div>
<button><i class="bx bx-x"></i></button>
</div>
<div class="task">
<div>
  <i class="bx bx-circle"></i>
  <h5>10 minute meditation</h5>
</div>
<button><i class="bx bx-x"></i></button>
</div>
<div class="task">
<div>
  <i class="bx bx-circle"></i>
  <h5>Read for 1 hour</h5>
</div>
<button><i class="bx bx-x"></i></button>
</div>
<div class="task">
<div>
  <i class="bx bx-circle"></i>
  <h5>Pick up groceries</h5>
</div>
<button><i class="bx bx-x"></i></button>
</div>
<div class="task-bb"> */
}
