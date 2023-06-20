import { students } from "./data/sample_data.js";

//Metodo normal pero mas tedioso

// const development = []
// for(let i = 0; i < students.length; i++){
//     if(students[i].course === "Web Development"){
//         development.push(students[i])
//     }
// }

// console.log(development);

    // Con el metodo Filter

// const result = students.filter(function(student){
//     if(student.course === "Web Development"){
//         return true
//     }
// })

// console.log(result)

    //Con funcion Flecha

const result = students.filter(student => student.course !== "Web Development")

console.log(result)