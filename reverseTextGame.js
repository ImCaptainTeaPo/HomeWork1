// Элементы интерфейса
const userInput = document.getElementById("user-text");
const reversedTextElement = document.getElementById("reversed-text");

// Функция для переворота текста
function reverseText() {
    const text = userInput.value;
    if (!text) {
        reversedTextElement.textContent = "Пожалуйста, введите текст.";
        reversedTextElement.style.color = "orange";
    } else {
        const reversedText = text.split("").reverse().join("");
        reversedTextElement.textContent = `Перевернутый текст: ${reversedText}`;
        reversedTextElement.style.color = "white";
    }

    userInput.value = ""; // Очищаем поле ввода
}
