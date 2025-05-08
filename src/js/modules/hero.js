const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};
//!======================================================

function searchHero(superhero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';

  const params = new URLSearchParams({
    hero: superhero,
  });

  const url = `${BASE_URL}?${params}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('УПС! Щось пішло не так!');
    }
  });
}

//!======================================================

function heroTemplate(hero) {
  const { appearance, biography, images, name, powerstats } = hero;
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${biography.fullName}</p>
      <p class="hero-bio">Publisher - ${biography.publisher}</p>
      <p class="hero-bio">Alignment - ${biography.alignment}</p>
      <p class="hero-bio">Gender - ${appearance.gender}</p>
      <p class="hero-bio">Race - ${appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${powerstats.power}</span>
      <span>Strength: ${powerstats.strength}</span>
      <span>Speed: ${powerstats.speed}</span>
      <span>Combat: ${powerstats.combat}</span>
    </div>
  </div>
</div>`;
}

//!======================================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const superhero = e.target.elements.query.value;

  searchHero(superhero)
    .then(data => {
      const markup = heroTemplate(data);
      refs.heroEl.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(err => {
      console.log('УПС');
    });

  e.target.reset();
});
