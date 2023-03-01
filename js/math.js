/* - Crea una función que reciba un número y genere un número aleatorio entre 0 y ese número. */

function randomNumber(a) {
  return Math.random() * a;
}

console.log(randomNumber(4));

/* Crea una función que reciba un minimo y un máximo y genere un número entero aleatorio entre esos dos números. */

function randomMinMax(a, b) {
  return Math.random() * (a - b) + b;
}
console.log(Math.floor(randomMinMax(4, 8)));
