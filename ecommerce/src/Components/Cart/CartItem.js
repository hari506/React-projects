const CartItem = ({item, itemClick}) => {
    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img src={`/assets/${item.thumbnail}`} className="img-fluid" alt={item.title} />
            </div>
            <div className="information">
                <div>
                    <h4>{item.title}</h4>
                    <div className="pricing">
                        <span>{item.price}</span>
                        <small>
                            <strike>{item.discountedPrice}</strike>
                        </small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={() => itemClick(item.id, -1)}>-</button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={() => itemClick(item.id, 1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;