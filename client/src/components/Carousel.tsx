import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselPic: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
        <div>
            <h3 style={contentStyle}><img src="https://images.unsplash.com/photo-1489015712802-f490a7a1061d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of Fish" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src="https://images.unsplash.com/photo-1706391160801-40cd74b22f38?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of Flamingos" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src="" alt="Image of Birds" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src="" alt="Image of Birds" /></h3>
        </div>
    </Carousel>
  );
};

export default CarouselPic;