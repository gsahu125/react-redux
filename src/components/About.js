import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
const About = ()=>{
const [data,setData] = useState([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        res.json().then((result)=>{
        //console.log("result",result)
        setData(result)
        })
       })
},[])
//console.log(data)
    return(
        <React.Fragment>
            <h2 style={{textAlign:'center'}}>This is about component</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                   <td>Id</td>
                   <td>Name</td>
                   <td>User Name</td>
                   <td>Email</td>
                   <td>Address</td>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,i=0)=>
                        <tr key={i+1}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.address.street},{item.address.zipcode}</td>
                        </tr>
                    )
                }
                </tbody>
                </Table>
        </React.Fragment>
    )
}
export default About;
