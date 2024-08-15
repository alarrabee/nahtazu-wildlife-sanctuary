import { Link } from 'react-router-dom';
import AnimalList from './AnimalList';

import CarouselPic from '../components/Carousel'




const Home = () => {


    return (
        <div>
            
            <h1>Welcome to Nahtazu</h1>
           <CarouselPic/>
           <div>At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
           </div>
            

            <AnimalList></AnimalList>

        </div>
    );
};

export default Home;