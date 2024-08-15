import { Link } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { LatLngTuple } from 'leaflet';
import CarouselPic from '../components/Carousel'
import 'leaflet/dist/leaflet.css';

import styles from './AnimalList.module.css'; // Import CSS module



const Home = () => {
    const animals = [
        'Coral',
        'Elephant', 
        'Hummingbird',
        'Giraffe', 
        'Gorilla',
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
    ]; // List of animals
    const center: LatLngTuple = [44.7685, -93.200];

    return (
        <div>
            
            <h1>Welcome to Nahtazu</h1>
           <CarouselPic/>
           <div>At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
           </div>
            
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
            </MapContainer>

        </div>
    );
};

export default Home;