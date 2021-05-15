import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export function Login()
{
    const [loggedIn,setLoggedIn] = useState(false)
    const history = useHistory()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loginErr,setLoginErr] = useState('')

    function handleFormSubmit(e)
    {
        e.preventDefault();
        //console.warn({email,password})    
        if(email ==='' || password ==='')
        {
            setLoginErr('email & password must be enter')
            return;
        }
        else if(email !='gsahu125@gmail.com' || password !='123456')
        {
            setLoginErr('Please enter valid user details')
            return;
        }
        else
        {
            setLoggedIn(true)
            alert('wel come to our website')
            history.push('/Gajendra')
        }
    }

    return(
        <React.Fragment>
            
            <div className="row justify-content-center">
            
            <div className="col-md-4 m-t-10">
            <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>User Login</p>
            <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value);setLoginErr('');}} placeholder="Enter email" />
                <Form.Text className="text-muted">
                {loginErr}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value);setLoginErr('');}} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            &nbsp;&nbsp;<Button variant="light" onClick={()=>history.push('/signup')}>Signup</Button>
            </Form>

            </div></div>
        </React.Fragment>
    )
}
