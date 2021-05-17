import React,{useEffect, useState} from 'react';
import {Container,Row,Col,Image,Button,Breadcrumb} from 'react-bootstrap';
import {Link,NavLink, BrowserRouter,Switch,Route} from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const Product = (props)=>{
//console.warn('product',props)
    //data to store product object array
    const [data,setData] = useState([])
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

    const [sp,setSp] = useState(1)
    const [pq,setPq] = useState(1)

    function updateQty(qty)
    {
        setPq(qty)
    }


    return(
        <React.Fragment>
            <BrowserRouter>
            <Container>
            <Row style={{marginTop:'8px'}}>
                <Col>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Product / {sp}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Switch>
                    <Route path="/:name" children={<ProductDetail sp={sp} pq={pq} cartData={props} updateQty={updateQty} />} />
                    </Switch>
                </Col>
                <Col>
                    <Row xs={1} md={2} style={{marginTop:'5px'}}>
                        {
                            data.map((item)=>{
                                return(
                                    <Col><Link to={"/product/"+item.name}><Image src={item.image1} onClick={()=>{setSp(item.id)}} width="100%" rounded /></Link></Col>
                                )
                            })
                        }
                    
                    </Row>
                </Col>
            </Row>
            {/* <Button variant="primary" onClick={()=>props.addToCartHandle({prodId:1,prodName:'i-phone',price:100,qty:2})}>Add to Cart</Button> */}
            </Container>
            
        </BrowserRouter>
        </React.Fragment>
    )
}
export default Product;