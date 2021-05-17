import React from 'react';
import {Button,Badge} from 'react-bootstrap';
function Cart(props)
{
    return(
        <React.Fragment>
            <Button variant="secondary">
            Cart Item <Badge variant="light">{props.data.cartData.length}</Badge>
            </Button>
        </React.Fragment>
    )
}
export default Cart;