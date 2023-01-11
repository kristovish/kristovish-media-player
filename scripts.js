const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const volumeControl = document.getElementById("volume-control");
const volumeDisplay = document.getElementById("volume-display");
const stationMenu = document.querySelector('.station-menu');
const mediaInfo = document.getElementById("media-info");


playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

//10 de Enero



const previous = document.getElementById("previous");
let mediaInfoVisible = false;

previous.addEventListener("click", () => {
  if (mediaInfoVisible) {
    // ocultar la informacion relacionada al reproductor
    document.getElementById("media-info").style.display = "none";
    mediaInfoVisible = false;
  } else {
    // mostrar la informacion relacionada al reproductor
    document.getElementById("media-info").style.display = "block";
    mediaInfoVisible = true;
  }
});



mediaInfo.addEventListener("mouseover", () => {
  infoSection.style.display = "block";
});

mediaInfo.addEventListener("mouseout", () => {
  infoSection.style.display = "none";
});


const stations = [
  {
    name: 'Hard Rock Radio',
    url: 'https://n10.radiojar.com/7csmg90fuqruv?rj-ttl=5&rj-tok=AAABe147nwUAAzSNf0FALqXEig'
  },
  {
    name: 'Capital UK Radio',
    url: 'https://media-ice.musicradio.com/CapitalMP3'
  },
  {
    name: 'Rock Nation Radio',
    url: 'https://prclive4.listenon.in/Dance'
  },
  {
    name: 'Cosmos Radio',
    url: 'http://cosmosfm.stream.laut.fm/cosmosfm?'
  }
];

// Obtenemos el botón del menú y la lista de estaciones
const menuBtn = document.getElementById('icon-menu');
const menu = document.querySelector('.station-menu');

menuBtn.addEventListener('click', function(){
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});



// Agregamos un evento click al botón del menú para mostrar/ocultar el menú
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('show-menu');
});


// obtenemos cada uno de los hipervinculos
const stationLinks = document.querySelectorAll('.station-link');

// Agregamos un evento click a cada hipervínculo de estación para activar la estación correspondiente
stationLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    activateStation(link.id);
  });
});



// La función activateStation sería la encargada de activar la estación correspondiente
function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  audio.src = activeStation.url;
  audio.play();
  // etc. para mostrar el nombre de la estación activa en el UI
}


const stationName = document.getElementById("station-name");

// dentro de tu función activateStation()
function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  audio.src = activeStation.url;
  audio.play();
  
  // actualizar el nombre de la estación en la UI
  stationName.textContent = activeStation.name;
}


// Evento para volver a mostrar la etiqueta "Kristovish Media Player" cuando se pausa la reproducción
audio.addEventListener('pause', function() {
  stationName.textContent = "Kristovish Media Player";
});

stationLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Obtenemos el id del enlace clickeado
    const stationId = link.id;
    // Obtenemos el stream de la estacion 
    const stationUrl = stations[stationId];
    // configuramos el stream en el reproductor de audio
    audio.src = stationUrl;
    // iniciamos la reproducción
    audio.play();
  });
});


let currentStation = 0;

const nextStation = () => {
    currentStation = currentStation === stations.length  ? 0 : currentStation + 1;
    audio.src = stations[currentStation].url;
    audio.play();
    stationName.innerHTML = stations[currentStation].name;
}

const prevStation = () => {
    currentStation = currentStation === 0 ? stations.length - 1 : currentStation - 1;
    audio.src = stations[currentStation].url;
    audio.play();
    stationName.innerHTML = stations[currentStation].name;
}

document.getElementById("forward").addEventListener("click", nextStation);
document.getElementById("backward").addEventListener("click", prevStation);

const forwardBtn = document.getElementById("forward");
forwardBtn.addEventListener("click", () => {
    // si la estación actual es la última del arreglo, selecciona la primera
    if(currentStation === stations[stations.length-1]) {
        currentStation = stations[0];
    } else {
        // si no, selecciona la siguiente estación
        currentStation = stations[stations.indexOf(currentStation)+1];
    }
    // activa la estación seleccionada
    activateStation(currentStation);
});


audio.volume = 0.5;
volumeControl.addEventListener("input", () => {
  setVolume(volumeControl.value);
});

function setVolume(value) {
  audio.volume = value;
}


const volumeRange = document.getElementById("volume-control");
const volumePercentage = document.getElementById("volume-display");

volumeRange.addEventListener("input", function() {
  const volumeValue = this.value;
  volumePercentage.innerHTML = `${volumeValue}%`;
});


function setVolume(value) {
  audio.volume = value;
  document.getElementById("volume-display").textContent = `${Math.round(value * 100)}%`;
}


//logo360
setInterval(() => {
  const img = document.querySelector('.player__img');
  img.classList.toggle('rotate-image');
}, 25000);