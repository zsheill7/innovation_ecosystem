import { useState, useEffect } from 'react';
//import { GoogleSpreadsheet } from 'google-spreadsheet'; // Import Google Spreadsheet package
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import EntityList from './EntityList'; // Import EntityList component

export function ChangeView({ coords }) {
    const map = useMap();
    map.setView(coords, 14);
    return null;
}

export default function Map() {
    const [startups, setStartups] = useState([]);
    const [ecosystems, setEcosystems] = useState([]);
    const [selectedEntity, setSelectedEntity] = useState(null); // Add state for the selected entity

    useEffect(() => {
        // Fetch data from the API route
        fetch('/api/data')
          .then(response => response.json())
          .then(data => {
            console.log("data68");
            console.log(data.startups);
            const startupsWithCoords = data.startups
              .map((startup) => ({
                ...startup,
                lat: parseFloat(startup.Latitude),
                lng: parseFloat(startup.Longitude),
              }))
              .filter((startup) => !isNaN(startup.lat) && !isNaN(startup.lng));
            setStartups(startupsWithCoords);
      
            const ecosystemsWithCoords = data.ecosystems
              .map((ecosystem) => ({
                ...ecosystem,
                lat: parseFloat(ecosystem.Latitude),
                lng: parseFloat(ecosystem.Longitude),
              }))
              .filter((ecosystem) => !isNaN(ecosystem.lat) && !isNaN(ecosystem.lng));
            setEcosystems(ecosystemsWithCoords);
          });
      }, []);

    const handleEntityClick = (entity) => {
        setSelectedEntity(entity);
      };
    
      return (
        <div className="map-container">
          <EntityList
            entities={ecosystems.concat(startups)}
            onEntityClick={handleEntityClick}
          />
          <MapContainer center={[42.357250, -71.105011]} zoom={12} style={{ height: '100vh' }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Add a Marker for each startup */}
            {startups.map((startup) => (
              <Marker
                key={startup.Label}
                position={[startup.lat, startup.lng]}
                icon={L.icon({
                  iconUrl: '/images/green_marker.png',
                  iconSize: [32, 38],
                  iconAnchor: [12, 41],
                  shadowUrl: '/images/marker-shadow.png',
                  shadowSize: [41, 41],
                  shadowAnchor: [12, 41],
                })}
              >
                <Popup position="top">
                  <div>
                    <div><strong>Startup </strong></div>
                    <div><strong>Label:</strong> {startup.Label}</div>
                    <div><strong>Founding Year:</strong> {startup['Founding Year']}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
            {/* Add a Marker for each ecosystem entity */}
            {ecosystems.map((ecosystem) => (
              <Marker
                key={ecosystem.Label}
                position={[ecosystem.lat, ecosystem.lng]}
                icon={L.icon({
                  iconUrl: '/images/blue_marker.png',
                  iconSize: [32, 38],
                  iconAnchor: [12, 41],
                  shadowSize: [41, 41],
                  shadowAnchor: [12, 41],
                })}
              >
                <Popup position="top">
                  <div>
                    <div><strong>{ecosystem.Label}</strong></div>
                    <div><strong>Entity Type:</strong> {ecosystem['Entity Type']}</div>
                    <div><strong>Ecosystem Level:</strong> {ecosystem['Ecosystem Level']}</div>
                    <div><strong>Website:</strong> <a href={ecosystem['Website']} target="_blank" rel="noopener noreferrer">{ecosystem['Website']}</a></div>
                  </div>
                </Popup>
              </Marker>
            ))}
            <ChangeView coords={[42.357250, -71.105011]} />
            {selectedEntity && (
              <ChangeView coords={[selectedEntity.lat, selectedEntity.lng]} />
            )}
          </MapContainer>
        )
      </div>);
}