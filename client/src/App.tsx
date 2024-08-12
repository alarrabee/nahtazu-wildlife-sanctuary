import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  
  return (
    <div style={{background:'#f7f7f7', padding:'20px'}}>
      <Outlet />
    </div>
  )
}

export default App


// import React from 'react';

// import { Outlet } from 'react-router-dom';

// import Header from './components/Header';

// import Footer from './components/Footer';

// function App() {
//      return (
//           <div>
//           <Header />

//           <Outlet />

//           <Footer />
//           </div>
//    );
//    }

// export default App;