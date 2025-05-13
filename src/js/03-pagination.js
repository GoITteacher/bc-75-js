import { getPokemons } from './modules/pokemonApi';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  pokemonListElem: document.querySelector('.js-pokemon-list'),
  prevBtnElem: document.querySelector('.js-btn-prev'),
  nextBtnElem: document.querySelector('.js-btn-next'),
};

//!======================================================
const PAGE_SIZE = 8;
let initUrl = `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=0`;
let nextUrl = '';
let prevUrl = '';

//!======================================================

document.addEventListener('DOMContentLoaded', async () => {
  const data = await getPokemons(initUrl);
  nextUrl = data.next;
  prevUrl = data.prev;
  renderPokemon(data.results);
  updateBtnStatus();
});

//!======================================================
refs.nextBtnElem.addEventListener('click', async () => {
  const data = await getPokemons(nextUrl);
  nextUrl = data.next;
  prevUrl = data.previous;
  renderPokemon(data.results);
  updateBtnStatus();
});

refs.prevBtnElem.addEventListener('click', async () => {
  const data = await getPokemons(prevUrl);
  nextUrl = data.next;
  prevUrl = data.previous;
  renderPokemon(data.results);
  updateBtnStatus();
});

//!======================================================
function pokemonTemplate({
  sprites,
  name,
  id,
  weight,
  height,
  base_experience,
  order,
}) {
  return `<li class="card pokemon">
  <img
    class="pokemon-img"
    src="${sprites.front_default}"
    alt="#"
  />
  <div class="pokemon-header">
    <h4 class="pokemon-title">${name}</h4>
    <span class="pokemon-id">#${(id + '').padStart(5, '0')}</span>
  </div>

  <div class="pokemon-desc">
    <span>Weight: ${weight}</span>
    <span>Height: ${height}</span>
    <span>Experience: ${base_experience}</span>
    <span>Order: ${order}</span>
  </div>

  <div class="pokemon-footer"></div>
</li>`;
}

function renderPokemon(pokemonList) {
  const markup = pokemonList.map(pokemonTemplate).join('');
  refs.pokemonListElem.innerHTML = markup;
}
//!======================================================

function updateBtnStatus() {
  refs.nextBtnElem.disabled = !nextUrl;
  refs.prevBtnElem.disabled = !prevUrl;
}
