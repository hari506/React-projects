import CartItem from "../CartItems/CartItem"
const CartItemsList = ({ cartItems, addItem, removeItem }) => {

    return (
        <>
            {
                cartItems.length > 0 ?
                    cartItems.map(item => {
                        return (
                            <CartItem
                                data={item}
                                key={item.id}
                                addItem={addItem}
                                removeItem={removeItem}
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