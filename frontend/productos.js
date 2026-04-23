const cardContainer = document.getElementById("cards");

// ✅ Tu API Key de Pexels (gratis en https://www.pexels.com/api/)
const API_KEY = "rgcuD2Eu7f4twdN5cSOMSq8VMyCvV41zoQ9W7drJ3MTewy4am3tfJeuz"; // <-- reemplazá con tu clave real
const query = "fiat"; // búsqueda de videos de autos
const perPage = 6;
// ✅ Llamada a Pexels Video API
fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=6`, {
  headers: {
    Authorization: API_KEY
  }
})
  .then(response => response.json())
  .then(data => {
    cardContainer.innerHTML = "<h2>Videos encontrados</h2>";
    data.videos.forEach(video => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      // video player
      const videoElement = document.createElement("video");
      videoElement.src = video.video_files[0].link;
      videoElement.controls = true;
      videoElement.width = 300;

      // título
      const titleElement = document.createElement("h3");
      titleElement.textContent = `Video ID: ${video.id}`;

      cardElement.appendChild(videoElement);
      cardElement.appendChild(titleElement);

      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => {
    cardContainer.innerHTML = "<p>Error al cargar videos.</p>";
    console.error("Error:", error);
  });
