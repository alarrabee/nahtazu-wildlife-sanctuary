import { Link } from 'react-router-dom';

import {Button, Flex} from 'antd';

import logo from '../../assets/logo.png'

const headerStyle: React.CSSProperties ={
    width : '100%',
    height: 120,
    borderRadius: 6, 
    border: '1px solid black',
};




const Header = () => {
     return (
    <div className="header">
            <nav>       
            <Flex wrap gap = 'large'style={headerStyle} justify= 'flex-end' align='center'>
                <Link to ="/"><img src={logo} alt="Zoo Logo" className="logo" /></Link>
                <Link  to = "/Animals"><Button> Animals </Button></Link>
                <Link to ="/About"><Button> About Us </Button></Link>
                <Link to ="/Login"><Button > Login </Button></Link>
                <Link to = "/SignUp"><Button> Sign Up</Button></Link>
            </Flex>
            </nav>
    </div>
    );
}


export default Header;