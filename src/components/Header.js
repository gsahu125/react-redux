import React,{useState} from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import '../Custom-style.css';
import Cart from './Cart'

const Header = (props)=>{

const [loginUser,setLoginUser] = useState('Guest')

    return(
        <React.Fragment>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink exact to="/" activeStyle={{fontWeight: "bold",color: "red"}}>Home</NavLink>
                <NavLink to="/about" activeStyle={{fontWeight: "bold",color: "red"}}>About</NavLink>
                <NavLink to="/product" activeStyle={{fontWeight: "bold",color: "red"}}>Product</NavLink>
                <NavLink to={"/contact/"+loginUser} activeStyle={{fontWeight: "bold",color: "red"}}>Contact</NavLink>
                <NavLink to="/login" activeStyle={{fontWeight: "bold",color: "red"}}>Login</NavLink>
                <NavLink to="/signup" activeStyle={{fontWeight: "bold",color: "red"}}>Signup</NavLink>
                </Nav>
                <Form inline> 
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Cart data={props} />
                </Form>
                
            </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
export default Header;