import { Link } from 'react-router-dom';
import REACT from 'react';
import {Button, Flex} from 'antd';
import type { FlexProps} from 'antd';

const footerStyle: React.CSSProperties ={
    width : '100%',
    height: 120,
    borderRadius: 6, 
    border: '1px solid black'
};
const buttonStyle: React.CSSProperties={
    
}

function Footer() {
    return(
        <footer style ={footerStyle}>

        <img src="assets/logo.png" alt="zoo logo"></img>
             <p> Nahtazu Zoo
                123 Safari Lane
                Greenwood, MN 55210</p>
       
      
        <Flex wrap gap = 'large'style={buttonStyle} justify= 'flex-end' align='center'>
        <Button type="primary">Home</Button>
        <Button type="primary">Animals</Button>
        <Button type="primary">About Us</Button>
        <Button type="primary">Login</Button>
        </Flex>
        </footer>
    );
}

export default Footer;