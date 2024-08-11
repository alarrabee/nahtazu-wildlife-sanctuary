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
