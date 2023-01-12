const audio = document.getElementById("audio");
const volumeControl = document.getElementById("volume-control");
const volumeDisplay = document.getElementById("volume-display");
const stationMenu = document.querySelector('.station-menu');
const mediaInfo = document.getElementById("media-info");


let iscurrentStation;

function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  audio.src = activeStation.url;
  audio.play();
  // etc. para mostrar el nombre de la estación activa en el UI
}

const playPause = document.getElementById("play");
const playIcon = document.querySelector(".fa-broadcast-tower");
const pauseIcon = document.querySelector(".fa-pause-btn");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    audio.play();
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
  } else {
    audio.pause();
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
  }
});


//10 de Enero



const previous = document.getElementById("star");
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
  },
  {
    name: 'Prambos Radio',
    url: 'https://22283.live.streamtheworld.com:443/PRAMBORS_FM.mp3?dist=onlineradiobox'
  },
  {
    name: 'I-Radio',
    url: 'https://n03.radiojar.com/4ywdgup3bnzuv?rj-ttl=5&rj-tok=AAABe120nigAlANV6qVbAOh-ZQ'
  },
  {
    name: 'Denger Radio',
    url: 'http://stream.denger.in:8888/dmi'
  },
  {
    name: 'Skonto Radio',
    url: 'https://stream.radioskontoplus.lv:8443/st128'
  },
  {
    name: 'Kiss Radio',
    url: 'https://radioindia.net/radio/kissfmindia/icecast.audio'
  },
  {
    name: 'Cassete Radio',
    url: 'https://zas1.ndx.co.za:8158/stream?1596196923074'
  },
  {
    name: 'E! Radio',
    url: 'https://207.148.74.192:7874/stream.mp3'
  },
];
const workingStations = [];

stations.forEach(station => {
  // Enviamos una solicitud GET a la URL del stream
  fetch(station.url)
    .then(response => {
      // Si el estado es 200, la estación está funcionando
      if (response.status === 200) {
        workingStations.push(station);
      }
    })
    .catch(error => {
      console.error(`Error al obtener la estación ${station.name}: ${error}`)
      //elimina elementos del reproductor con enlaces rotos
      const element = document.getElementById(station.name);
      element.parentNode.removeChild(element);
    })
    .finally(() => {
      // Asignamos el array de estaciones funcionando a la variable stations
      stations = workingStations;
    });
});



// Obtenemos el botón del menú y la lista de estaciones
const menuBtn = document.getElementById('icon-menu');
const menu = document.querySelector('.station-menu');

menuBtn.addEventListener('click', function () {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});



// Agregamos un evento click al botón del menú para mostrar/ocultar el menú
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('show-menu');
});


// obtenemos cada uno de los hipervinculos
// Obtenemos todos los elementos del menú que tienen la clase "station-link"
const stationLinks = document.querySelectorAll(".station-link");
stationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    activateStation(this.id);
  });
});
function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  audio.src = activeStation.url;
  audio.play();
  // etc. para mostrar el nombre de la estación activa en el UI
  playIcon.classList.add("hide");
  pauseIcon.classList.remove("hide");
}

for (let i = 0; i < stationLinks.length; i++) {
  stationLinks[i].addEventListener("click", function () {
    activateStation(this.id);
  });
}

function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  if (!activeStation.url) {
    document.getElementById("station-name").innerHTML = "Emisora no disponible";
    document.getElementById("station-name").style.color = "red";
    return;
  }
  audio.src = activeStation.url;
  audio.play();
  document.getElementById("station-name").innerHTML = activeStation.name;
  document.getElementById("station-name").style.color = "black";
}

audio.onerror = function () {
  // Aquí puedes mostrar un mensaje de error al usuario indicando que la emisora no está disponible
  document.querySelector(".player__title").innerHTML = "Not Available In Your Place";
};

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
audio.addEventListener('pause', function () {
  stationName.textContent = "Kristovish Media Player";
});


audio.addEventListener('play', () => {
  document.querySelector('.player__title').innerHTML = 'Playing now';
});
audio.addEventListener('pause', () => {
  document.querySelector('.player__title').innerHTML = 'Radio Player';
});


stationLinks.forEach(function (link) {
  link.addEventListener('click', function () {
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
  currentStation = currentStation === stations.length ? 0 : currentStation + 1;
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
  currentStationIndex = (currentStationIndex + 1) % stations.length;
  activateStation();
});

const backwardBtn = document.getElementById("backward");
backwardBtn.addEventListener("click", () => {
  currentStationIndex = (currentStationIndex - 1 + stations.length) % stations.length;
  activateStation();
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

volumeRange.addEventListener("input", function () {
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