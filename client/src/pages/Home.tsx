import Header from '../components/Header';

import Footer from '../components/Footer';

import React from 'react';

import {Carousel} from 'antd';

const { Header, Footer } = Layout;

const contentStyle: React.CSSProperties= {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};




const Home: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Layout>
      <Header/>
      <body>
      <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}><img src="" alt="Image of Fish" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="" alt="Image of Birds" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="" alt="Image of Mammal" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src="" alt="Image of Reptile" /></h3>
      </div>
    </Carousel>
        <div>
          At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
        </div>
      </body>
      <Footer/>
    </Layout>
  );

export default Home;