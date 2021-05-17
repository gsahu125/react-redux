import {connect} from 'react-redux';
//import {addToCart} from '../service/actions/action';
import Header from '../components/Header';

const mapStateToProps = state =>({
    cartData:state.cartItems
})

const mapDispatchToProps = (dispatch) =>({
    //addToCartHandle:(data)=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Product;