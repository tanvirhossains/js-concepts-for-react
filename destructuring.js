// module 42-4(array and object Destructuring, optional chaining)

//1. array destructuring 

const numbers = [23, 56]

// const x = numbers[0]//option 1= 
// const y = numbers[1]

// const [x,y ] = [42, 34] //option-2
const [x, y] = numbers  //option -3

//option 4 to destructuring
function boxify(num1, num2) {
    return [num1, num2]
}

const [num1, num2] = boxify(90, 34)

// console.log(num1,num2)

console.log(boxify(12, 23))
// console.log(x,y)

const student = {
    name: 'alal',
    roll: 23,
    alaka: 'kotbari',
    address: {
        present: 'comilla',
        permanet: 'chitagong'
    },
    job: ['computer', 'reserch', 'buseness', ' conpany']
}

const [job1, job2, job3, job4] = student.job

console.log(job2)


//object   destructurin 
const {name, age }={name:'alu',job:'company', age:14}
console.log(name)


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {weight, ide} = employee

const {color, brand}= employee?.specification?.watch//this is an option to get the object value

console.log(color)