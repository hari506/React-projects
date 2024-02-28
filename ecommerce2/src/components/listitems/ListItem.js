import {  useState } from 'react';
import addToCartIcon from '../../images/icons/add_cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { IncreaseItemCount, DecreaseItemCount } from '../../Actions';
import ItemModal from './LitemModal';

const ListItem = ({ data }) => {
    let [showModal, setShowModal] = useState(false)
    let cartItems = useSelector(state => state.cart.items);
    let dataItem = cartItems.find(item => item.id === data.id);
    let dispatch = useDispatch();

    const increaseCounterByOne = (event) => {
        event.stopPropagation();
        dispatch(IncreaseItemCount(data))
    }

    const decreaseCounterByOne = (event) => {
        event.stopPropagation();
        dispatch(DecreaseItemCount(data.id))
    }

    const handleModal = (event) => {
        //sevent.stopPropagation();
        setShowModal(prev => !prev)
    }

    return (
        <>
            <div className={"item-card"} onClick={handleModal}>
                <img src={`../images/${data.thumbnail}`} alt="place holder" className={"img-fluid"} />
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span>${data.discountedPrice}</span> &nbsp; &nbsp;
                        <small><strike>${data.price}</strike></small>
                    </div>
                    <div className={"title"}>
                        <h3> {data.title} </h3>
                    </div>
                </div>
                {
                    !dataItem || dataItem.quantity === 0 ?

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
            {
                showModal && <ItemModal handleModal={handleModal} data={data} dataItem={dataItem} increaseCounterByOne={increaseCounterByOne} 
                 decreaseCounterByOne={decreaseCounterByOne} />
            }
        </>

    )
}


export default ListItem