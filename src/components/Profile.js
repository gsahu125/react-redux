import React,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';

const Profile = (props)=>{
//console.log(props.match.params.id)
//state
const [show, setShow] = useState(false);
//arrow function
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

return(
    <React.Fragment>
        <p>Profile id : {props.match.params.id}</p>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ID :{props.match.params.id}  <br />
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
       
    </React.Fragment>
)
}

export default withRouter(Profile);