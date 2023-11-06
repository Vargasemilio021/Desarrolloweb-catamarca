//1-Suma de Números Pares: Crea un programa que sume todos los números pares en un array.

function sumaPares(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            suma += arr[i];
        }
    }
    return suma;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`la suma de todos los numero es:  ${sumaPares(numeros)} `); 

//2-Factorial de un Número: Escribe una función que calcule el factorial de un número utilizando un bucle.


function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(`la suma de todos los numero es:  ${factorial(5)} `);

//3-filtrar Números Primos: Crea una función que reciba un array de números y devuelva un nuevo array que contenga solo los números primos.


function filtrarNumerosPrimos(numeros) {
    const numerosPrimos = [];

    function esPrimo(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            numerosPrimos.push(numeros[i]);
        }
    }

    return numerosPrimos;
}

let numeros2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarNumerosPrimos(numeros)); 

//4-Cálculo de Promedio: Crea una función que calcule el promedio de los elementos en un array.
function calcularPromedio(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
}

let numeros3 = [10, 20, 30, 40, 50];
console.log(calcularPromedio(numeros)); 

//5-Eliminar Duplicados en un Array: Escribe una función que tome un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados
function eliminarDuplicados(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (resultado.indexOf(arr[i]) === -1) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10];
console.log(eliminarDuplicados(arrayConDuplicados)); 
// 6-Ordenar un Array de Objetos: Crea una función que ordene un array de objetos por uncampo específico dentro de los objetos.


function ordenarArrayObjetos(arrayObjetos, campoOrdenar) {
    return arrayObjetos.sort((a, b) => {
       if (a[campoOrdenar] < b[campoOrdenar]) {
         return -1;
       }
       if (a[campoOrdenar] > b[campoOrdenar]) {
         return 1;
       }
       return 0;
    });
   }
   
   // Ejemplo de uso:
   
   const arrayObjetos = [
    {"nombre": "Juan", "edad": 25},
    {"nombre": "Ana", "edad": 22},
    {"nombre": "Carlos", "edad": 30}
   ];
   
   const arrayObjetosOrdenados = ordenarArrayObjetos(arrayObjetos, "edad");
   
   console.log(arrayObjetosOrdenados);