console.log("Hello from js");

const map = L.map('map').setView([-1.286389, 36.817223], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        let markers = L.markerClusterGroup();
        let healthFacilities = [
            {"name": "Kenyatta National Hospital", "lat": -1.3001, "lng": 36.8063},
            {"name": "The Nairobi Hospital", "lat": -1.2961, "lng": 36.8047},
            {"name": "Karen Hospital", "lat": -1.3361, "lng": 36.7261},
            {"name": "Mbagathi District Hospital", "lat": -1.3026, "lng": 36.7876},
            {"name": "Aga Khan University Hospital", "lat": -1.2668, "lng": 36.8324}
        ];

        healthFacilities.forEach(function(facility) {
            let marker = L.marker([facility.lat, facility.lng])
                .bindPopup('<b>' + facility.name + '</b>');
            markers.addLayer(marker);
        });

        map.addLayer(markers);