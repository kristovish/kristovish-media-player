const audio = document.getElementById("audio");
const volumeControl = document.getElementById("volume-control");
const volumeDisplay = document.getElementById("volume-display");
const stationMenu = document.querySelector('.station-menu');
const stationLinks = document.querySelectorAll('.station-link');
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
    name: 'Kristovish Media Player',
    url: '#'
  },
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
    url: 'https://cosmosfm.stream.laut.fm/cosmosfm?'
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
    url: 'https://retroelectronicmusic.stream.laut.fm/retroelectronicmusic?t302=2023-03-09_09-08-07&uuid=f032bf25-46e3-46fe-881e-215f7364ab56'
  },
  {
    name: 'Skonto Radio',
    url: 'https://stream.radioskontoplus.lv:8443/st128'
  },
  {
    name: 'Kiss Radio',
    url: 'https://streamd.stream.laut.fm/streamd?t302=2023-03-10_03-52-18&uuid=9d3d816b-0689-4451-8d00-42804df8548b'
  },
  {
    name: 'Cassete Radio',
    url: 'https://radioton-stream28.radiohost.de/radioton-mt_mp3-192?'
  },
  {
    name: 'Islam Radio',
    url: 'http://5.9.65.9:8031/stream'
  },
  {
    name: 'Metal Power Radio',
    url: 'https://blackmagicdwarf.stream.laut.fm/blackmagicdwarf?t302=2023-03-19_09-09-57&uuid=724e32c3-aedd-4096-90bf-3dcc3414614a'
  },
];




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

function loadStation(id) {
  const activeStation = stations.find(station => station.name === id);
  if (!activeStation.url) {
    document.getElementById("station-name").innerHTML = "Emisora no disponible";
    document.getElementById("station-name").style.color = "red";
    return;
  }
  audio.src = activeStation.url;
  audio.addEventListener("canplay", function() {
    audio.play();
  });
  document.getElementById("station-name").innerHTML = activeStation.name;
  document.getElementById("station-name").style.color = "black";
}

audio.onerror = function () {
  // Aquí puedes mostrar un mensaje de error al usuario indicando que la emisora no está disponible
  document.getElementById("station-name").innerHTML = "Error al reproducir la estación";
  document.querySelector(".player__title").innerHTML = "Not Available In Your Place";
};

const stationName = document.getElementById("station-name");

for (let i = 0; i < stationLinks.length; i++) {
  stationLinks[i].addEventListener("click", function () {
    loadStation(this.id);
  });
}

function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  audio.src = activeStation.url;
  audio.pause();
  stationName.textContent = activeStation.name;
}
