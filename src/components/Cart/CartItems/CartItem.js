import { useDispatch } from "react-redux"

const CartItem = ({ data }) => {
    let dispatch = useDispatch();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {
                id: data.id
            }
        })
    }

    const addItem = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                item: data
            }
        })
    }

    return (
        <div className="checkout-modal_list-item">
            <div className="img-wrap">
                <img src={`/images/${data.thumbnail}`} className="img-fluid" alt={data.title} />
            </div>
            <div className="information">
                <div>
                    <h4>{data.title}</h4>
                    <div className="pricing">
                        <span>{data.discountedPrice}</span>
                        <small>
                            <strike>{data.price}</strike>
                        </small>
                    </div>
                </div>
                <div className="cart-addon cart-addon__modal">
                    <button onClick={() => removeItem(data)}>-</button>
                    <span className="counter">{data.quantity}</span>
                    <button onClick={() => addItem(data)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;