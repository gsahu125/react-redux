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
            
                     <Container style={{marginTop:'50px',marginBottom:'30px'}}>
                        <Row xs={2} md={2} lg={3}>
                          <Col>
                            <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                          <Col>
                          <Image src="/images/banner.jpg" width="100%" rounded />
                          </Col>
                        </Row>
                       
                      </Container>
                    
        <Container>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Container>
            
        
        </React.Fragment>
    )
} 
 