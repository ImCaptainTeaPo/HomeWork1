// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Элементы интерфейса
const quizContainer = document.getElementById("quiz-container");
const resultElement = document.getElementById("quiz-result");

// Генерация вопросов и вариантов ответов
function loadQuiz() {
    quiz.forEach((item, index) => {
        const questionElement = document.createElement("p");
        questionElement.className = "game__description";
        questionElement.textContent = `${index + 1}. ${item.question}`;
        quizContainer.appendChild(questionElement);

        item.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("label");
            optionElement.className = "game__description";
            optionElement.innerHTML = `
                <input type="radio" name="question${index}" value="${optionIndex + 1}"> ${option}
            `;
            quizContainer.appendChild(optionElement);
        });
    });
}

// Подсчет правильных ответов
function submitQuiz() {
    let correctCount = 0;

    quiz.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === item.correctAnswer) {
            correctCount++;
        }
    });

    resultElement.textContent = `Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`;
    resultElement.style.color = correctCount === quiz.length ? "green" : "orange";
}

// Инициализация игры
loadQuiz();
