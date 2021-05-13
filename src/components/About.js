import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Profile from './components/Profile';

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
                   <td>Action</td>
                </tr>
                </thead>
                <tbody>
                <BrowserRouter>
                {
                    data.map((item,i=0)=>
                        <tr key={i+1}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.address.street},{item.address.zipcode}</td>
                        <td><Link to={"/Profile/"+item.id}>Detail</Link></td>
                        </tr>
                    )
                }
                <Route path="/Profile/:id"><Profile /></Route>
                </BrowserRouter>
                </tbody>
                </Table>
        </React.Fragment>
    )
}
export default About;
