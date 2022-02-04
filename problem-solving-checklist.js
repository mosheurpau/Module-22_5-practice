// 1. conversation
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const feets = 5;
const getInch = feetToInch(feets);
console.log(getInch);


// 2. conversation 
function centimeToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}

const centimeters = 250;
const getMeter = centimeToMeter(centimeters);
console.log(getMeter);


// 3. calculation
function pageRequirements(book1, book2, book3) {
    const fristBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const numberOfPagebook1 = fristBookPage * book1;
    const numberOfPagebook2 = secondBookPage * book2;
    const numberOfPagebook3 = thirdBookPage * book3;
    const totalpages = numberOfPagebook1 + numberOfPagebook2 + numberOfPagebook3;

    return totalpages;
}

const numberOfBook1 = 10;
const numberOfBook2 = 5;
const numberOfBook3 = 1;
const getPages = pageRequirements(numberOfBook1, numberOfBook2, numberOfBook3);
console.log(getPages);

// 4. friends

function bestFriend(friends) {
    let bigName = friends[0];
    for (const friend of friends) {
        // console.log(friend.length);
        if (friend.length > bigName.length) {
            bigName = friend;
        }
    }
    return bigName;
}
const myFriends = ['shakil', 'kamrul Hasan', 'parvez', 'soykot', 'sadman'];
console.log(bestFriend(myFriends));


// 5. will stop the loop if the array has any negative number returns all the positive number before the negative number

function onlyPositive(numbersArray) {
    let positiveNum = [];
    for (const number of numbersArray) {
        if (number >= 0) {
            positiveNum.push(number);
        }
        else if (number < 0) {
            break;
        }
    }
    return positiveNum;
}

const allNumbers = [32, 15, 65, 38, 8, -4, 22, 6];
const getPositiveNum = onlyPositive(allNumbers);
console.log(getPositiveNum);

