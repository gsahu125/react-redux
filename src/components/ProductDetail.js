import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function ProductDetail()
{
    const paramtr = useParams();

    
    return(
        <React.Fragment>
            <div className="container">
            <div className="row">
            <Card style={{ width: '80%',marginTop:'50px' }}>
            <Card.Img variant="top" src="/images/banner1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
            </div>
        </React.Fragment>
    )
}
export default ProductDetail;