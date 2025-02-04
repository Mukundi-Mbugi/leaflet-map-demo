const map = L.map("map", { drawControl: true }).setView(
  [-1.286389, 36.817223],
  12
);
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "&copy; OpenStreetMap contributors",
// }).addTo(map);

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

//Custom Icon
let redMarker = L.icon({
  iconUrl: "./images/hospital_icon.png",
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point
  popupAnchor: [0, -32], // Popup position
});

//Custom Popup
function createPopup(healthFacilities) {
  const randomImage = `https://picsum.photos/seed/${healthFacilities.name}/50/50`; // Generates a unique image for each hospital
  return `
        <div style="
            text-align: center;
            font-family: Arial, sans-serif;
            padding: 10px;
            width: 200px;">
            <h3 style="margin: 5px 0; color: #007ea7;">${healthFacilities.name}</h3>
            <img src="${randomImage}" alt="${healthFacilities.name}" style="width:50px; height:50px border-radius: 5px; margin-bottom: 5px;">
            <p style="font-size: 14px; color: #333;">A leading healthcare provider in Nairobi.</p>
        </div>
    `;
}

// Base maps
let osmLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

let satelliteLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

let terrainLayer = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }
);

const baseMaps = {
  OpenStreetMap: osmLayer,
  Satellite: satelliteLayer,
  Terrain: terrainLayer,
};

L.control.layers(baseMaps).addTo(map);

//Add facilities to map
healthFacilities.forEach(function (facility) {
  let marker = L.marker([facility.lat, facility.lng], {
    icon: redMarker,
  }).bindPopup(createPopup(facility), { maxWidth: 220 });
  markers.addLayer(marker);
});
map.addLayer(markers);


