import React from 'react';
import {Table} from 'react-bootstrap';
export const Home = (props)=>{
const arr = props.data;
const arr1 = props.monetData;
// console.warn(arr1)
let i =0;
    return(
        <React.Fragment>
            <br></br>
            <h2 style={{textAlign:'center'}}>Array of object recieved by props</h2>
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
               arr.map((item)=>
               { 
                i = i+1;
                return(
                      <tr>
                        <td>{i}</td>
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
 