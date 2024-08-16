import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './AnimalList.module.css'; // Import CSS module



const AnimalList = () => {
    const animals = [
        'Coral',
        'Elephant', 
        'Hummingbird',
        'Gorilla',
        'Giraffe', 
        'Jellyfish', 
        'Lion', 
        'Manatee', 
        'Owl', 
        'Penguin', 
        'Red Panda', 
        'Shark', 
        'Sloth', 
        'Tiger',
        'Wolf'
      ];
      
    const center: LatLngTuple = [44.7710, -93.195];

    return (
        <>
        <div>
            <MapContainer 
                center={center} 
                zoom={16.6} 
                className={styles.mapContainer} // Use the class from the CSS module
                style={{ height: '600px', width: '100%' }}
                // Pass options to the map
                scrollWheelZoom={false}

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                <Popup>
                    <a href="/animal/ape" style={{ textDecoration: 'none', color: 'black' }}>
                    Ape Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7686, -93.198]}>
                <Popup>
                    <a href="/animal/elephant" style={{ textDecoration: 'none', color: 'black' }}>
                    Elephant Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7690, -93.195]}>
                <Popup>
                    <a href="/animal/giraffe" style={{ textDecoration: 'none', color: 'black' }}>
                    Giraffe Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7720, -93.200]}>
                <Popup>
                    <a href="/animal/jellyfish" style={{ textDecoration: 'none', color: 'black' }}>
                    Jellyfish Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7740, -93.192]}>
                <Popup>
                    <a href="/animal/lion" style={{ textDecoration: 'none', color: 'black' }}>
                    Lion Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7710, -93.195]}>
                <Popup>
                    <a href="/animal/manatee" style={{ textDecoration: 'none', color: 'black' }}>
                    Manatee Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7713, -93.193]}>
                <Popup>
                    <a href="/animal/panda-bear" style={{ textDecoration: 'none', color: 'black' }}>
                    Panda Bear Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7714, -93.194]}>
                <Popup>
                    <a href="/animal/penguin" style={{ textDecoration: 'none', color: 'black' }}>
                    Penguin Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7715, -93.190]}>
                <Popup>
                    <a href="/animal/polar-bear" style={{ textDecoration: 'none', color: 'black' }}>
                    Polar Bear Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7716, -93.189]}>
                <Popup>
                    <a href="/animal/red-panda" style={{ textDecoration: 'none', color: 'black' }}>
                    Red Panda Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7712, -93.191]}>
                <Popup>
                    <a href="/animal/sea-otter" style={{ textDecoration: 'none', color: 'black' }}>
                    Sea Otter Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7717, -93.193]}>
                <Popup>
                    <a href="/animal/sloth" style={{ textDecoration: 'none', color: 'black' }}>
                    Sloth Exhibit
                    </a>
                </Popup>
                </Marker>
                <Marker position={[44.7719, -93.195]}>
                <Popup>
                    <a href="/animal/tiger" style={{ textDecoration: 'none', color: 'black' }}>
                    Tiger Exhibit
                    </a>
                </Popup>
                </Marker>
            </MapContainer>

        </div>
        </>
    );
};

export default AnimalList;







{/* <h1>Animal List</h1>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {animals.map(animal => (
                    <li key={animal}>
                        <Link to={`/animal/${encodeURIComponent(animal)}`} style={{ color: 'inherit', textDecoration: 'none' }}>{animal}</Link>
                    </li>
                ))} */}
