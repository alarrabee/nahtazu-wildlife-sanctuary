import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card } from 'antd';


const { Meta } = Card;

const Animals = () => {
  const [animalImages, setAnimalImages] = useState({});
  const animals = [
    'Ape',
    'Coral',
    'Elephant', 
    'Hummingbird',
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

  useEffect(() => {
    animals.forEach(animal => {
      fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(animal)}&client_id=nMpA-A9vEG4eiUgeOGv7U2WhXzQ10QOEvRaj2Q7jC6o`)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            setAnimalImages(prevImages => ({
              ...prevImages,
              [animal]: data.results[0].urls.regular
            }));
          }
        })
        .catch(error => {
          console.error("Error fetching image:", error);
        });
    });
  }, []);

  return (
    <>
    <h1 style={{ textAlign: 'center' }}>Here are all the wonderful animals at Nahtazu</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {animals.map(animal => (
        <Link to={`/animal/${encodeURIComponent(animal)}`} key={animal} style={{ margin: '10px', textDecoration: 'none' }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={`photo of ${animal}`} src={animalImages[animal]} style={{ height: 160, objectFit: 'cover' }} />}
          >
            <Meta title={animal} description="Click Here to learn More!" />
          </Card>
        </Link>
      ))}
    </div>
    </>
  );
}

export default Animals;
