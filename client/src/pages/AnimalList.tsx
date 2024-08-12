import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './AnimalList.module.css'; // Import CSS module



const AnimalList = () => {
    const animals = ['Elephant', 'Tiger', 'Lion']; // List of animals
    const center: LatLngTuple = [44.7685, -93.200];

    return (
        <>
        <div>
            <h1>Animal List</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal}>
                        <Link to={`/animal/${encodeURIComponent(animal)}`}>{animal}</Link>
                    </li>
                ))}
            </ul>
            <MapContainer 
                center={center} 
                zoom={17} 
                className={styles.mapContainer} // Use the class from the CSS module
                style={{ height: '600px', width: '100%' }}
                // Pass options to the map
                scrollWheelZoom={false}
                dragging={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                <Popup>
                        <a href="/animal/elephant" style={{ textDecoration: 'none', color: 'black' }}>
                            Elephant Exhibit
                        </a>
                    </Popup>
                </Marker>
                <Marker position={[44.7686, -93.198]}>
                <Popup>
                        <a href="/animal/tiger" style={{ textDecoration: 'none', color: 'black' }}>
                            tiger Exhibit
                        </a>
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
        </>
    );
};

export default AnimalList;








