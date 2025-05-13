import axios from 'axios';

export async function getPokemons(url) {
  const res = await axios.get(url);

  const promises = res.data.results.map(el => getPokemonInfo(el.name));
  const pokemons = await Promise.all(promises);
  res.data.results = pokemons;
  return res.data;
}

export async function getPokemonInfo(name) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.data;
}
