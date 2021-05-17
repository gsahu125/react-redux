import  {ADD_TO_CART,REMOVE_TO_CART} from '../constants';
const initialState = {
    cartData : []
}
export default function cartItems(state=[],action)
{
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn('data from reducer',action)  
            return [
                ...state,
                {cartData : action.data}
            ]
            break;
        default:
            return state
            
    }
}