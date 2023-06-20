import { students } from "./data/sample_data.js";

// const fullNames = students.map(function (student){
//     return student.name + " " + student.lastname
// })

// console.log(fullNames);

    //funcion flecha

// const names = students.map(student => student.name + " " + student.lastname);

// console.log(names);

    // usar 2 map

//  const names = students.map(student => ({
// //         //return{} si no usamos los parentesis antes de {}
//         fullname: student.name + " " + student.lastname,
//         age: student.age,
//         course: student.course,
// //         //puedo usar ...student para traer todos los datos
// //         //Puedo crear un nuevo dato concatenando los otros
// //         // title: `${student.name} - ${student.course}`,
// //         // Puedo actualizar datos despues de traerlos
//         course: "Programming"
    
//  }))

// // console.log(names);


// const doubleage = names.map(student => ({
//     ...student,
//     age: student.age * 2
// }))

// console.log(doubleage);


    //Encadenar metodo map

const doubleage = students.map(student =>({
    ...student,
    course: "Programming"
})).map(student => ({...student, age: student.age * 2}))

console.log(doubleage);