let currentImageIndex = {
  pikachu: 0,
  charmander: 0,
  squirtle: 0,
  bulbasaur: 0,
};

const images = {
  pikachu: ["media/pichu.webp", "media/pikachu.png", "media/raichu.png"],
  charmander: [
    "media/Charmander.webp",
    "media/Charmeleon.webp",
    "media/charizard.png",
  ],
  squirtle: [
    "media/squirtle.png",
    "media/wartortle.webp",
    "media/Blastoise.webp",
  ],
  bulbasaur: [
    "media/bulbasaur.png",
    "media/ivysaur.webp",
    "media/venusaur.webp",
  ],
};

function nextImage(pokemon) {
  // Incrementar el índice actual
  currentImageIndex[pokemon] =
    (currentImageIndex[pokemon] + 1) % images[pokemon].length;
  const pokemonImage = document.getElementById(`${pokemon}Image`);
  // Actualizar la fuente de la imagen
  pokemonImage.src = images[pokemon][currentImageIndex[pokemon]];
}

// Llamada inicial para mostrar la primera imagen al cargar la página
window.onload = function () {
  Object.keys(images).forEach((pokemon) => {
    const pokemonImage = document.getElementById(`${pokemon}Image`);
    pokemonImage.src = images[pokemon][currentImageIndex[pokemon]];
  });
};

function toggleColors() {
  const body = document.body;
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#1e1e1e";
    body.style.color = "green";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}
