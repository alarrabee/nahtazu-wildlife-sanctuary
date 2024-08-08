// src/HomePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Virtual Zoo</h1>
      <ul>
        <li><Link to="/animal/lion">Lion</Link></li>
        <li><Link to="/animal/tiger">Tiger</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
