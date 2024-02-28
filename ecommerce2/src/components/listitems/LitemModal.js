
import addToCartIcon from '../../images/icons/add_cart.svg';
import Modal from '../UI/Modal';
const ItemModal = ({handleModal, data, dataItem, increaseCounterByOne, decreaseCounterByOne}) => {
    return (
        <Modal onClose={handleModal}>
            <div className="item-card__modal">
                <div className="img-wrap">
                    <img className={"img-fluid"} src={`/images/${data.thumbnail}`} alt={data.title} />
                </div>
                <div className="meta">
                    <h3>{data.title}</h3>
                    <div className={"pricing"}>
                        <span>₹{data.discountedPrice}</span>
                        <small>
                            <strike>₹{data.price}</strike>
                        </small>
                    </div>
                    <p>{data.description}</p>
                    {
                        !dataItem || dataItem.quantity === 0 ?
                            <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                <span>Add to Cart</span>
                                <img src={addToCartIcon} alt="Cart Icon" />
                            </button>
                            :
                            <div className="cart-addon card-addon__modal">
                                <button onClick={decreaseCounterByOne}><span>-</span></button>
                                <span>{dataItem.quantity}</span>
                                <button onClick={increaseCounterByOne}><span>+</span></button>
                            </div>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ItemModal;