import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function usePageTitle() {
    const location = useLocation();
  
    useEffect(() => {
      switch (location.pathname) {
        case '/':
          document.title = "Home";
          break;
        case '/Animals':
          document.title = "Animals";
          break;
        case '/About':
          document.title = "About Us";
          break;
        case '/Login':
          document.title = "Login";
          break;
        case '/Signup':
          document.title = "Sign Up";
          break;
        default:
          document.title = "Nahtazu Zoo";
      }
    }, [location]);
  }

export default usePageTitle;