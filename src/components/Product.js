import React from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import {useHistory,Link} from 'react-router-dom';

const Product = ()=>{
const history = useHistory();

    return(
        <React.Fragment>
            <Container style={{marginTop:'50px'}}>
            <Row>
                <Col xs={6} md={3}>
                <Link onClick={()=>history.push('/productdetail/')}><Image src="/images/banner.jpg" width="100%" height="180px" rounded /></Link>
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/banner2.jpg" width="100%" height="180px" rounded />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/banner3.jpg" width="100%" height="180px" rounded />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/banner1.jpg" width="100%" height="180px" rounded />
                </Col>
                <Link to="/productdetail">Details</Link>
                <Button >Add to cart</Button>
            </Row>
            <br></br>
            <Row>
                <Col xs={6} md={3}>
                <Image src="/images/banner.jpg" width="100%" height="180px" rounded />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/banner2.jpg" width="100%" height="180px" rounded />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/banner3.jpg" width="100%" height="180px" rounded />
                </Col>
                <Col xs={6} md={3}>
                <Image src="/images/banner1.jpg" width="100%" height="180px" rounded />
                </Col>
            </Row>

            </Container>
        </React.Fragment>
    )
}
export default Product;