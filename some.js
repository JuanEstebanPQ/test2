import { students } from "./data/sample_data.js";

// const result = students.some(function(student){
//     if(student.age > 24){
//         return true
//     }
    
// })

    //funcion flecha

const result = students.some((student) => student.lastname === "Doe")

console.log(result)
