


const audio = document.getElementById("audio");
const volumeControl = document.getElementById("volume-control");
const volumeDisplay = document.getElementById("volume-display");
const stationMenu = document.querySelector('.station-menu');
const stationLinks = document.querySelectorAll('.station-link');
const mediaInfo = document.getElementById("media-info");
const playPause = document.getElementById("play");
const playIcon = document.querySelector(".fa-power-off");
const pauseIcon = document.querySelector(".fa-pause-btn");
const infoSection = document.getElementById("info-section"); // agregado




playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    audio.play();
    playIcon.classList.toggle("hide"); // modificado
    pauseIcon.classList.toggle("hide"); // modificado
  } else {
    audio.pause();
    playIcon.classList.toggle("hide"); // modificado
    pauseIcon.classList.toggle("hide"); // modificado
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
    name: '🎼Hard Rock Jakarta',
    url: 'https://n10.radiojar.com/7csmg90fuqruv?rj-ttl=5&rj-tok=AAABe147nwUAAzSNf0FALqXEig'
  },
  {
    name: '🎼Capital United Kingdom',
    url: 'https://media-ice.musicradio.com/CapitalMP3'
  },
  {
    name: '🎼Rock Nation Radio',
    url: 'https://prclive4.listenon.in/Dance'
  },
  {
    name: '🎼Cosmos San Juan',
    url: 'https://cosmosfm.stream.laut.fm/cosmosfm?'
  },
  {
    name: '🎼Prambos Jakarta',
    url: 'https://22283.live.streamtheworld.com:443/PRAMBORS_FM.mp3?dist=onlineradiobox'
  },
  {
    name: '🎼I-Radio Jakarta',
    url: 'https://n03.radiojar.com/4ywdgup3bnzuv?rj-ttl=5&rj-tok=AAABe120nigAlANV6qVbAOh-ZQ'
  },
  {
    name: '🎼Denger EBM Radio',
    url: 'https://retroelectronicmusic.stream.laut.fm/retroelectronicmusic?t302=2023-03-09_09-08-07&uuid=f032bf25-46e3-46fe-881e-215f7364ab56'
  },
  {
    name: '🎼Skonto Plus Riga',
    url: 'https://stream.radioskontoplus.lv:8443/st128'
  },
  {
    name: '🎼Kiss Radio',
    url: 'https://streamd.stream.laut.fm/streamd?t302=2023-03-10_03-52-18&uuid=9d3d816b-0689-4451-8d00-42804df8548b'
  },
  {
    name: '🎼Radio Ton Deutschland',
    url: 'https://radioton-stream28.radiohost.de/radioton-mt_mp3-192?'
  },
  {
    name: '🎼Islam Radio Chile',
    url: 'https://centova.neonetwork.cl:9031/live'
  },
  {
    name: '🎼Metal Power Radio',
    url: 'https://blackmagicdwarf.stream.laut.fm/blackmagicdwarf?t302=2023-03-19_09-09-57&uuid=724e32c3-aedd-4096-90bf-3dcc3414614a'
  },
  {
    name: '🎼Sabor Latino Radio',
    url: 'https://barriolatinoradio.stream.laut.fm/barriolatinoradio?t302=2023-04-09_09-19-38&uuid=bb7e2bd3-3b0a-451d-b716-19ccc2310453'
  },
  {
    name: '🎼Urbana Radio',
    url: 'https://clubtracks.stream.laut.fm/clubtracks?t302=2023-04-09_09-34-02&uuid=23d7d9be-527d-4bdf-9a27-5a9d3ccf4129'
  },
  {
    name: '🎼Volonta Radio',
    url: 'https://volontaradio.stream.laut.fm/volontaradio?t302=2023-04-09_09-53-29&uuid=44ff8b75-03ff-4d1f-9359-c0550ca7b90f'
  },
  {
    name: '🎼Kronos Radio Wicca',
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/KRONOS_S01_SC'
  },
  {
    name: '🎼J-Pop Sakura 懐かしい Radio',
    url: 'https://cast1.torontocast.com:2170/;?type=http&nocache=3'
  },
  {
    name: '🎼KKFI Indie Radio',
    url: 'https://stream.pacificaservice.org:9000/kkfi_128'
  },
];






let iscurrentStation;

function activateStation(id) {
  const activeStation = stations.find(station => station.name === id);
  audio.src = activeStation.url;
  audio.play();
  // etc. para mostrar el nombre de la estación activa en el UI
}



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


audio.volume = 0.5;

const volumeRange = document.getElementById("volume-control");
const volumePercentage = document.getElementById("volume-display");
volumeRange.setAttribute("min", "10");
volumeRange.setAttribute("max", "100");
volumeRange.setAttribute("step", "10");
volumeRange.value = "50";
setVolume(volumeRange.value);

volumeRange.addEventListener("input", function () {
  const volumeValue = this.value;
  setVolume(volumeValue);
  volumePercentage.innerHTML = `${volumeValue}%`;
});

function setVolume(value) {
  audio.volume = value / 100;
  document.getElementById("volume-display").textContent = `${value}%`;
}



//logo360
setInterval(() => {
  const img = document.querySelector('.player__img');
  img.classList.toggle('rotate-image');
}, 10000);




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
  document.getElementById("station-name").style.color = "#3e0146e3";
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
  stationName.textContent = activeStation.name; // Muestra el nombre de la radio activa
  audio.addEventListener('play', function() { // Agrega un evento para actualizar el nombre de la radio en reproducción
    stationName.textContent = activeStation.name;
  });
}
