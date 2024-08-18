import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';
import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png'


const headerStyle = {
    borderRadius: 6, 
    border: '2px solid #7cb305',
    display: 'flex',
    alignItems: 'center',
};

const logoImg = {
    height: '100px'
};

const buttonStyleBase = {
    color: '#fff',
    marginBottom: '5px',
    textAlign: 'center',
    width: '100px', // Fixed width to ensure consistency
    height: '40px', // Fixed height to ensure consistency
    fontSize: '15px',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    lineHeight: '40px', // Center text vertically
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
};

// const animalButtonStyle = {
//   ...buttonStyle,
//   backgroundColor: '#2196F3', // Blue
// };

// const aboutButtonStyle = {
//   ...buttonStyle,
//   backgroundColor: '#FF9800', // Orange
// };

// const loginButtonStyle = {
//   ...buttonStyle,
//   backgroundColor: '#9C27B0', // Purple
// };

// const signUpButtonStyle = {
//   ...buttonStyle,
//   backgroundColor: '#4CAF50', // Green
// };


const Header = () => {
    const isLoggedIn = AuthService.loggedIn(); // Check if user is logged in
    const handleLogout = () => {
        AuthService.logout();
    };

    const [hoveredButton, setHoveredButton] = useState(null);
    const getButtonStyle = (buttonType) => {
        const baseStyle = {
            ...buttonStyleBase,
            backgroundColor: buttonType === 'Animals' ? '#2196F3' :
                buttonType === 'About' ? '#FF9800' :
                buttonType === 'Login' ? '#9C27B0' :
                buttonType === 'Reviews' ? '#FF5722' : '#4CAF50',
            boxShadow: hoveredButton === buttonType ? `0 0 2em ${buttonType === 'Animals' ? '#646cffaa' :
                buttonType === 'About' ? '#ff9800aa' :
                buttonType === 'Login' ? '#9c27b0aa' :
                buttonType === 'Reviews' ? '#ff5722aa' : '#4caf50aa'}` : 'none',
        };

        return {
            ...baseStyle,
            transform: hoveredButton === buttonType ? 'scale(1.1)' : 'scale(1)',
            zIndex: hoveredButton === buttonType ? '1' : 'auto',
        };
    };

    return (
        <div className="header" style={headerStyle}>
            <nav style={{ width: '100%' }}>
                <Row justify="center" align="middle" gutter={[16, 16]}>

                    <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to="/"><img className="logo" style={logoImg} src={logo} alt="Zoo logo" /></Link>
                    </Col>

                    <Col xs={24} md={18} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Row gutter={[16, 16]} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/Animals">
                                    <Button  style={getButtonStyle('Animals')} onMouseEnter={() => setHoveredButton('Animals')} onMouseLeave={() => setHoveredButton(null)}>
                                        Animals
                                    </Button>
                                </Link>
                            </Col>

                            <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/About">
                                    <Button style={getButtonStyle('About')} onMouseEnter={() => setHoveredButton('About')} onMouseLeave={() => setHoveredButton(null)}>
                                        About Us
                                    </Button>
                                </Link>
                            </Col>

                            {isLoggedIn && (

                                <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/Reviews">
                                        <Button style={getButtonStyle('Reviews')} onMouseEnter={() => setHoveredButton('Reviews')} onMouseLeave={() => setHoveredButton(null)}>
                                            Reviews
                                        </Button>
                                    </Link>
                                </Col>
                            )}



                            {isLoggedIn ? (
                                <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button style={getButtonStyle('Login')} onMouseEnter={() => setHoveredButton('Login')} onMouseLeave={() => setHoveredButton(null)} onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </Col>
                            ) : (
                                <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/Login">
                                        <Button style={getButtonStyle('Login')} onMouseEnter={() => setHoveredButton('Login')} onMouseLeave={() => setHoveredButton(null)}>
                                            Login
                                        </Button>
                                    </Link>
                                </Col>
                            )}

                            {!isLoggedIn && (
                                <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/SignUp">
                                        <Button style={getButtonStyle('SignUp')} onMouseEnter={() => setHoveredButton('SignUp')} onMouseLeave={() => setHoveredButton(null)}>
                                            Sign Up
                                        </Button>
                                    </Link>
                                </Col>
                            )}
                            
                        </Row>

                    </Col>
                    
                </Row>
            </nav>
        </div>
    );
};




export default Header;





