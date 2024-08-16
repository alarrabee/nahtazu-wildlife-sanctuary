import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';

import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png'


const footerStyle: React.CSSProperties ={
    fontFamily: "Georgia",
    width : '100%',
    height: 250,
    borderRadius: 6, 
    border: '1px solid black',
};

const animalButtonStyle: React.CSSProperties = {
    width: '150px',
    backgroundColor: '#2196F3', // Blue
    color: '#fff',
    padding:"15px"
  };
  
  const aboutButtonStyle: React.CSSProperties = {
    width: '150px',
    backgroundColor: '#FF9800', // Orange
    color: '#fff',
    padding:"15px"
  };
  
  const loginButtonStyle: React.CSSProperties = {
    width: '150px',
    backgroundColor: '#9C27B0', // Purple
    color: '#fff',
    padding:"15px"
  };
  
  const signUpButtonStyle: React.CSSProperties = {
    width: '150px',
    backgroundColor: '#4CAF50', // Green
    color: '#fff',
    padding:"15px"
  };

  const reviewButtonStyle: React.CSSProperties = {
    width: '150px',
    backgroundColor: 'red', // Red
    color: '#fff',
    padding:"15px"
  };

  const Footer = () => {
    const isLoggedIn = AuthService.loggedIn(); // Check if user is logged in
    const handleLogout = () => {
        AuthService.logout();
    };
    return(
    <footer style ={footerStyle}>
    <Row style ={footerStyle}justify={'space-between'} align ={"middle"} >  
                    <Col span ={4}><Link to = "/"><img className = "logo" width ={160} src={logo} alt="Zoo logo"/></Link></Col>
                    <p className = "normText"> 
                        Nahtazu Zoo
                        123 Safari Lane
                        Greenwood, MN 55210</p>
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
                        <Col span={2}><Link to ="/Reviews"><Button style ={reviewButtonStyle}>Review</Button></Link></Col>
                </Row> 
        </footer>
    );
}

export default Footer;