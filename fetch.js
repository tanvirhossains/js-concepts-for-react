// module 42-5(JSON,fetch keys, value, array add or remove using dots)

// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
console.log('normal:-',student);
console.log('stringify:-', studentJSON);//all will show with string

const studentObj = JSON.parse(studentJSON);//this is for convert from stringify to normal object
console.log('again convert to normal:-', studentObj);


// //2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(values)

// for 
const numbers = [23, 54, 67, 87, 23, 78];
// numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
console.log('it is an example of new products that added:-', newProducts)

// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone'); //that means getting the object without phone
console.log(remaining)