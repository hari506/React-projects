import { useState } from 'react';
import addToCartIcon from '../../images/icons/add_cart.svg';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';

const ListItem = ({ data }) => {
    let [showModal, setShowModal] = useState(false)
    let stateItems = useSelector(state => state.items);
    let dataItem = data;
    let index = stateItems.findIndex(item => item.id === data.id);
    if (index > -1) {
        dataItem = stateItems[index]
    }
    let dispatch = useDispatch();

    const increaseCounterByOne = (event) => {
        event.stopPropagation();
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                item: dataItem
            }
        })
    }

    const decreaseCounterByOne = (event) => {
        event.stopPropagation();
        if (dataItem.quantity < 1) {
            return;
        }
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {
                id: dataItem.id
            }
        })
    }

    const handleModal = (event) => {
        event.stopPropagation();
        setShowModal(prev => !prev)
    }

    return (
        <>
            <div className={"item-card"} onClick={handleModal}>
                <img src={`./images/${dataItem.thumbnail}`} alt="place holder" className={"img-fluid"} />
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span>${dataItem.discountedPrice}</span> &nbsp; &nbsp;
                        <small><strike>${dataItem.price}</strike></small>
                    </div>
                    <div className={"title"}>
                        <h3> {dataItem.title} </h3>
                    </div>
                </div>
                {
                    dataItem.quantity === 0 ?

                        <button className={"cart-add"} onClick={increaseCounterByOne}>
                            <span>Add to Cart</span>
                            <img src={addToCartIcon} alt="cart button icon" />
                        </button>

                        :

                        <div className="cart-addon">
                            <button onClick={decreaseCounterByOne}><span>-</span></button>
                            <span>{dataItem.quantity}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                }
            </div>
            {showModal &&
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/images/${dataItem.thumbnail}`} alt={dataItem.title} />
                        </div>
                        <div className="meta">
                            <h3>{dataItem.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{dataItem.discountedPrice}</span>
                                <small>
                                    <strike>₹{dataItem.price}</strike>
                                </small>
                            </div>
                            <p>{dataItem.description}</p>
                            {
                                dataItem.quantity < 1 ?
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
            }
        </>

    )
}


export default ListItem