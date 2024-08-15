import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';

import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png'

const headerStyle: React.CSSProperties ={
    width : '100%',
    height: 170,
    borderRadius: 6, 
    border: '1px solid black',
};
const animalButtonStyle: React.CSSProperties = {
    width: '200px',
    backgroundColor: '#2196F3', // Blue
    color: '#fff',
  };
  
  const aboutButtonStyle: React.CSSProperties = {
    width: '200px',
    backgroundColor: '#FF9800', // Orange
    color: '#fff',
  };
  
  const loginButtonStyle: React.CSSProperties = {
    width: '200px',
    backgroundColor: '#9C27B0', // Purple
    color: '#fff',
  };
  
  const signUpButtonStyle: React.CSSProperties = {
    width: '200px',
    backgroundColor: '#4CAF50', // Green
    color: '#fff',
  };

const Header = () => {
    const isLoggedIn = AuthService.loggedIn(); // Check if user is logged in
    const handleLogout = () => {
        AuthService.logout();
    };

    return (
        <div className="header">
            <nav>       
                <Row style ={headerStyle}justify={'space-between'} align ={"middle"} >  
                    <Col span ={4}><Link to = "/"><img className = "logo" width ={160} src={logo} alt="Zoo logo"/></Link></Col>
                    <Col span ={4}><Link  to = "/Animals"><Button style={animalButtonStyle}> Animals </Button></Link></Col>
                    <Col span ={4}><Link to ="/About"><Button style={aboutButtonStyle}> About Us </Button></Link></Col>

                    {isLoggedIn ? (
                        <Col span={4}><Button style={loginButtonStyle} onClick={handleLogout}>Logout</Button></Col>
                    ) : (
                        <Col span={4}><Link to="/Login"><Button style={loginButtonStyle}>Login</Button></Link></Col>
                    )}
                    {!isLoggedIn && (
                        <Col span={4}><Link to="/SignUp"><Button style={signUpButtonStyle}>Sign Up</Button></Link></Col>
                    )}

                </Row> 
            </nav>
        </div>
    );
}


export default Header;