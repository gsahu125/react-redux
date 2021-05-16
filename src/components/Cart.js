import React from 'react';
import {Button,Badge} from 'react-bootstrap';
function Cart(props)
{
    return(
        <React.Fragment>
            <Button variant="secondary">
            Cart Item <Badge variant="light">{props.cartCount}</Badge>
            </Button>
        </React.Fragment>
    )
}
export default Cart;