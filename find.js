import { students } from "./data/sample_data.js";

// const result = students.find(function(student){
//     if(student.name === "Ryan"){
//         return 1
//     }
// })

    //funcion flecha

const result = students.find((student) => student.name === "Ryan")

console.log(result)
