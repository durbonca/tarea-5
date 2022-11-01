const pokemones = require('./arr');

const UpperCasePokemons = pokemones.map((pokemon) => pokemon.toUpperCase());
console.log(UpperCasePokemons); // [ 'PIKACHU', 'CHARMANDER', 'BULBASAUR', 'SQUIRTLE' ]