// Функция для генерации случайного цвета
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функция для изменения фона на радиальный градиент из 3 цветов
function changeBackgroundColor() {
    const colors = Array.from({ length: 3 }, () => getRandomColor());
    const gradient = `radial-gradient(circle, ${colors.join(", ")})`;
    document.body.style.background = gradient;
}
