const calendar = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

const date = new Date();

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function generateCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent = date.toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric"
    });

    calendar.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    daysOfWeek.forEach(d => {
        const el = document.createElement("div");
        el.textContent = d;
        el.style.fontWeight = "bold";
        calendar.appendChild(el);
    });

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        calendar.appendChild(empty);
    }

    for (let i = 1; i <= totalDays; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;

        day.onclick = () => selectDay(i);

        calendar.appendChild(day);
    }
}

generateCalendar();

const form = document.getElementById("taskForm");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let selectedDay = null;

function selectDay(day) {
    selectedDay = day;
    renderTasks();
}

form.onsubmit = (e) => {
    e.preventDefault();

    const text = document.getElementById("taskInput").value;
    const priority = document.getElementById("priority").value;
    const deadline = document.getElementById("deadline").value;

    if (!selectedDay) {
        alert("Selecione um dia primeiro!");
        return;
    }

    const task = {
        text,
        priority,
        deadline,
        status: "a fazer",
        day: selectedDay
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    form.reset();
    renderTasks();
};

function renderTasks() {
    list.innerHTML = "";

    const filtered = tasks
        .map((task, index) => ({ task, index }))
        .filter(t => t.task.day === selectedDay);

    filtered.forEach(({ task, index }) => {
        const li = document.createElement("li");

        li.classList.add(task.priority);

        if (task.status === "concluida") {
            li.classList.add("concluida");
        }

        li.innerHTML = `
        <strong>${task.text}</strong><br>
        ${task.deadline || "Sem prazo"}<br>
        ${task.status}
        <button onclick="toggleStatus(${index})">✓</button>
        `;

        list.appendChild(li);
    });

    updateProgress();
}

function updateProgress() {
    const tasksElements = document.querySelectorAll("#taskList li");
    const completed = document.querySelectorAll("#taskList li.concluida");

    const total = tasksElements.length;
    const done = completed.length;

    const percent = total === 0 ? 0 : Math.round((done / total) * 100);

    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("progressText").textContent = percent + "% concluído";
}

function toggleStatus(index) {
    tasks[index].status =
        tasks[index].status === "concluida"
            ? "a fazer"
            : "concluida";

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

const btnTheme = document.getElementById("toggleTheme");

btnTheme.onclick = () => {
    document.body.classList.toggle("light");
};