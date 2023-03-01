/* # Ejercicios

## Arrays

/* Usando la función que genera un número aleatorio anterior, crea una función que reciba un array de 5 números. Imprime por consola una posición aleatoria del array. */

const array = [1, 3, 5, 6, 7];
const randomPosition = randomNumber => array[Math.floor(Math.random() * array.length)];
console.log(randomPosition(array));

/* Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */

function operacion(arr) {
  const suma = arr.reduce((total, num) => total + num);
  const media = suma / arr.length;
  const mayor = Math.max(...arr);
  const menor = Math.min(...arr);

  console.log('La suma de todos los números es: ' + suma);
  console.log('La media del array es: ' + media);
  console.log('El mayor es ' + mayor + ' y el menor es ' + menor);
}

operacion([4, 2, 9]);

/* Crea una función que reciba un array con 5 números y un número aleatorio entre 0 y 5. La función deberá decir si el array contiene ese número y en qué posición o si no lo contiene. */

function numberPosition(arr, num) {
  const indice = arr.indexOf(num);
  if (indice === -1) {
    return 'El número ' + num + ' no está en el array';
  } else {
    return 'El número ' + num + ' está en la posición ' + indice + ' del array.';
  }
}

const numeros = [2, 7, 8, 4, 1];
const randomNumber = Math.floor(Math.random() * 6);
console.log(numberPosition(numeros, randomNumber));

/* Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100. */

function generateNumber() {
  const numbers = [];

  for (let i = 0; i < 3; i++) {
    numbers.push(Math.floor(Math.random() * 101));
  }

  return numbers;
}

const numerosAleatorios = generateNumber();
console.log(numerosAleatorios);

/* Usando la función anterior, crea otra función que imprima el valor en la posición 0 del array después de haber eliminado la primera y la última posición. */

function imprimirValorPosicionCero() {
  numerosAleatorios.shift();
  numerosAleatorios.pop();
  console.log(numerosAleatorios[0]);
}
imprimirValorPosicionCero();
