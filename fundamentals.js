// module 42-1 ()

//1.How to declare a variable using let and const 
const fatherName = 'Arnold'
let season = 'rainy'
season = 'winter'


//2. condition
//6 basic condition >,< , ===, !==, <=, >=
//multiple condition : && , ||


if(fatherName === 'arnold' || season === 'rainy'){

}


//3. Array 
//index = number[]
//push, pop, 
//length  number.length
const numbers = [56, 69, 83, 13]
numbers[1]= 100
// console.log(numbers[1])


//4.for loop 
// for (const number of numbers){
//     console.log(number)
// }
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}


//5. function
function addingTwoNum (num1,num2){
return num1+num2
}

console.log(addingTwoNum(123,11))

//6. Object

const student = {
    name:'alal',
    roll: 23, 
    alaka:'kotbari',
    address:{
        present:'comilla',
        permanet:'chitagong'
    },
    job:['computer', 'reserch','buseness', ' conpany']
}
const address = 'comilla'
const alaka = 'kotbari'

console.log(student.address.present)
// console.log(student.job[2])
console.log(student['job'][2])//access via property name string
console.log('access via property name:_',student['address'])  //access via property name in a variable
console.log('access via property name:_',student['alaka']) 