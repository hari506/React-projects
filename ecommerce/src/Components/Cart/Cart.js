import Modal from "../UI/Model";
import { useState } from "react";
import CartItem from "./CartItem";
import OrderSuccess from "../Order/OrderSuccess";
import { increamentItemAction, decreamentItemAction, clearCartAction, handlePlaceOrder } from "../../actions";
import { connect, useDispatch } from "react-redux";

const Cart1 = (connectObj) => {
    let items = connectObj.items;
    const [showModal, setShowModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    let dispatch = useDispatch();
    let [orderId, setOrderId] = useState("");

    const handleShowModal = () => {
        setShowModal(previousState => !previousState);
    }

    const handleOrderPlace = () => {
        setShowModal(false);
        dispatch(handlePlaceOrder((data) => {
            if(data.error){
                alert(data.data.error || "something wrong while place the order!")
            }else{
                setShowOrderModal(previousState => !previousState);
                setOrderId(data.name)
            }
        }))
    }

    const handleCartItmeEvents = (type, item) => {
        if(type === 1){
            connectObj.increamentItemAction(item)
        }

        if(type === -1){
            connectObj.decreamentItemAction(item.id)
        }
    }

    return (
        <>
            <button onClick={handleShowModal}>
                <span data-items={items.length}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {
                showModal &&
                <Modal handleModal1={handleShowModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                items.length > 0 ?
                                items.map(item1 => <CartItem key={item1.id} item={item1} itemClick={handleCartItmeEvents} />)
                                     :
                                    <div className="empty-cart">Please add something in your cart!</div>
                            }
                        </div>
                        {
                            items.length > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    
                                    <h4>{connectObj.totalAmount} INR</h4>
                                </div>
                                <button onClick={handleOrderPlace}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }

            {
                showOrderModal && <OrderSuccess handleOrderSuccessModal={() =>  setShowOrderModal(previousState => !previousState)} OrderId={orderId}/>
            }
        </>

    );
}

const matchStateToProps1 = (state, ownProps) => {
    return {
        items: state.cart.items,
        totalAmount: state.cart.totalAmount
    }
}

const matchDispatchToProps1 = {
    increamentItemAction,
    decreamentItemAction,
    clearCartAction
}

export default connect(matchStateToProps1, matchDispatchToProps1)(Cart1);