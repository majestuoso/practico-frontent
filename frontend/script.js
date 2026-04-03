const cards = [
  {
    title: "cuotas de $370",
    
    image: "img/fiat1.jpeg",
  },
  {
    title: "promo bancaria",
    //description: "This is the description for Card 2.",
    image: "img/fiat2.jpeg",
  },
  {
    title: "entrega y cuotas fijas!!!!",
   // description: "This is the description for Card 3.",
    image: "img/fiat3.jpeg",
  },
  {
    title: "prestamos personales",
   // description: "This is the description for Card 4.",
    image: "img/fiat4.jpeg",
  },
  {
    title: "anotate con tu dni",
   // description: "This is the description for Card 5.",
    image: "img/fiat5.jpeg",
  },
  {
    title: "test drive",
   // description: "This is the description for Card 6.",
    image: "img/fiat6.jpeg",
  },
];

const cardContainer = document.getElementById("cards");

console.log(cardContainer);

cards.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = card.image;
  imageElement.alt = card.title;

  const titleElement = document.createElement("h2");
  titleElement.textContent = card.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = card.description;

  cardElement.appendChild(imageElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(descriptionElement);

  cardContainer.appendChild(cardElement);
});

// Otra forma de hacerlo es usando innerHTML, pero no es tan recomendable porque puede ser menos seguro y más difícil de mantener. Sin embargo, aquí tienes un ejemplo de cómo hacerlo con innerHTML:

/*
cards.forEach(card => {
  cardContainer.innerHTML += `
    <div class="card">
      <img src="${card.image}" alt="${card.title}" />
      <h2>${card.title}</h2>
      <p>${card.description}</p>
    </div>
  `;
});
*/
