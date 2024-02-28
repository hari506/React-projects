import { useSelector } from "react-redux"
import CartItem from "../CartItems/CartItem"
const CartItemsList = () => {
    let cartItems = useSelector(state => state.cart.items)

    return (
        <>
            {
                cartItems.length > 0 ?
                    cartItems.map(item => {
                        return (
                            <CartItem
                                data={item}
                                key={item.id}
                            />
                        )
                    })
                    :
                    <div className="empty-cart">Please add something in your cart!</div>
            }
        </>


    )
}

export default CartItemsList;