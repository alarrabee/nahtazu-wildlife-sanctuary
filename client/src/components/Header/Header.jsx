import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';

import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png'

const header = {
    margin: '10px'
};

const headerStyle ={
    width : '100%',
    height: 'auto',
    borderRadius: 6, 
    border: '1px solid black',
    paddingRight: '50px'
};

const buttonStyle = {
    width: '100%', // Full width in smaller screens
    color: '#fff',
    padding: '15px',
    marginBottom: '10px', // Spacing between buttons when stacked
  };

const animalButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#2196F3', // Blue
};

const aboutButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#FF9800', // Orange
};

const loginButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#9C27B0', // Purple
};

const signUpButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#4CAF50', // Green
};

const Header = () => {
    const isLoggedIn = AuthService.loggedIn(); // Check if user is logged in
    const handleLogout = () => {
        AuthService.logout();
    };

    return (
        <div className="header" style={header}>
            <nav>       
                <Row 
                    style ={headerStyle}justify={'space-between'} align ={"middle"} gutter={[16, 16]} >

                    <Col xs={24} md={4}><Link to = "/"><img className = "logo" width ={160} src={logo} alt="Zoo logo"/></Link></Col>
                    <Col xs={24} md={4}><Link  to = "/Animals"><Button style={animalButtonStyle}> Animals </Button></Link></Col>
                    <Col xs={24} md={4}><Link to ="/About"><Button  style={aboutButtonStyle}> About Us </Button></Link></Col>

                    {isLoggedIn ? (
                        <Col xs={24} md={4}><Button style={loginButtonStyle} onClick={handleLogout}>Logout</Button></Col>
                    ) : (
                        <Col xs={24} md={4}><Link to="/Login"><Button style={loginButtonStyle}>Login</Button></Link></Col>
                    )}
                    {!isLoggedIn && (
                        <Col xs={24} md={4}><Link to="/SignUp"><Button style={signUpButtonStyle}>Sign Up</Button></Link></Col>
                    )}

                </Row> 
            </nav>
        </div>
    );
}


export default Header;