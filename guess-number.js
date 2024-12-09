const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById('guess-input').value);
    const feedback = document.getElementById('game__feedback');
    const attemptsDisplay = document.getElementById('game__attempts');

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Введите число от 1 до 100.';
        return;
    }

    attempts++;
    if (userGuess < randomNumber) {
        feedback.textContent = 'Загаданное число больше.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Загаданное число меньше.';
    } else {
        feedback.textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
        document.getElementById('game__button').disabled = true;
        document.getElementById('guess-input').disabled = true;
    }

    attemptsDisplay.textContent = `Попытки: ${attempts}`;
}
