import { Link } from 'react-router-dom';

import REACT from 'react';

import logo from '../../assets/logo.png'

import {Button, Flex, Grid, Col, Row } from 'antd';

import type { FlexProps} from 'antd';



const footerStyle: React.CSSProperties ={
    fontFamily: "Georgia",
    width : '100%',
    height: 250,
    borderRadius: 6, 
    border: '1px solid black',
};


function Footer() {
    return(
    <footer style ={footerStyle}>
    <Flex wrap gap = "large" style={footerStyle} justify= 'flex-start' align='center'>
        <Row>
        <Link to = "/"><img class = "logo"width ={200} src={logo} alt="Zoo logo"/></Link>
        <Flex vertical  wrap gap = "small" justify=''>
             <p> Nahtazu Zoo
                123 Safari Lane
                Greenwood, MN 55210</p>
                <p>CUSTOMER SERVICE: 651-487-8200 </p>
        </Flex>
        <Flex wrap gap = 'large'  justify= 'flex-end' align='center'>
            
            <Link  to = "/Animals"><Button> Animals </Button></Link>
            <Link to ="/About"><Button> About Us </Button></Link>
            <Link to ="/Login"><Button > Login </Button></Link>
            <Link to = "/SignUp"><Button> Sign Up</Button></Link>
            <Link to = "/Reviews"><Button>Reviews</Button></Link>
         
        </Flex></Row> </Flex>
        </footer>
    );
}

export default Footer;