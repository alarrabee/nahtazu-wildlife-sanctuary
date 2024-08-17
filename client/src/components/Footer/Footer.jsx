import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';

import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png'

const footer = {
    margin: '10px'
};

const footerStyle ={
    width : '100%',
    height: 'auto',
    borderRadius: 6, 
    border: '1px solid black',
    paddingRight: '50px'
};

const animalButtonStyle = {
    width: '150px',
    backgroundColor: '#2196F3', // Blue
    color: '#fff',
    padding:"15px"
  };
  
  const aboutButtonStyle = {
    width: '150px',
    backgroundColor: '#FF9800', // Orange
    color: '#fff',
    padding:"15px"
  };
  
  const loginButtonStyle = {
    width: '150px',
    backgroundColor: '#9C27B0', // Purple
    color: '#fff',
    padding:"15px"
  };
  
  const signUpButtonStyle = {
    width: '150px',
    backgroundColor: '#4CAF50', // Green
    color: '#fff',
    padding:"15px"
  };

  const reviewButtonStyle = {
    width: '100%', // Full width in smaller screens
    color: '#fff',
    padding: '15px',
    // marginBottom: '10px', // Spacing between buttons when stacked
    backgroundColor: '#FF0000', // Red
  };


  const Footer = () => {
    const isLoggedIn = AuthService.loggedIn(); // Check if user is logged in
    const handleLogout = () => {
        AuthService.logout();
    };
    return(
    <footer style ={footer}>
    <Row style ={footerStyle} justify={'space-between'} align ={"middle"} >  
                    <Col xs={24} md={4}><Link to = "/"><img className = "logo" width ={160} src={logo} alt="Zoo logo"/></Link></Col>
                    <Col xs={24} md={4}><p className = "normText"> 
                        Nahtazu Zoo
                        123 Safari Lane
                        Greenwood, MN 55210</p></Col>
                        <Col xs={24} md={8}><p className = "normText"> 
                        CUSTOMER SERVICE: 651-487-8200</p></Col>
                    
                    <p className = "normText">CUSTOMER SERVICE: 651-487-8200 </p>
                    <Col span ={2}><Link  to = "/Animals"><Button style={animalButtonStyle}> Animals </Button></Link></Col>
                    <Col span ={2}><Link to ="/About"><Button  style={aboutButtonStyle}> About Us </Button></Link></Col>

                    {isLoggedIn ? (
                        <Col span={2}><Button style={loginButtonStyle} onClick={handleLogout}>Logout</Button></Col>
                    ) : (
                        <Col span={2}><Link to="/Login"><Button style={loginButtonStyle}>Login</Button></Link></Col>
                    )}
                    {!isLoggedIn && (
                        <Col span={2}><Link to="/SignUp"><Button style={signUpButtonStyle}>Sign Up</Button></Link></Col>
                    )} 
                        <Col xs={24} md={4}><Link to ="/Reviews"><Button style ={reviewButtonStyle}>Reviews</Button></Link></Col>
                </Row> 
        </footer>
    );
}

export default Footer;