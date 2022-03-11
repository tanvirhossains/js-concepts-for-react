// module 42-6 ((advanced) truthy, false, Ten)
// truthy= 'almas', 5, true, {}, []
// false= '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary (5:40 start)
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + ''; //if do this then it will be string
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;//actually it is a string
// console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;
© 2022 GitHub, Inc.
Terms
Privacy