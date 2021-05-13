import React from 'react';
import {Form,Button} from 'react-bootstrap';
export function Login()
{
    return(
        <React.Fragment>
            
            <div className="row justify-content-center">
            
            <div className="col-md-4 m-t-10">
            <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>User Login</p>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div></div>
        </React.Fragment>
    )
}
