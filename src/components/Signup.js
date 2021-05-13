import React from 'react';
import {Form,Button} from 'react-bootstrap';
export function Signup()
{
    return(
        <React.Fragment>
            <div className="row justify-content-center">
            
            <div className="col-md-4 m-t-10">
            <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>User Signup</p>
            <Form>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" />
            <Form.Text className="text-muted">Error MSG</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">Error MSG</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">Error MSG</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
                <Form.Text className="text-muted">Error MSG</Form.Text>
            </Form.Group>


            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Designation</Form.Label>
                <Form.Control as="select">
                <option>Select Designation</option>
                <option>Designer</option>
                <option>Developer</option>
                <option>Tester</option>
                <option>Management Unit</option>
                <option>Admin</option>
                </Form.Control>
                <Form.Text className="text-muted">Error MSG</Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree terms and conditions" />
                <Form.Text className="text-muted">Error MSG</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div></div>

        </React.Fragment>
    )
}
