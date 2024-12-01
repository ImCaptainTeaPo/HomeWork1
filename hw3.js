// ex1
// let password = 'пароль';

// let userInput = prompt('Введите пароль');

// password = password.toLowerCase();
// userInput = userInput.toLowerCase();

// if (userInput === password) {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен неправильно');
// }


// ex2
// let c = 2; // Здесь можно менять значение для проверки

// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// ex3
// let d = 150;
// let e = 50;

// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// ex4-1
// let a = '2';
// let b = '3';

// alert(Number(a) + Number(b));

// ex4-2
// let a = '2';
// let b = '3';

// alert(+a + +b);

// ex5
let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12):'));

if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    console.log('Неверный номер месяца');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Неверный номер месяца');
    }
}
