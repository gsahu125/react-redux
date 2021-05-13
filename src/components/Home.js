import React from 'react';
import {Table} from 'react-bootstrap';
export const Home = (props)=>{


    return(
        <React.Fragment>
         
            <p style={{marginTop:'20px',textAlign:'center',fontStyle:'italic',fontWeight:'800'}}>Sample table from props</p>
            <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Marital Status</th>
                        <th>Designation</th>
                      </tr>
                    </thead>
                    <tbody>
           {
               props.data.map((item,i=0)=>
               { 
                return(
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.dob}</td>
                        <td>{item.maritalStatus}</td>
                        <td>{item.designation}</td>
                      </tr>
                )
               })
            }
             </tbody>
            </Table>
    
            
        </React.Fragment>
    )
} 
 