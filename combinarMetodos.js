import { students } from "./data/sample_data.js";

const result = students
  .map((student) => ({
    student: `${student.name} ${student.lastname}`,
    age: student.age,
  }))
  .filter((student) => student.age > 20)
  .sort((a, b) => a.age - b.age)
  .reduce((total,student) => total + student.age,0 )

//Destructura

// const result = students.map(({name, lastname, age}) => ({
//     student: `${name} ${lastname}`,
//     age
// }))

console.log(result);
