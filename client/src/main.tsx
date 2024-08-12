// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Main app component (ensure it's a .tsx file)
import AnimalList from './pages/AnimalList'; // Animal list component (ensure it's a .tsx file)
import AnimalProfile from './pages/AnimalProfile'; // Animal profile component (ensure it's a .tsx file)


// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <AnimalList />, // Default route
      },
      {
        path: '/animal-list',
        element: <AnimalList />,
      },
      {
        path: '/animal/:name',
        element: <AnimalProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

