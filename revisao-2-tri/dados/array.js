const pokemonList = ["Pikachu", "Charmander", "Bulbassauro", "Squirtle"];
//   0             1             2             3
console.log(pokemonList[3]);
for (let i = 0; i < pokemonList.length; i++) {
  console.log(pokemonList[i]);
}
for (let pokemon in pokemonList) {
  console.log(pokemonList[pokemon]);
}
for (let pokemon of pokemonList) {
  console.log(pokemon);
}
