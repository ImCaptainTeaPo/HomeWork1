//ex1
function getSmallerNumber(a, b) {
    if (a === b) {
       console.log("Числа равны");
       return a;
    } else if (a < b) {
       return a;
    } else {
       return b;
    }
 }

 console.log(getSmallerNumber(8, 4));

 //ex2
 function checkEvenOdd(n) {
    if (n % 2 === 0) {
       return 'Число четное';
    } else {
       return 'Число нечетное';
    }
 }

 console.log(checkEvenOdd(4));
 console.log(checkEvenOdd(5));

 //ex3.1 квадрат числа в консоль
 function printSquare(num) {
    console.log(num * num);
 }
 printSquare(7);
 
 //ex3.2 return
 function getSquare(num) {
    return num * num;
 }
 
 let result = getSquare(4);
 console.log(result);

 console.log(getSquare(7));

 let anotherResult = getSquare(-3);
 console.log(anotherResult);

 //ex4
 function askAge() {
    const age = prompt('Сколько вам лет?');
    
    if (age < 0) {
       console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
       console.log('Привет, друг!');
    } else if (age >= 13) {
       console.log('Добро пожаловать!');
    } else {
       console.log('Вы ввели не число');
    }
 }
 // askAge()

 //ex5
 function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
       return 'Одно или оба значения не являются числом';
    }
    return a * b;
 }
 console.log(multiplyNumbers(-2, 10));
 console.log(multiplyNumbers('qwe', null));

 //ex6
 function calculateCube() {
    const input = prompt('Введите число:');
    const number = Number(input);
 
    if (isNaN(number)) {
       return 'Переданный параметр не является числом';
    }
 
    const cube = number ** 3;
    return `${number} в кубе равняется ${cube}`;
 }
// console.log(calculateCube());

//ex7
const circle1 = {
    radius: 8,
 
    getArea() {
       return Math.PI * this.radius ** 2;
    },
 
    getPerimeter() {
       return 2 * Math.PI * this.radius;
    }
 };
 
 const circle2 = {
    radius: 16,
 
    getArea() {
       return Math.PI * this.radius ** 2;
    },
 
    getPerimeter() {
       return 2 * Math.PI * this.radius;
    }
 };
console.log('Circle 1:');
console.log('Radius:', circle1.radius);
console.log('Area:', circle1.getArea());
console.log('Perimeter:', circle1.getPerimeter());

console.log('Circle 2:');
console.log('Radius:', circle2.radius);
console.log('Area:', circle2.getArea());
console.log('Perimeter:', circle2.getPerimeter());

 