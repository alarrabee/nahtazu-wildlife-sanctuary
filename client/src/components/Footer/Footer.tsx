import { Link } from 'react-router-dom';

import REACT from 'react';

import logo from '../../assets/logo.png'

import {Button, Flex} from 'antd';

import type { FlexProps} from 'antd';



const footerStyle: React.CSSProperties ={
    width : '100%',
    height: 120,
    borderRadius: 6, 
    border: '1px solid black',
};

function Footer() {
    return(
        <footer style ={footerStyle}>

        
       
      
        <Flex wrap gap = 'large'style={footerStyle} justify= 'flex-end' align='center'>
            <Link to = "/"><img src={logo} alt="Zoo logo"></img></Link>
             <p> Nahtazu Zoo
                123 Safari Lane
                Greenwood, MN 55210</p>
            <Link  to = "/Animals"><Button> Animals </Button></Link>
            <Link to ="/About"><Button> About Us </Button></Link>
            <Link to ="/Login"><Button > Login </Button></Link>
            <Link to = "/SignUp"><Button> Sign Up</Button></Link>
        </Flex>
        </footer>
    );
}

export default Footer;