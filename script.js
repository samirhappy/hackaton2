// Помодоро Таймер
let timer;
let timeLeft = 25 * 60;

function startPomodoro() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                displayTime();
            } else {
                clearInterval(timer);
                alert("Время вышло! Сделайте короткий перерыв.");
            }
        }, 1000);
    }
}

function resetPomodoro() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    displayTime();
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Ежедневные Задачи
const challenges = [
    "Решите 5 задач по математике.",
    "Прочитайте 10 страниц книги.",
    "Напишите краткое изложение новой темы.",
    "Выучите 3 новых слова на иностранном языке.",
    "Посмотрите короткое обучающее видео."
];

let tasksCompleted = localStorage.getItem('tasksCompleted') || 0;
document.getElementById('tasks-completed').textContent = tasksCompleted;

function generateChallenge() {
    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    document.getElementById('daily-challenge').textContent = challenge;
}

function markTaskDone() {
    tasksCompleted++;
    localStorage.setItem('tasksCompleted', tasksCompleted);
    document.getElementById('tasks-completed').textContent = tasksCompleted;
    alert("Задание выполнено! Отличная работа!");
}

// Собственные задачи
function addCustomTask() {
    const taskText = document.getElementById('custom-task-input').value.trim();
    if (taskText) {
        const ul = document.getElementById('custom-task-list');
        const li = document.createElement('li');
        li.textContent = taskText;

        const btn = document.createElement('button');
        btn.textContent = "Выполнено";
        btn.classList.add('task-done');
        btn.onclick = function () {
            ul.removeChild(li);
            markTaskDone();
        };

        li.appendChild(btn);
        ul.appendChild(li);
        document.getElementById('custom-task-input').value = "";
    }
}

// Мотива
// ... ваш существующий код ...

// Функция для отображения результатов пользователей
document.getElementById('show-results').onclick = function() {
    displayResultsChart();
};

function displayResultsChart() {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    const chartData = {
        labels: ['Пользователь 1', 'Пользователь 2', 'Пользователь 3'], // Замените на реальные данные
        datasets: [{
            label: 'Общее время (мин)',
            data: [120, 150, 90], // Пример данных, замените на реальные
            backgroundColor: 'rgba(52, 152, 219, 0.5)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 1
        }]
    };

    const resultsChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Показываем диаграмму
    document.getElementById('resultsChart').style.display = 'block';
}
