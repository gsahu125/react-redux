import React,{useEffect, useState} from 'react';
import {Container,Row,Col,Image,Button,Breadcrumb} from 'react-bootstrap';
import {Link,NavLink, BrowserRouter,Switch,Route} from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const Product = (props)=>{
const [data,setData] = useState([])

useEffect(()=>{
fetch('http://127.0.0.1:8000/api/listproduct').then((res)=>{
res.json().then((result)=>{
    setData(result.listProduct)
})
})
},[])

    return(
        <React.Fragment>
            <BrowserRouter>
            <Container>
            <Row style={{marginTop:'20px'}}>
                <Col>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Product</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Switch>
                    <Route path="/:prodName" children={<ProductDetail addToCart={props.addToCart} />} />
                    </Switch>
                </Col>
                <Col>
                    <Row xs={1} md={2} style={{marginTop:'50px'}}>
                        {
                            data.map((item)=>{
                                return(
                                    <Col><Link to={item.name}><Image src={item.image1} width="100%" rounded /></Link></Col>
                                )
                            })
                        }
                    
                    </Row>
                </Col>
            </Row>
            </Container>
            
        </BrowserRouter>
        </React.Fragment>
    )
}
export default Product;