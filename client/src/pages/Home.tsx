import { Link } from 'react-router-dom';
import React from 'react'
import {Divider} from 'antd'
import AnimalList from './AnimalList';
import CarouselPic from '../components/Carousel'

const homeStyle: React.CSSProperties ={
    fontFamily: "sans-serif",
    //border: "1px solid black",
    fontWeight: "bold",
    fontSize: "20px"

 };

 const descStyle: React.CSSProperties ={
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: "20px"

 };


const Home = () => {
    return (
        <div style ={homeStyle}>
            <Divider style={{  borderColor: '#7cb305' }}><h1>Welcome to Nahtazu</h1></Divider>
           <CarouselPic/>
           
           <p style ={descStyle}>At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
           </p>
           
           <Divider style={{  borderColor: '#7cb305' }}><h3>Checkout Our Amazing Animals Homes!</h3></Divider>

           <AnimalList></AnimalList>

            <Divider style={{  borderColor: '#7cb305' }}><h3>Why We think Zoos are Important</h3></Divider>
            <p>Zoo conservation plays a critical role in preserving biodiversity and protecting endangered species in a world facing unprecedented environmental challenges. Modern zoos are far more than mere attractions; they are dynamic centers for conservation, education, and research. Through carefully managed breeding programs, zoos work to maintain genetic diversity and support the survival of species at risk of extinction. They also serve as vital research hubs, conducting studies on animal behavior, genetics, and health that contribute to broader conservation efforts. Zoos often collaborate with wildlife reserves and conservation organizations to address habitat loss, poaching, and climate change, extending their impact beyond their own facilities. Moreover, they educate the public about the importance of conservation, fostering a sense of responsibility and inspiring action to protect wildlife and their habitats. By combining these efforts, zoos help to create a more informed and engaged society, equipped to tackle the complex challenges facing our planet's diverse ecosystems.</p>
        </div>
    );
};

export default Home;