import { Link } from 'react-router-dom';

import {Button, Flex, Col, Row} from 'antd';

import logo from '../../assets/logo.png'

const headerStyle: React.CSSProperties ={
    width : '100%',
    height: 170,
    borderRadius: 6, 
    border: '1px solid black',
};
const buttonStyle: React.CSSProperties ={
    border: '1px solid purple',
    width: "200px"
    
}




const Header = () => {
     return (
    <div className="header">
            <nav>       


        <Row style ={headerStyle}justify={'space-between'} align ={"middle"} >
            
        <Col span ={4}><Link to = "/"><img class = "logo" width ={160} src={logo} alt="Zoo logo"/></Link></Col>
        <Col span ={4}><Link  to = "/Animals"><Button style ={buttonStyle}> Animals </Button></Link></Col>
        <Col span ={4}><Link to ="/About"><Button style ={buttonStyle}> About Us </Button></Link></Col>
        <Col span ={4}><Link to ="/Login"><Button style ={buttonStyle}> Login </Button></Link></Col>
        <Col span ={4}><Link to = "/SignUp"><Button style ={buttonStyle}> Sign Up</Button></Link></Col>
         
                   
            
        </Row> 
        
            </nav>
    </div>
    );
}


export default Header;