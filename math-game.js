// Элементы интерфейса
const taskElement = document.getElementById("math-task");
const resultElement = document.getElementById("result");
const userAnswer = document.getElementById("user-answer");

let correctAnswer;

// Генерация случайной задачи
function generateTask() {
    const num1 = Math.floor(Math.random() * 9) + 1; // Однозначное число от 1 до 9
    const num2 = Math.floor(Math.random() * 9) + 1; // Однозначное число от 1 до 9
    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let task;
    switch (operation) {
        case "+":
            correctAnswer = num1 + num2;
            task = `${num1} + ${num2}`;
            break;
        case "-":
            correctAnswer = num1 - num2;
            task = `${num1} - ${num2}`;
            break;
        case "*":
            correctAnswer = num1 * num2;
            task = `${num1} * ${num2}`;
            break;
        case "/":
            correctAnswer = (num1 / num2).toFixed(1); // Округляем до 1 знака
            task = `${num1} / ${num2}`;
            break;
    }

    taskElement.textContent = `Задача: ${task}`;
}

// Проверка ответа пользователя
function checkAnswer() {
    const userResponse = parseFloat(userAnswer.value);

    if (isNaN(userResponse)) {
        resultElement.textContent = "Введите число!";
        resultElement.style.color = "orange";
    } else if (userResponse === parseFloat(correctAnswer)) {
        resultElement.textContent = "Правильно!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
        resultElement.style.color = "red";
    }

    userAnswer.value = ""; // Очищаем поле ввода
    generateTask(); // Генерируем новую задачу
}

// Инициализация игры
generateTask();
