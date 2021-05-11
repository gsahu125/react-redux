import React from 'react';
import {useParams} from 'react-router-dom';
const Contact = ()=>{
    const {name} = useParams();
    return(
        <React.Fragment>
            <p>Welcome to contact {name}</p>
        </React.Fragment>
    )
}
export default Contact;
