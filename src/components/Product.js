import React,{useEffect, useState} from 'react';
import {Container,Row,Col,Image,Button,Breadcrumb} from 'react-bootstrap';
import {Link,NavLink, BrowserRouter,Switch,Route} from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const Product = (props)=>{
//data to store product object array
const [data,setData] = useState([])

const [selectedProd,setSelectedProduct] = useState(null)

function  getProducts()
{
    fetch('http://127.0.0.1:8000/api/listproduct').then((res)=>{
        res.json().then((result)=>{
            setData(result.listProduct)
        })
        })
}
useEffect(()=>{
    getProducts()
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
                    <Route path="/:name" children={<ProductDetail addToCart={props.addToCart} selectedProd={selectedProd} />} />
                    </Switch>
                </Col>
                <Col>
                    <Row xs={1} md={2} style={{marginTop:'50px'}}>
                        {
                            data.map((item)=>{
                                return(
                                    <Col><Link to={"/product/"+item.name}><Image src={item.image1} onClick={()=>{setSelectedProduct(item.id)}} width="100%" rounded /></Link></Col>
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