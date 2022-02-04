// 1. write three 3 variable
var number = 28;
var string = 'This is string';
var isBollen = true;

// 2. varible using (let, const)
const name = 'Mosheur Rahman';
let price = 40;
price = 50;
console.log(price);

// 3. Simple Math Operation( +, -, *, /, % )

const fristNumber = 50;
const secondNumber = 3;
const addTwoNumber = fristNumber + secondNumber;
const subTwoNumber = fristNumber - secondNumber;
const mulTwoNumber = fristNumber * secondNumber;
const divisionTwoNumber = fristNumber / secondNumber;
const remainderTwoNumber = fristNumber % secondNumber;
console.log(addTwoNumber, subTwoNumber, mulTwoNumber, divisionTwoNumber, remainderTwoNumber);

// 4. comparison 
const number1 = 22;
const number2 = 33;
if (number1 > number2) {
    console.log(number1, 'and', number2);
}
else if (number1 >= number2) {
    console.log(number1, 'and', number2);
}
else if (number1 < number2) {
    console.log(number1, 'and', number2);
}
else if (number1 <= number2) {
    console.log(number1, 'and', number2);
}
else if (number1 != number2) {
    console.log(number1, 'and', number2);
}
else {
    console.log(number1, 'and', number2);
}

// 5. two condition. case-1: fulfill both condition. case-2: fulfill at lest one condition 

const herLove = true;
const instragram = true;
if (herLove == true && instragram == true) {
    console.log('He love me so much.');
}
else if (herLove == true || instragram == true) {
    console.log('I do not know how much you love me.');
}


// 6. if-else
const color = 'black';
if (color == 'black') {
    console.log('Bacground color is black')
}
else {
    console.log('Bacground color is white.');
}

// 7. while loop 7 to 19 all number. only display odd number.

let i = 7;
while (i <= 19) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

// 8. declare an Array. number of Element. 

let myArray = [22, 4, 45, 65, 78, 8, 34, 77];
console.log('Array length: ', myArray.length);
myArray[4] = 28;
console.log('Array: ', myArray);
myArray.push(45);
console.log('Array: ', myArray);
myArray.pop();
console.log('Array: ', myArray);
myArray.unshift(9);
console.log('Array: ', myArray);
myArray.shift();
console.log('Array: ', myArray);

// 9. use any for loop Array
const newArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
for (const array of newArray) {
    console.log('new Array:', array);
}

// 10. only the number bigger then 80
const numbers = [11, 221, 33, 84, 55, 96, 77, 88, 79];

let bigger = [];
for (const number of numbers) {
    if (number >= 80) {
        bigger.push(number);
    }
}
console.log('Bigger Number:', bigger);

// 11. write a function that takes three number and return multiplication of the three number 

function multThreeNumber(num1, num2, num3) {
    const result = num1 * num2 * num3;
    return result;
}

const threeNumber = multThreeNumber(3, 2, 5);
console.log('Three Number multiplication:', threeNumber);

// 12. declare an Object and change any property of that objects

const persons = {
    name: 'korim',
    ph: 01754675133,
    email: 'mosheur.pau@gmail.com',
    address: 'Nikunja-2'
}
// console.log(persons);
persons.name = 'Mehedi';
persons['ph'] = '01754675993';
delete persons.email;
console.log(persons);



const students = [
    { name: 'Mosheur', id: 181, dept: 'cse', cgpa: 3.39 },
    { name: 'Shakil', id: 181, dept: 'cse', cgpa: 3.41 },
    { name: 'Kamrul', id: 181, dept: 'cse', cgpa: 3.59 },
    { name: 'Soykot', id: 181, dept: 'cse', cgpa: 3.69 }
];

console.log(students);
students.name = 'sddfs';
console.log(students);
for (const student of students) {
    if (student.name == 'Mosheur') {
        student.cgpa = 3.99;
    }
    else if (student.name == 'Shakil') {
        student.cgpa = 2.44;
    }
    console.log(student.name, student.cgpa);
}



