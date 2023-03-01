/* # Ejercicios

## Strings

================================================================================================================================================= */

/* Crea dos funciones que reciban una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Una función lo resolverá con if y la otra con un operador ternario. */

function mayus(word) {
  if (word.length > 5) {
    return word.toUpperCase();
  }
}
const minus = word2 => (word2.length < 5 ? word2.toLowerCase() : word2.toUpperCase());

console.log(mayus('murcielago'));
console.log(minus('PERA'));

/* Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación". */

function conjugacion(verbo) {
  if (verbo.endsWith('ar')) {
    return 'El verbo ' + verbo + ' es de la primera conjugación';
  } else if (verbo.endsWith('er')) {
    return 'El verbo ' + verbo + ' es de la segunda conjugación';
  } else {
    return 'El verbo ' + verbo + ' es de la tercera conjugación';
  }
}

console.log(conjugacion('andar'));

/* Crea una función que reciba un sólo parámetro con nombre y apellido separados por un espacio. La función debe separar el nombre y el apellido e imprimirlos por separado en dos console.log. */

const split = word => {
  const space = word.indexOf(' ');
  console.log(word.substring(0, space)), console.log(word.substring(space + 1));
};

split('Pedro Benito');

/*  Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". Resuelve el ejercicio con una sóla línea dentro de la función. */

const generateWord = (word1, word2, word3) => {
  const randomValue = word => Math.floor(Math.random() * word.length);
  console.log(word1.charAt(randomValue(word1)) + word1.charAt(randomValue(word1)) + word2.charAt(randomValue(word2)) + word2.charAt(randomValue(word2)) + word3.charAt(randomValue(word3)) + word3.charAt(randomValue(word3)));
};
generateWord('Hola', 'Adios', 'Mano');

/* Crea una función que reciba un email e imprima por separado el nombre y el dominio. "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". */

const typeEmail = email => {
  const atIndex = email.indexOf('@');
  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex + 1);

  return 'El usuario es ' + username + ' y el dominio es ' + domain;
};

console.log(typeEmail('pedro@mail.com'));

