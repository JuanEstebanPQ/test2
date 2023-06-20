import { students } from "./data/sample_data.js";

//Normal

// let total = 0;

// for (let i = 0; i < students.length; i++){
//     total += students[i].age
// }

// console.log(total)

    //Metodo Reduce

// const result = students.reduce(function(total ,student){
//     return total + student.age;
// }, 0)

// console.log(result)

    //Reducir el codigo a 1 linea con funcion flecha

// const result = students.reduce((total, student) => total + student.age, 0)

// console.log(result);


    //Con otro arreglo

const developers = [
    {
        id: 1,
        name: "John",
        skills: ["Html", "React", "JavaScript", "Java"],
    },
    {
        id: 2,
        name: "Jane",
        skills: ["Html", "Css", "JavaScript", "Java"],
    },
    {
        id: 3,
        name: "Jack",
        skills: ["Html", "Css", "JavaScript", "NodeJS"],
    }
]

const result = developers.reduce(function (allSkills, student){
    return Array.from (new Set([...allSkills, ...student.skills]))
}, [])

console.log(result)