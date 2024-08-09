import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Virtual Zoo</h1>
      <ul>
        <li><Link to="/animal/tiger">Tiger</Link></li>
        <li><Link to="/animal/polarbear">Polar Bear</Link></li>
        <li><Link to="/animal/Ape">Ape</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
