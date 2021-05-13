import React,{useState} from 'react';
import {Table} from 'react-bootstrap';
export const Home = (props)=>{
const [counter,setCounter] = useState(0);

    return(
        <React.Fragment>
            <br></br>
            <h2 style={{textAlign:'center'}}>Array of object recieved by props, Counter : {counter}</h2>
            <center><button onClick={()=>setCounter(counter+1)}>Update counter</button></center>
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
 