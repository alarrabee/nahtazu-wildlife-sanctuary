
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'; 
import Home from './pages/home.jsx';
import Animals from './pages/Animals.jsx';
import AnimalList from './pages/AnimalList'; 
import AnimalProfile from './pages/AnimalProfile.jsx';
import Login from './components/LoginForm.jsx';
import Signup from './components/SignupForm.jsx';
import About from './pages/About.jsx';
import ReviewsPage from './pages/Reviews';
import ProtectedRoute from './components/ProtectedRoute.jsx';



//Page routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home/>, // Default route
      },
      {
        path: '/animal-list',
        element: <AnimalList/>,
      },
      {
        path: '/animal/:name',
        element: <AnimalProfile />,
      },
      {
        path: '/Login',
        element: <Login/>,
      },
      {
        path: '/Signup',
        element: <Signup />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Animals',
        element: <Animals />
      },
      {
        path: '/Reviews',
        element: <ProtectedRoute element={<ReviewsPage />} />, // Protect the Reviews route
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


