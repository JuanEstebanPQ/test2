import { students } from "./data/sample_data.js";

    //Metodo Sort

// const sortedStudents = students.sort(function(first, second){
//     if(first.age > second.age){
//         return 1
//     }else{
//         return -1
//     }
// })


    //funcion flecha

//const sortedStudents = students.sort((a,b) => a.age > b.age ? 1 : -1)
const sortedStudents = students.sort((a,b) => a.age - b.age)

console.log(sortedStudents)

//////// Numeros en orden

const numbers = [10, 100, 30 ,20, 1000]

console.log(numbers.sort((a, b) => a - b))
