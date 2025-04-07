// Ejercicios destructuring

// Ejercicio 1 - Dado el objeto empleados, extrae la empleada Ana completa en ana
// el objeto empleados está declarado
// la variable ana tiene el valor correcto

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados[1];


// Ejercicio 2 - Dado el objeto empleados, extrae el email de luis en la variable emailLuis
// el objeto empleados está declarado
// la variable emailLuis tiene el valor correcto


const emailLuis = empleados[0].email

// Ejecicio 3 - Dadas las variables a y b intercambia sus valores
// la variable a tiene el valor correcto
// la variable b tiene el valor correcto


let a = 3;
let b = 5;


// Ejecicio 4 - Dado el objeto HIGH_TEMPERATURES cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

// El objeto HIGH_TEMPERATURES está declarado
// la variable maximaHoy tiene el valor correcto
// la variable maximaManana tiene el valor correcto
// Ejercicios spread operator

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };


const { today:maximaHoy, tomorrow:maximaManana } = HIGH_TEMPERATURES


// Ejercicio 5 - Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.


function sumEveryOther(...args) {
    let suma = 0;
  
    for (let i = 0; i < args.length; i++) {
      suma += args[i];
    }
  
    return suma;
  }
  
  
sumEveryOther(1,2,3,4,5) 
sumEveryOther(1,2,3) 
sumEveryOther(1,1,1,1,1,1,1)


// Ejercicio 6 - Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números)
// addOnlyNums(1,"perro", 6, "gato", "ratón", 7) to equal 14
// addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina") to equal 14


function addOnlyNums(...args) {
    let suma = 0;
  
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === "number") {
        suma += args[i];
      }
    }
  
    return suma;
  }
  

// Ejercicio 7 - Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.


function countTheArgs(...args) {
    return args.length;
  }
  

// Ejercicio 8 - Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).


function combineTwoArrays(array1, array2){
    return [...array1, ...array2];
}


// Ejercicio 9 - Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// onlyUniques("gato", "pollo", "cerdo", "cerdo") devuelve ['gato', 'pollo', 'cerdo']
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8) devuelve [1, 2, 3, 6, 7, 8]


function onlyUniques(...args) {
    return [...new Set(args)];
  }
  


// Ejercicio 10 - Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array..
// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) devuelve [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12]) devuelve [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function combineAllArrays(...args) {
    return args.flat();
  }
  

// Ejercicio 11 - Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
// sumAndSquare(1,2,3,4,5,6) devuelve 91
// sumAndSquare(1,2,3,5) devuelve 39


function sumAndSquare(...args){
    let resultado = 0;
    for (let i = 0; i< args.length; i++){
    resultado += args[i] **2;
    }
    return resultado;
}

