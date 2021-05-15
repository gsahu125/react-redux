import React from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import {Link,NavLink, BrowserRouter,Switch,Route} from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
const Product = ()=>{

    return(
        <React.Fragment>
            <BrowserRouter>
            <Container>
            <Row>
                <Col>
                    <Switch>
                    <Route path="/:prodName" children={<ProductDetail />} />
                    </Switch>
                </Col>
                <Col>
                    <Row style={{marginTop:'50px'}}>
                    <Col><Link to="/product1"><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link></Col>
                    <Col><Link to="/product2"><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link></Col>
                    </Row>
                    <br></br>
                    <Row>
                    <Col><Link to="/product3"><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link></Col>
                    <Col><Link to="/product4"><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link></Col>
                    </Row>
                </Col>
            </Row>
            </Container>

            {/* <div className="col-md-4">
            <Container style={{marginTop:'50px'}}>
            <Row>
                <Col xs={6} md={6}>
                <Link to="/product1"><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link>
                <br></br><br></br>
                </Col>
                <Col xs={6} md={6}>
                <Link to="/product2"><Image src="/images/banner2.jpg" width="100%" height="180px" rounded /></Link>
                <br></br><br></br>
                </Col>
                <Col xs={6} md={6}>
                <Link to="/product3"><Image src="/images/banner3.jpg" width="100%" height="180px" rounded /></Link>
                <br></br><br></br>
                </Col>
                <Col xs={6} md={6}>
                <Link to="/product4"><Image src="/images/banner1.jpg" width="100%" height="180px" rounded /></Link>
                <br></br><br></br>
                </Col>
            </Row>
            </Container>
            </div> */}

            {/* <div className="col-md-6">
            <Switch>
            <Route path="/:prodName" children={<ProductDetail />} />
            </Switch>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                    <Link to="/product1"><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link>
                    </div>
                </div>
            </div>*/}
        </BrowserRouter>
        </React.Fragment>
    )
}
export default Product;