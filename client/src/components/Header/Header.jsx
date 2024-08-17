import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';
import { Button, Col, Row } from 'antd';
import logo from '../../assets/logo.png'


const headerStyle = {
    borderRadius: 6, 
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
};

const logoImg = {
    height: '150px'
};

const buttonStyle = {
    flex: 1, 
    color: '#fff',
    padding: '15px',
    margin: '5px', 
    textAlign: 'center', 
    minWidth: '150px', 
    height: '50px', 
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
        <div className="header" style={headerStyle}>
            <nav style={{ width: '100%' }}>
                <Row justify="center" align="middle" gutter={[16, 16]}>

                    <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to="/"><img className="logo" style={logoImg} src={logo} alt="Zoo logo" /></Link>
                    </Col>

                    <Col xs={24} md={18} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Row gutter={[16, 16]} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/Animals">
                                    <Button style={animalButtonStyle}>Animals</Button>
                                </Link>
                            </Col>

                            <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/About">
                                    <Button style={aboutButtonStyle}>About Us</Button>
                                </Link>
                            </Col>

                            {isLoggedIn ? (
                                <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button style={loginButtonStyle} onClick={handleLogout}>Logout</Button>
                                </Col>
                            ) : (
                                <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/Login">
                                        <Button style={loginButtonStyle}>Login</Button>
                                    </Link>
                                </Col>
                            )}
                            {!isLoggedIn && (
                                <Col xs={24} sm={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/SignUp">
                                        <Button style={signUpButtonStyle}>Sign Up</Button>
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





