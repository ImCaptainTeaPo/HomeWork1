//ex1
const str = 'js';

const upperStr = str.toUpperCase();

console.log(upperStr);


//ex2
function filterByPrefix(array, prefix) {

    const lowerPrefix = prefix.toLowerCase();

    return array.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}

const strings = ['JavaScript', 'java', 'Python', 'JavaFX', 'C++'];
const prefix = 'jav';

const result = filterByPrefix(strings, prefix);
console.log(result);


//ex3
const number = 32.58884;

const roundedDown = Math.floor(number);

const roundedUp = Math.ceil(number);

const roundedNearest = Math.round(number);

console.log('До меньшего целого:', roundedDown);
console.log('До большего целого:', roundedUp);
console.log('До ближайшего целого:', roundedNearest);


//ex4
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);

const maxValue = Math.max(...numbers);

console.log('Минимальное значение:', minValue);
console.log('Максимальное значение:', maxValue);


//ex5
function getRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    console.log('Случайное число от 1 до 10:', randomNumber);
}

getRandomNumber();


//ex6
function generateRandomArray(max) {

    if (!Number.isInteger(max) || max <= 0) {
        throw new Error('Введите положительное целое число.');
    }

    const arrayLength = Math.floor(max / 2);

    const randomArray = Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * (max + 1))
    );

    return randomArray;
}

const maxNumber = 12;
const resalt = generateRandomArray(maxNumber);
console.log('Результат:', resalt);


//ex7
function getRandomInRange(min, max) {

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error('Введите целые числа.');
    }
    if (min > max) {
        throw new Error('Минимальное значение не может быть больше максимального.');
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 5;
const max = 55;

const randomValue = getRandomInRange(min, max);
console.log(`Случайное число в диапазоне от ${min} до ${max}:`, randomValue);


//ex8
const currentDate = new Date();

console.log('Текущая дата:', currentDate);


//ex9
const currenteDate = new Date();

const futureDate = new Date(currenteDate);
futureDate.setDate(currenteDate.getDate() + 73);

console.log('Текущая дата:', currenteDate.toLocaleDateString());

console.log('Дата через 73 дня:', futureDate.toLocaleDateString());


//ex10
function formatDate(date) {
    const daysOfWeek = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'
    ];
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];
//дата
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
//время
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
Время: ${hours}:${minutes}:${seconds}`;
}

const currenteeDate = new Date();
console.log(formatDate(currenteeDate));
