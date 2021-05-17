import React from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function ProductDetail(props)
{
    //let params = useParams();
    //console.log('from params',params)
    const data = {itemId:props.selectedProd,qty:1}
    
    return(
            <React.Fragment>
                {props.selectedProd?
                <Card style={{ width: '100%',marginTop:'50px' }}>
                <Card.Img variant="top" src="/images/banner1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title {props.selectedProd} - </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Form.Label>Select Quantity</Form.Label>
                    <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control><br></br><br></br>
                    <Button variant="primary" onClick={()=>props.addToCart(data)}>Add to Cart</Button>
                </Card.Body>
                </Card>:
                 <Card style={{ width: '100%',marginTop:'50px' }}>
                 <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2021/05/c2ff6-16203242079652-800.jpg" />
                 </Card>   
                }
            
        </React.Fragment>
    )
}
export default ProductDetail;