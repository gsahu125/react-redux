import React from 'react';
function Cart(props)
{
    return(
        <React.Fragment>
            <span>Cart : {props.count}</span>
        </React.Fragment>
    )
}
export default Cart;