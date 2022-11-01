const pokemones = require('./object');

const tipoFuego = pokemones.filter((pokemon) => pokemon.tipo === 'Fuego');
console.log(tipoFuego); // [ { nombre: 'Charmander', tipo: 'Fuego' }, { nombre: 'Charmeleon', tipo: 'Fuego' }, { nombre: 'Charizard', tipo: 'Fuego' } ]