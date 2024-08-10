//fix routes 
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIMAL } from '../queries';

const Animal = () => {
  const [name, setName] = useState('');
  const { data, loading, error } = useQuery(GET_ANIMAL, {
    variables: { name },
    skip: !name, 
  });

  const handleSearch = () => {
    if (name) {
      // set name 
      setName(name.trim());
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Search for an Animal</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter animal name"
      />
      <button onClick={handleSearch}>Search</button>

      {data && data.getAnimal && (
        <div>
          <h2>{data.getAnimal.name}</h2>
          <p><strong>Species:</strong> {data.getAnimal.species}</p>
          <p><strong>Habitat:</strong> {data.getAnimal.habitat}</p>
          <p><strong>Diet:</strong> {data.getAnimal.diet}</p>
          <p><strong>Lifespan:</strong> {data.getAnimal.lifespan} years</p>
          <p><strong>Status:</strong> {data.getAnimal.status}</p>
          <p><strong>Description:</strong> {data.getAnimal.description}</p>
          <img src={data.getAnimal.imageUrl} alt={data.getAnimal.name} />
        </div>
      )}
    </div>
  );
};

export default Animal;