import React,{useState,useEffect} from 'react';
import {Table,Button,Modal,Pagination} from 'react-bootstrap';

const About = ()=>{

const [data,setData] = useState([]);
const [userDetail,setUserDetail] = useState([]);

function getApiData()
{
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        res.json().then((result)=>{
        //console.log("result",result)
        setData(result)
        })
       })
}

useEffect(()=>{
    getApiData()
},[])


function getUserDetail(uid)
{
  fetch('https://jsonplaceholder.typicode.com/users/'+uid).then((res1)=>{
    res1.json().then((result1)=>{
        setUserDetail(result1);
        //console.warn(result1)
    })
  })
  //console.log('from userDetail',userDetail);
}


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
//const handleShow = (uid) => setShow(true);

function openModelPopup(id)
{
    //alert('this is here'+id);
    getUserDetail(id);
    setShow(true);
}

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );

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
                {
                    data.map((item,i=0)=>
                        <tr key={i+1}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.address.street},{item.address.zipcode}</td>
                        <td><Button onClick={()=>openModelPopup(item.id)}>Detail</Button></td>
                        </tr>
                    )
                }
                </tbody>
                </Table>
                <span style={{float:'right'}}>{paginationBasic}</span>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Detail about : {userDetail.name}/UserId : {userDetail.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table>
                    {

                    }
                    <tr>
                        <td>User Name : {userDetail.username}</td>
                        <td>Email : {userDetail.email}</td>
                    </tr>
                    <tr>
                        <td>Phone : {userDetail.phone}</td>
                        <td>Website : {userDetail.website}</td>
                    </tr>
                    <tr>
                        <td>Address : </td>
                        <td>Company : </td>
                    </tr>
                </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            
        </React.Fragment>
    )
}
export default About;
