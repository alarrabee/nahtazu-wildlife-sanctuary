
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 // import { LatLngTuple } from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import styles from './AnimalList.module.css'; // Import CSS module



// const AnimalList = () => {
//     const animals = [
//         'Ape',
//         'Coral',
//         'Elephant', 
//         'Hummingbird',
//         'Giraffe', 
//         'Jellyfish', 
//         'Lion', 
//         'Manatee', 
//         'Owl', 
//         'Penguin', 
//         'Red Panda', 
//         'Shark', 
//         'Sloth', 
//         'Tiger',
//         'Wolf'
//       ];

//     const center = [44.7710, -93.195];

//     return (
//         <>
//         <div>
//             <MapContainer 
//                 center={center} 
//                 zoom={16.6} 
//                 className={styles.mapContainer} // Use the class from the CSS module
//                 style={{ height: '600px', width: '100%' }}
//                 // Pass options to the map
//                 scrollWheelZoom={false}

//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={center}>
//                 <Popup>
//                     <a href="/animal/ape" style={{ textDecoration: 'none', color: 'black' }}>
//                     Ape Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7686, -93.198]}>
//                 <Popup>
//                     <a href="/animal/elephant" style={{ textDecoration: 'none', color: 'black' }}>
//                     Elephant Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7690, -93.195]}>
//                 <Popup>
//                     <a href="/animal/giraffe" style={{ textDecoration: 'none', color: 'black' }}>
//                     Giraffe Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7720, -93.200]}>
//                 <Popup>
//                     <a href="/animal/jellyfish" style={{ textDecoration: 'none', color: 'black' }}>
//                     Jellyfish Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7740, -93.192]}>
//                 <Popup>
//                     <a href="/animal/lion" style={{ textDecoration: 'none', color: 'black' }}>
//                     Lion Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7710, -93.195]}>
//                 <Popup>
//                     <a href="/animal/manatee" style={{ textDecoration: 'none', color: 'black' }}>
//                     Manatee Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7713, -93.193]}>
//                 <Popup>
//                     <a href="/animal/panda-bear" style={{ textDecoration: 'none', color: 'black' }}>
//                     Panda Bear Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7714, -93.194]}>
//                 <Popup>
//                     <a href="/animal/penguin" style={{ textDecoration: 'none', color: 'black' }}>
//                     Penguin Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7715, -93.190]}>
//                 <Popup>
//                     <a href="/animal/polar-bear" style={{ textDecoration: 'none', color: 'black' }}>
//                     Polar Bear Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7716, -93.189]}>
//                 <Popup>
//                     <a href="/animal/red-panda" style={{ textDecoration: 'none', color: 'black' }}>
//                     Red Panda Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7712, -93.191]}>
//                 <Popup>
//                     <a href="/animal/sea-otter" style={{ textDecoration: 'none', color: 'black' }}>
//                     Sea Otter Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7717, -93.193]}>
//                 <Popup>
//                     <a href="/animal/sloth" style={{ textDecoration: 'none', color: 'black' }}>
//                     Sloth Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//                 <Marker position={[44.7719, -93.195]}>
//                 <Popup>
//                     <a href="/animal/tiger" style={{ textDecoration: 'none', color: 'black' }}>
//                     Tiger Exhibit
//                     </a>
//                 </Popup>
//                 </Marker>
//             </MapContainer>

//         </div>
//         </>
//     );
// };

// export default AnimalList;


import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import styles from './AnimalList.module.css'; // Import CSS module

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MarkerWithPopup = ({ position, link, name }) => (
    <Marker position={position}>
        <Popup>
            <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
                {name} Exhibit
            </Link>
        </Popup>
    </Marker>
);

const AnimalList = () => {
    const center = [44.7710, -93.195];

    return (
        <div>
            <MapContainer 
                center={center} 
                zoom={16.6} 
                className={styles.mapContainer} 
                style={{ height: '600px', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerWithPopup position={[44.7710, -93.199]} link="/animal/Gorilla" name="Gorilla" />
                <MarkerWithPopup position={[44.7686, -93.198]} link="/animal/Elephant" name="Elephant" />
                <MarkerWithPopup position={[44.7690, -93.195]} link="/animal/Giraffe" name="Giraffe" />
                <MarkerWithPopup position={[44.7720, -93.200]} link="/animal/Jellyfish" name="Jellyfish" />
                <MarkerWithPopup position={[44.7740, -93.192]} link="/animal/Lion" name="Lion" />
                <MarkerWithPopup position={[44.7710, -93.195]} link="/animal/Manatee" name="Manatee" />
                <MarkerWithPopup position={[44.7713, -93.193]} link="/animal/Red Panda" name="Red Panda" />
                <MarkerWithPopup position={[44.7714, -93.194]} link="/animal/Penguin" name="Penguin" />
                <MarkerWithPopup position={[44.7717, -93.193]} link="/animal/Sloth" name="Sloth" />
                <MarkerWithPopup position={[44.7719, -93.195]} link="/animal/Tiger" name="Tiger" />
                <MarkerWithPopup position={[44.7715, -93.190]} link="/animal/Coral" name="Coral" />
                <MarkerWithPopup position={[44.7716, -93.189]} link="/animal/Hummingbird" name="Hummingbird" />
                <MarkerWithPopup position={[44.7712, -93.191]} link="/animal/Shark" name="Shark" />
                <MarkerWithPopup position={[44.7745, -93.197]} link="/animal/Owl" name="Owl" />
                <MarkerWithPopup position={[44.7750, -93.193]} link="/animal/Wolf" name="Wolf" />
                </MapContainer>
        </div>
    );
};

export default AnimalList;