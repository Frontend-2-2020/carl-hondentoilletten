// import GoogleMapsLoader from "google-maps";
//indien require erbij zit, is dit een oudere versie. is een vb, niets anders
import L from "leaflet";
import "leaflet/dist/leaflet.css"
import '../styles/index.scss';



// start een mapje op met id map. Alles achter de L is van Leaflet zelf
var map = L.map("map", {
    center: [51.193142, 3.218529],
    zoom: 17
});

// Dit is om onze img te plaatsen in onze kaart. moet onder het aanmaken van de map (basisjs, van boven naar beneden)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Custom marker toevoegen
var myIcon = L.icon({
    iconUrl: 'public/marker.png',
    // Size bezichtigen in details van de image
    iconSize: [32, 37],
    // 16 is de helft van onze eerste siz
    iconAnchor: [16, 37],
    // locatie waar onze pop-up verschijnt
    popupAnchor: [-3, -76],
});
//gaan via maps.google.com, klikken op locatie in de buurt en de gegevens verschijnen.
var marker= L.marker([51.193142, 3.218529], {icon:myIcon}).addTo(map);
// voor meerdere markers:

var marker2= L.marker([51.193142, 3.228529], {icon:myIcon}).addTo(map);