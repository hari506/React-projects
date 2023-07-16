import AddToCartIcon from '../../../assets/icons/add_cart.svg';
import React, { useState } from 'react';
import Modal from '../../UI/Model';
import {increamentItemAction, decreamentItemAction,} from "../../../actions"
import { connect } from 'react-redux';

const ListItem = ({ data, item, increamentItemAction, decreamentItemAction}) => {
    const [modal, setModal] = useState(false);

    const handleIncreamentCounter = e => {
        e.stopPropagation();
        increamentItemAction(data)
    }

    const handleDecreamentCounter = e => {
        e.stopPropagation()
        decreamentItemAction(data.id)
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

const matchStateToProps = (state, ownProps) => {
    return {
        item: state.cart.items.find(item => item.id === ownProps.data.id)
    }
}

const matchDispathToProps = {
    increamentItemAction,
    decreamentItemAction
  }


export default connect(matchStateToProps, matchDispathToProps)(ListItem);