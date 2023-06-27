//http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL =
  'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement('div');
  const newImg = document.createElement('img');
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  newImg.src = `${baseURL}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
