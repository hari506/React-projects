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
                        <span>{item.discountedPrice}</span>
                        <small>
                            <strike>{item.price}</strike>
                        </small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={() => itemClick(-1, item)}>-</button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick={() => itemClick(1, item)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;