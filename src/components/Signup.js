import React,{useState} from 'react';
import {Form,Button,Container,Row,Col} from 'react-bootstrap';
export function Signup()
{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm_password,setConfirm_password] = useState('')
    const [designation,setDesignation] = useState('')
    const [tnc,setTnc] = useState(false)

    //states for err msg
    const [errName,setErrName] = useState('')
    const [errEmail,setErrEmail] = useState('')
    const [errPassword,setErrPassword] = useState('')
    const [errCp,setErrCp] = useState('')
    const [errDesignation,setErrDesignation] = useState('')
    const [errTnc,setErrTnc] = useState('')


    function resetStates()
    {
        setName('');setEmail('');setPassword('');setConfirm_password('');setDesignation('');
    }
    function resetErrorMsg()
    {
        setErrName('');setErrEmail('');setErrPassword('');setErrCp('');setErrDesignation('');setErrTnc('');
    }

    function handleFormSubmit(e)
    {
            e.preventDefault();
            console.warn({name,email,password,confirm_password,designation,tnc})
            
            if(name ==='')
            {
                setErrName('name must be enter')
                return;
            }
            if(email ==='')
            {
                setErrEmail('email must be enter')
                return;
            }
            else if(password ==='')
            {
                setErrPassword('Password must be enter')
                return;
            }
        
            else if(password !== confirm_password) 
            {
                setErrCp('password not match')
                return;
            }
            else if(designation ==='')
            {
                setErrDesignation('Designation must be selected')
                return;
            }
            else if(tnc ===false)
            {
                setErrTnc('Term and condition must be agreed')
                return;
            }
            else
            {
                alert('form submited');
                resetStates();
                resetErrorMsg();
            }
    
    }
    return(
        <React.Fragment>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                    <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>User Signup</p>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={2} className="justify-content-md-center">
                    <Col>
                        <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value);setErrName('')}} placeholder="Enter your Name" />
                        <Form.Text className="text-muted">{errName}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">{errEmail}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value);setErrPassword('')}} placeholder="Password" />
                            <Form.Text className="text-muted">{errPassword}</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" value={confirm_password} onChange={(e)=>{setConfirm_password(e.target.value);setErrCp('')}} placeholder="Confirm Password" />
                            <Form.Text className="text-muted">{errCp}</Form.Text>
                        </Form.Group>


                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control as="select" value={designation} onChange={(e)=>{setDesignation(e.target.value);setErrDesignation('')}}>
                            <option>Select Designation</option>
                            <option>Designer</option>
                            <option>Developer</option>
                            <option>Tester</option>
                            <option>Management Unit</option>
                            <option>Admin</option>
                            </Form.Control>
                            <Form.Text className="text-muted">{errDesignation}</Form.Text>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" value={tnc} onChange={(e)=>{setTnc(e.target.checked);setErrTnc('')}} label="Agree terms and conditions" />
                            <Form.Text className="text-muted">{errTnc}</Form.Text>
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
