// module 42-2(tempelte string, arrow function, spread operator)

//1. templete string

const numbers = [56, 69, 83, 13]


const student = {
    name:'alal',
    roll: 23, 
    place:'kotbari',
    address:{
        present:'comilla',
        permanet:'chitagong'
    },
    job:['computer', 'reserch','buseness', ' company']
}

const about = `My name is ${student.name} and my adress is ${student.address.present}  my job is ${student.job[2]}`

// console.log(about)


//2.arrow function 
const add = a=> a*a
// {
//     console.log(add(a))
// }

// console.log(add(4))


//3. Spread operator

const Nnumber = numbers
const newNumbe = [...numbers]
const currentNumber = [...numbers, 100]


numbers.push(23,234)
console.log(Nnumber)
console.log('spread operator number:_',newNumbe)

//create a new arroy from an older and add an element

const newAdded = [...numbers, 100] //এখানে লিখলে কাজ করেনা কেন????
console.log('do not working:_', newAdded)
console.log('currntNumber:_',currentNumber)