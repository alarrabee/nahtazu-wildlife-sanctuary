
import React from 'react'
import {Divider} from 'antd'
import AnimalList from './AnimalList';
import CarouselPic from '../components/Carousel'

 const mainTitle ={
    fontSize: "3.5vw",
    color: '#4CAF50',
    margin: '3px'
 };

 const naStyle = {
    color: '#FF9800',
};

 const dividerStyle = {
    borderColor: '#4CAF50',
  };

 const subTitles ={
    fontSize: '2vw',
    color: '#4CAF50',
    display: 'inline-block',
 };

 const paragraphStyle ={
    fontWeight: "bold",
    fontSize: '150%',
    maxWidth: '85%',
    display: 'inline-block',
    marginBottom: '0',
    marginTop: '0'
 };


const Home = () => {
    return (
        <div >
            <Divider style={{ ...dividerStyle }}>
                <h1 className= "titles" style={{  ...mainTitle }}>Welcome to Nah<span style={naStyle}>tA</span>zu</h1>
            </Divider>

           <CarouselPic></CarouselPic>
           
           <p className = 'normText' style={{ ...paragraphStyle }}>At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
           </p>
            
           <Divider style={{  ...dividerStyle }}>
                <h3 className= "titles" style={{  ...subTitles }}>Checkout Our Amazing Animal Homes!</h3>
            </Divider>

           <AnimalList></AnimalList>

           <Divider style={{  ...dividerStyle }}>
                <h3 className= "titles" style={{  ...subTitles }}>Why We think Zoos are Important</h3>
            </Divider>

            <p className = 'normText'  style={{ ...paragraphStyle }}>Zoo conservation plays a critical role in preserving biodiversity and protecting endangered species in a world facing unprecedented environmental challenges. Modern zoos are far more than mere attractions; they are dynamic centers for conservation, education, and research. Through carefully managed breeding programs, zoos work to maintain genetic diversity and support the survival of species at risk of extinction. They also serve as vital research hubs, conducting studies on animal behavior, genetics, and health that contribute to broader conservation efforts. Zoos often collaborate with wildlife reserves and conservation organizations to address habitat loss, poaching, and climate change, extending their impact beyond their own facilities. Moreover, they educate the public about the importance of conservation, fostering a sense of responsibility and inspiring action to protect wildlife and their habitats. By combining these efforts, zoos help to create a more informed and engaged society, equipped to tackle the complex challenges facing our planet's diverse ecosystems.</p>
        </div>
    );
};

export default Home;