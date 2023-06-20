import { students } from "./data/sample_data.js";


//Metodo every
//Para saber si todos los datos cumplen con una condicion

// const result = students.every((student)=> student.age === 20)
const result = students.every((student)=> student.name.includes("J"))

console.log(result)