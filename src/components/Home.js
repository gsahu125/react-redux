import React,{useState} from 'react';
import {Table,Carousel,Button,Jumbotron,Container,Row,Col,Image} from 'react-bootstrap';
export const Home = (props)=>{

  const [status,setStatus] = useState(true)
    return(
        <React.Fragment>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner3.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner2.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          <div className="container">
            <div className="row">
              <div class="col-md-12">
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
              </div>
            </div>
          </div>
                      <center>
                     <Container>
                        <Row>
                          <Col xs={6} md={4}>
                            <Image src="/images/banner.jpg" width="170px" height="180px" rounded />
                          </Col>
                          <Col xs={6} md={4}>
                            <Image src="/images/banner2.jpg" width="170px" height="180px" rounded />
                          </Col>
                          <Col xs={6} md={4}>
                            <Image src="/images/banner3.jpg" width="170px" height="180px" rounded />
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <Col xs={6} md={4}>
                            <Image src="/images/banner.jpg" width="170px" height="180px" rounded />
                          </Col>
                          <Col xs={6} md={4}>
                            <Image src="/images/banner2.jpg" width="170px" height="180px" rounded />
                          </Col>
                          <Col xs={6} md={4}>
                            <Image src="/images/banner3.jpg" width="170px" height="180px" rounded />
                          </Col>
                        </Row>
                      </Container>
                      </center>
            <br></br>

            <Jumbotron>
              {
                status? <h1>Welcome to our website Mr Gajendra</h1>:<h1>Welcome Guest in our website</h1>
              }
                
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
                <p>
                  <Button variant="primary" onClick={()=>setStatus(!status)}>Toggle</Button>
                </p>
              </Jumbotron>
        
        </React.Fragment>
    )
} 
 