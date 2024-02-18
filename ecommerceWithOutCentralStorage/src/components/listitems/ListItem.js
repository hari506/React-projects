import { useState } from 'react';
import addToCartIcon from '../../images/icons/add_cart.svg';
import Modal from '../UI/Modal';

const ListItem = ({ data, AddItemToCart, RemoveItemFromCart }) => {
    let [showModal, setShowModal] = useState(false)

    const increaseCounterByOne = (event) => {
        event.stopPropagation();
        AddItemToCart(data);
    }

    const decreaseCounterByOne = (event) => {
        event.stopPropagation();
        if (data.quantity < 1) {
            return;
        }
        RemoveItemFromCart(data);
    }

    const handleModal = (event) => {
        event.stopPropagation();
        setShowModal(prev => !prev)
    }

    return (
        <>
            <div className={"item-card"} onClick={handleModal}>
                <img src={`./images/${data.thumbnail}`} alt="place holder" className={"img-fluid"} />
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span>${data.discountedPrice}</span> &nbsp; &nbsp;
                        <small><strike>${data.price}</strike></small>
                    </div>
                    <div className={"title"}>
                        <h3> {data.title} </h3>
                    </div>
                </div>
                {/*<button className={"cart-add"} onClick={() => updateItem(data.id)}>Update Item</button>*/}
                {
                    data.quantity === 0 ?

                        <button className={"cart-add"} onClick={increaseCounterByOne}>
                            <span>Add to Cart</span>
                            <img src={addToCartIcon} alt="cart button icon" />
                        </button>

                        :

                        <div className="cart-addon">
                            <button onClick={decreaseCounterByOne}><span>-</span></button>
                            <span>{data.quantity}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                }
            </div>
            { showModal &&
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
                                data.quantity < 1 ?
                                    <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                        <span>Add to Cart</span>
                                        <img src={addToCartIcon} alt="Cart Icon" />
                                    </button>
                                    :
                                    <div className="cart-addon card-addon__modal">
                                        <button onClick={decreaseCounterByOne}><span>-</span></button>
                                        <span>{data.quantity}</span>
                                        <button onClick={increaseCounterByOne}><span>+</span></button>
                                    </div>
                            }
                        </div>
                    </div>
                </Modal>
            }
        </>

    )
}


export default ListItem