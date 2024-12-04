//ex1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//ex2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//ex3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//ex4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

//ex5
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);

//ex6 для декабря 2024
let firstFriday = 6;
let daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

//не домашка, сохранить, если заработает
function countFridaysOn13th(year) {
    let friday13Count = 0;
    let months = [];

    for (let month = 0; month < 12; month++) {

        let date = new Date(year, month, 13);

        if (date.getDay() === 5) {
            friday13Count++;
            months.push(month + 1);
        }
    }

    return { count: friday13Count, months: months };
}

let year = 2025;
let result = countFridaysOn13th(year);

console.log(`В ${year} году пятниц 13-го числа: ${result.count}`);
console.log(`Они выпадают в следующих месяцах: ${result.months.join(', ')}`);
