import React from 'react';
import { Carousel } from 'antd';


  
  const imageContainerStyle = {
    height: '400px', // Set a fixed height for the carousel
    width: '100%',   // Ensure container takes full width
    textAlign: 'center'
  };
  
  const imageStyle = {
    maxWidth: '70%',
    maxHeight: '100%',
    objectFit: 'cover', // Ensures the image covers the container
    display: 'inline-block'
  };

const CarouselPic = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
        <Carousel afterChange={onChange} autoplay autoplaySpeed={4500}>
            <div style ={imageContainerStyle}>
                <h3 ><img  style ={imageStyle} src="https://www.zoo-berlin.de/fileadmin/_processed_/f/a/csm_Afrikanischer_Loewe_-_Mateo_2__5a177d6871.jpg" alt="Image of Lion" /></h3>
            </div>
            <div style ={imageContainerStyle}>
                <h3 ><img style ={imageStyle} src="https://images.unsplash.com/photo-1489015712802-f490a7a1061d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of a girl infront of an Aquarium" /></h3>
            </div>
            <div style ={imageContainerStyle}>
                <h3 ><img style ={imageStyle} src="https://images.unsplash.com/photo-1706391160801-40cd74b22f38?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of Flamingos" /></h3>
            </div>
            <div style ={imageContainerStyle}>
                <h3 ><img style ={imageStyle} src="https://plus.unsplash.com/premium_photo-1683147718149-dac5d441db45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of kids feeding a goat" /></h3>
            </div>
        </Carousel>
  );
};

export default CarouselPic;