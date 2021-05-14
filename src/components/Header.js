import React,{useState} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Custom-style.css';

const Header = ()=>{
const [loginUser,setLoginUser] = useState('Guest')


    return(
        <React.Fragment>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/" className="active">Home</Link>
                <Link to="/about" >About</Link>
                <Link to={"/contact/"+loginUser} >Contact</Link>
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Signup</Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
export default Header;