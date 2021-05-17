import {connect} from 'react-redux';
import {addToCart} from '../service/actions/action';
import Product from '../components/Product';

const mapStateToProps = state =>({
    cartData:state.cartItems
})

const mapDispatchToProps = (dispatch) =>({
    addToCartHandle:(data)=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Product)
// export default Product;