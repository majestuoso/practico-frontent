// ✅ Cards locales
const cards = [
  { title: "cuotas de $370", description: "Financiación accesible en cuotas fijas", image: "img/fiat1.jpeg" },
  { title: "promo bancaria", description: "Descuentos exclusivos con bancos adheridos", image: "img/fiat2.jpeg" },
  { title: "entrega y cuotas fijas!!!!", description: "Entrega inmediata y financiación estable", image: "img/fiat3.jpeg" },
  { title: "prestamos personales", description: "Solicitá tu préstamo para tu auto", image: "img/fiat4.jpeg" },
  { title: "anotate con tu dni", description: "Solo con tu DNI podés acceder", image: "img/fiat5.jpeg" },
  { title: "test drive", description: "Probá el auto antes de comprarlo", image: "img/fiat6.jpeg" },
];

const cardContainer = document.getElementById("cards");

// ✅ Renderizar las cards locales
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
