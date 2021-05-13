import React from 'react';
import {useParams} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';

const Contact = ()=>{
    const {name} = useParams();
    return(
        <React.Fragment>
            
            <div className="row justify-content-center">
            
            <div className="col-md-4">
            <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>Welcome to contact {name}</p>
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

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div></div>
        </React.Fragment>
    )
}
export default Contact;
