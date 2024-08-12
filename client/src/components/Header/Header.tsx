import { Link } from 'react-router-dom';
import REACT from 'react';
//this allows the spacing from ant design
import { Col, Divider, Row } from 'antd';

import {Button, Flex} from 'antd';

import type { FlexProps} from 'antd'

const headerStyle: React.CSSProperties ={
    width : '100%',
    height: 120,
    borderRadius: 6, 
    border: '1px solid black',
};




function Header() {
     return (
    <header className="header">
            <img src="./assets/logo.png" alt="Zoo Logo" className="logo" />
            <nav>
            <Flex style= {headerStyle} justify= 'flex-end' align='center'>
        <Button> Animals </Button>
        <Button> About Us </Button>
        <Button> Login </Button>
            </Flex>
            </nav>
        </header>
    );
}


export default Header;