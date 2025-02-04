console.log("Hello from js");

const map = L.map("map").setView([-1.286389, 36.817223], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let markers = L.markerClusterGroup();
let healthFacilities = [
  { name: "Kenyatta National Hospital", lat: -1.3002, lng: 36.8063 },
  { name: "Aga Khan University Hospital", lat: -1.2653, lng: 36.8226 },
  { name: "Nairobi Hospital", lat: -1.2958, lng: 36.8081 },
  { name: "Mater Hospital", lat: -1.3172, lng: 36.8466 },
  { name: "MP Shah Hospital", lat: -1.2647, lng: 36.8215 },
  { name: "Karen Hospital", lat: -1.3431, lng: 36.7191 },
  { name: "Coptic Hospital", lat: -1.2929, lng: 36.8075 },
  { name: "Gertrude's Children's Hospital", lat: -1.235, lng: 36.8319 },
  { name: "Mediheal Hospital Parklands", lat: -1.2655, lng: 36.8156 },
  { name: "Nairobi Women's Hospital", lat: -1.2904, lng: 36.8211 },
  { name: "M.P. Shah Hospital Village Market", lat: -1.2308, lng: 36.802 },
  { name: "Avenue Hospital", lat: -1.2705, lng: 36.8322 },
  { name: "The Nairobi West Hospital", lat: -1.3125, lng: 36.8116 },
  { name: "Bliss Medical Centre", lat: -1.2823, lng: 36.8219 },
  { name: "Plainsview Hospital", lat: -1.3244, lng: 36.8775 },
  { name: "Ruai Family Hospital", lat: -1.292, lng: 37.0002 },
  { name: "Mbagathi District Hospital", lat: -1.3094, lng: 36.8078 },
  { name: "Embakasi Hospital", lat: -1.3247, lng: 36.9025 },
  { name: "Komarock Modern Hospital", lat: -1.2809, lng: 36.8883 },
  { name: "Bristol Park Hospital", lat: -1.2871, lng: 36.8796 },
  { name: "Aga Khan University Hospital", lat: -1.2668, lng: 36.8324 },
  { name: "Kangemi Health Centre", lat: -1.2702, lng: 36.8261 },
  { name: "Dandora 2 Health Centre", lat: -1.26, lng: 36.89 },
  { name: "Pumwani Dispensary", lat: -1.2833, lng: 36.85 },
  { name: "Lower Kabete Health Centre", lat: -1.25, lng: 36.75 },
  { name: "Kaloleni Sub-Health Centre", lat: -1.3, lng: 36.85 },
  { name: "Jericho Health Centre", lat: -1.3, lng: 36.87 },
  { name: "Waithaka Health Centre", lat: -1.3, lng: 36.75 },
  { name: "Karen Health Centre", lat: -1.3167, lng: 36.7167 },
  { name: "Ngong Road Health Centre", lat: -1.3, lng: 36.8 },
  { name: "Langata Health Centre", lat: -1.3667, lng: 36.75 },
  { name: "Kahawa Health Centre", lat: -1.1833, lng: 36.9 },
  { name: "Kamiti Health Centre", lat: -1.2, lng: 36.9 },
  { name: "Railways Training School Clinic", lat: -1.2833, lng: 36.8167 },
  { name: "Kibera DO Health Centre", lat: -1.3167, lng: 36.7833 },
  { name: "Westlands Health Centre", lat: -1.2667, lng: 36.8 },
  { name: "Karura Health Centre", lat: -1.25, lng: 36.8 },
  { name: "Riruta Health Centre", lat: -1.3, lng: 36.75 },
  { name: "Kariobangi Health Centre", lat: -1.25, lng: 36.9 },
  { name: "Locomotive Health Centre", lat: -1.2833, lng: 36.85 },
  { name: "Mji Wa Huruma Dispensary", lat: -1.25, lng: 36.8 },
];

healthFacilities.forEach(function (facility) {
  let marker = L.marker([facility.lat, facility.lng]).bindPopup(
    "<b>" + facility.name + "</b>"
  );
  markers.addLayer(marker);
});

map.addLayer(markers);
