import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import {Form,Button, Container,Row,Col} from 'react-bootstrap';

const Contact = ()=>{
    const {name} = useParams();
    const paramtr = useParams();

    const [fullname,setFullname] = useState(null)
    const [email,setEmail] = useState(null)
    const [msg,setMsg] = useState(null)

    const [errName, setErrName] = useState('')
    const [errEmail,setErrEmail] = useState('')
    const [errMsg,setErrMsg] = useState('')

    function clearForm()
    {
        setFullname('')
        setEmail('')
        setMsg('')
    }
    


    function handleSubmit(e)
    {
        //stop form reload
        e.preventDefault();
        //console.log({fullname,email,msg})
        
        //Write validations logic here

        // if(fullname ==''){
        //     setErrName('name must be enter')
        // }

        alert('your form submited')
        clearForm()
    }
    
    return(
        <React.Fragment>
            <Container>
                <Row className="justify-content-md-center">
                <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>
                Welcome to contact {name} /OR : {paramtr.name}</p>
                </Row>
                <Row xs={12} md={4} lg={2} className="justify-content-md-center">
                    <Col>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder="Enter your Name" />
                        <Form.Text className="text-muted">{errName}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">{errEmail}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" value={msg} onChange={(e)=>setMsg(e.target.value)} rows={3} />
                            <Form.Text className="text-muted">{errMsg}</Form.Text>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Contact;
