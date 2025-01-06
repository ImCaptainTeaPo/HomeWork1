// Функция для игры
function playGame(userChoice) {
    const options = ["камень", "ножницы", "бумага"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let resultMessage;

    // Определение победителя
    if (userChoice === computerChoice) {
        resultMessage = `Ничья! Вы оба выбрали ${userChoice}.`;
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        resultMessage = `Вы выиграли! Ваш выбор: ${userChoice}. Компьютер выбрал: ${computerChoice}.`;
    } else {
        resultMessage = `Вы проиграли! Ваш выбор: ${userChoice}. Компьютер выбрал: ${computerChoice}.`;
    }

    // Вывод результата
    const resultElement = document.getElementById("result");
    resultElement.textContent = resultMessage;
    resultElement.style.color = resultMessage.includes("выиграли") ? "green" : "red";
}
