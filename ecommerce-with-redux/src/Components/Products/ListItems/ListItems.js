import AddToCartIcon from '../../../assets/icons/add_cart.svg';
import React, { useState } from 'react';
import Modal from '../../UI/Model';
import { useDispatch, useSelector } from 'react-redux';
import {increamentItemAction, decreamentItemAction, clearCartAction} from "../../../actions"

const ListItem = ({ data}) => {
    const [modal, setModal] = useState(false);
    let item = useSelector(state => state.items.find(item => item.id == data.id))
    let dispatch = useDispatch();

    const handleIncreamentCounter = e => {
        e.stopPropagation();
        dispatch(increamentItemAction(data))
    }

    const handleDecreamentCounter = e => {
        e.stopPropagation()
        dispatch(decreamentItemAction(data.id))
    }

    const handleModal = () => {
        setModal(previousState => !previousState);
    }
    
    return (
        <>
        <div className={"item-card"} onClick={handleModal}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="product image" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h6>{data.title}</h6>
                </div>
            </div>
           {/*  <button onClick={() => updateItemTitle(data.id)}> Update Title </button> */} 
            {
                !item || item?.quantity <= 0 ?
                    <button className={"cart-add"} onClick={handleIncreamentCounter}>
                        <span>Add to Cart</span>
                        <img src={AddToCartIcon} alt="Cart Icon" />
                    </button>
                    :
                    <div className='cart-addon'>
                        <button onClick={handleDecreamentCounter} style={{backgroundColor: "#E96125"}}><span>-</span></button>
                        <span>{item.quantity}</span>
                        <button onClick={handleIncreamentCounter} style={{float:"right", backgroundColor: "#E96125"}}><span>+</span></button>
                    </div>
            }
        </div>

        {
            modal && <Modal handleModal1={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
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
                                !item || item.quantity < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={handleIncreamentCounter}>
                                    <span>Add to Cart</span>
                                    <img src={AddToCartIcon} alt="Cart Icon"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={handleDecreamentCounter}><span>-</span></button>
                                    <span>{item.quantity}</span>
                                    <button onClick={handleIncreamentCounter}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modal> 
        }
        </>
    );
}

export default ListItem;