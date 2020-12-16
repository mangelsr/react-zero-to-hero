// VARIABLES Y CONSTANTES
const name = 'Miguel';
const lastName = 'Sanchez';

let diceValue = 5;

console.log({ name, lastName, diceValue });

diceValue = 6;

console.log({ name, lastName, diceValue });


// TEMPLATE STRINGS
const completeName = `${name} ${lastName}`;
console.log({ completeName });

function getSaludo(name) {
  return `Hello world ${name}`;
}

console.log(`${getSaludo(completeName)}`);

const person = {

};

console.log(person);