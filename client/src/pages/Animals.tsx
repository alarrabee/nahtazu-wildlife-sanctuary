import {Link} from "react-router-dom"

import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;

const Animals: React.FC = () => {
  const animals = [
    'Ape', 
    'Elephant', 
    'Giraffe', 
    'Jellyfish', 
    'Lion', 
    'Manatee', 
    'Panda Bear', 
    'Penguin', 
    'Polar Bear', 
    'Red Panda', 
    'Sea Otter', 
    'Sloth', 
    'Tiger'
  ];
function getImage(animal :any){
  const url =`https://api.unsplash.com/search/photos?query=${encodeURIComponent(animal)}&client_id=nMpA-A9vEG4eiUgeOGv7U2WhXzQ10QOEvRaj2Q7jC6o`
  let imageEl = null;
  fetch(url).then(function(response){return response.json();
  }).then(function(data){
    let image = document.createElement("img");
    image.setAttribute("src", data.results[0].urls.regular)
    image.setAttribute("alt", "photo of animal")
    console.log (image);
    imageEl = image;
    return(image)
  })
  
  console.log(imageEl);
  return imageEl;
};
 return(
    <div>
    <h1>Here are all the wonderful animals at Nahtazu</h1>
    {animals.map(animal => (

                  <Link to ={`/animal/${encodeURIComponent(animal)}`}>
                    <Card key ={animal}
                    hoverable
                    style={{ width: 240 }}
                    cover ={ getImage(animal) }
                  >
                    <Meta title= {animal} description="Click Here to learn More!" /> 
                 
                    </Card></Link>
                ))}
  
    </div>
 )
}

export default Animals;



{/* <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt= "picture of animal" src={animal.imageUrl} />}
  >
    <Meta title="" description="Click Here to learn More!" />
    <Link to ={`/animal/${encodeURIComponent(animal)}`}> </Link>
    </Card> */}