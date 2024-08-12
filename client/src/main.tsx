// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Main app component (ensure it's a .tsx file)
import AnimalList from './pages/AnimalList'; // Animal list component (ensure it's a .tsx file)
import AnimalProfile from './pages/AnimalProfile'; // Animal profile component (ensure it's a .tsx file)
// import Login from './components/LoginForm';
// import Signup from './components/SignupForm';



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
    //   {
    //     path: '/login',
    //     element: <Login/>,
    //   },
    //   {
    //     path: '/signup',
    //     element: <Signup />
    //   }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

// import React from 'react'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import ReactDOM from 'react-dom/client'

// import App from './App.tsx';
// import Home from './pages/Home.tsx';
// import Login from './pages/Login.tsx';
// import SingleAnimal from './pages/SingleAnimal.tsx';
// import Animals from './pages/Animals.tsx';
// import About from './pages/About.tsx';
// import ErrorPage from './pages/ErrorPage.tsx';

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />,
//       errorElement: <ErrorPage />,
//        children: [
//          {
//            index: true,
//            element: <Home />
//          }, {
//             path:'/Login',
//             element:<Login />
//          },{
//            path: '/Animals',
//            element: <Animals />
//          },{
//           path: '/Animals/:id',
//           element: <SingleAnimal />
//          },{
//           path: '/About',
//           element: <About />
//          }
//        ]
//      }
//    ])


//    ReactDOM.createRoot(document.getElementById('root')).render(
//        <RouterProvider router={router} />
