/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

// ---- UTILS ---- //
function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


// ---- ARRAY ---- //
const students = [
  {
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 23,
  examScores: [],
  gender: availableGenders[1],
  name: availableFemaleNames[2]
},

{
  age: 20,
  examScores: [],
  gender: availableGenders[1],
  name: availableFemaleNames[0]
},
{
  age: 35,
  examScores: [],
  gender: availableGenders[0],
  name: availableFemaleNames[5]
},
{
  age: 22,
  examScores: [],
  gender: availableGenders[1],
  name: availableFemaleNames[4]
  },
]




// ---- TASKS ---- //

//* Requisito 1 - Mostrar en formato de tabla todos los alumnos
function task1() {
  console.table(students)
}
task1()

//* Requisito 2 - Mostrar por consola la cantidad de alumnos que hay en clase
function task2() {
  console.log('Task2 - Total students:', students.length)
}
task2()

//* Requisito 3 - Mostrar por consola todos los nombres de los alumnos
function task3() {
  const namesArray = []
  students.forEach(student => {
    namesArray.push(student.name)
  });
  console.log('Task3 - Students names:', namesArray)
}
task3()

//* Requisito 4 - Eliminar último alumno de la lista
function task4() {
  students.pop()
  console.log('Task4 - Deleted last student:', students)
}
task4()

//* Requisito 5 - Eliminar un alumno aleatoriamente de la clase
function task5() {
  const randomIndex = calculateRandomNumber(0, students.length -1)
  console.log('Before deleting random stundent in', randomIndex, 'position:', students)
  students.splice(randomIndex, 1)
  console.log('Task5 - Deleted random student:', students)
}
task5()

//* Requisito 6 - Mostrar por consola todos los datos de los alumnos que son chicas
function task6() {
  const femArray = [];
  students.forEach(student => {
    if (student.gender === 'female') {
      femArray.push(student.name)
    }
  });
console.log('Task6 - Female students:', femArray)
}
task6()

//* Requisito 7 - Mostrar por consola el número de chicos y chicas que hay en la clase
function task7() {
  let femStudentsNum = 0;
  let maleStudentsNum = 0;
  students.forEach(student => {
    if (student.gender === 'female') {
      femStudentsNum += 1
    }
    else {
      maleStudentsNum += 1
    }
  });
console.log('Task7 - Female students number:', femStudentsNum, '|| Male students number:', maleStudentsNum )
}
task7()

//* Requisito 8 - Mostrar true o false por consola si todos los alumnos de la clase son chicas
function task8() {
  console.log('Task8 - "All students are females":', students.every((student) => student.gender === 'female'))
  };
task8()

//* Requisito 9 - Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años
function task9() {
  let studentsBetween20And25 = [];
  students.forEach(student => {
    if (student.age >= 20 && student.age <= 25) {
      studentsBetween20And25.push(student.name)
    }
  })
  console.log(studentsBetween20And25)
}
task9()

//* Requisito 10 - Añadir alumno nuevo

function nameByGender(gender) {
  let choosenName = '';
  if (gender === 'male') {
    choosenName = availableMaleNames[calculateRandomNumber(0, availableMaleNames.length -1)]
  } else {
    choosenName = availableFemaleNames[calculateRandomNumber(0, availableFemaleNames.length -1)]
  }
  return choosenName
}

function task10() {
  let randomGender = availableGenders[calculateRandomNumber(0, 1)]
  let newStudent = {
    age: calculateRandomNumber(20, 50),
    examScores: [],
    gender: randomGender,
    name: nameByGender(randomGender)
  };
  console.log('Task 10 - New student:', newStudent)
 
}
task10()

//* Requisito 11 - Mostrar por consola el nombre de la persona más joven de la clase
function task11() {
students.sort((a, b) => a.age - b.age)
console.log(students)
console.log('Task 11 - Younguest student is', students[0].name)
}
task11()

//* Requisito 12 - Mostrar por consola la edad media de todos los alumnos de la clase
function task12() {
  let studentAges = [];
  students.forEach(student => { 
    studentAges.push(student.age)
  })
  //! revisar fx avergage
  let result = studentAges.reduce(function(x, y) {
    let sum = x + y;
    let ave = sum / studentAges.length;
    return ave;
}, 0);
console.log(parseInt(result)); 
}
task12()

//* Requisito 13 - Mostrar por consola la edad media de las chicas de la clase
function task13() {
  let femStudentAges = students.filter(student => student.gender == 'female') 
  console.log(femStudentAges); 
  //! revisar fx avergage
  let result = femStudentAges.reduce(function(x, y) {
    let sum = x + y;
    let ave = sum / femStudentAges.length;
    return ave;
}, 0);
console.log(parseInt(result)); 
}
task13()

//* Requisito 14 - Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas
function task14() {
  let femStudentAges = ''
  students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10))) 
  
console.log(students); 
}
task14()

//* Requisito 15 - Ordenar el array de alumnos alfabéticamente según su nombre
function task15() {
  console.log('before:',students)
  students.sort((a, b) => a.name.localeCompare(b.name))
  console.log(students)
  }
  task15()