import { students } from "./data/sample_data.js";

// for(let i = 0; i < students.length; i++){
//     console.log("hola");
// }


// students.forEach(function(student, index, students){
//     console.log(student);
//     console.log(index);
//     console.log(students);
// })


//Funcion flecha

// students.forEach((student) =>{console.log(student.name + " " + student.lastname)})


//Crear un nuevo arreglo si queremos que nos retorne algo

const fullNames = [];

students.forEach((student) =>{fullNames.push(student.name + " " + student.lastname)})

console.log(fullNames);

