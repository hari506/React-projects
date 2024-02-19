import { useState } from "react";
import CartModal from "./Modal";
import CartButton from './Button.js'
import OrderSuccess from "../Order/OrderSuccess.js";
import { useDispatch } from "react-redux";

const Cart = () => {
    let [sohwModal, setShowModal] = useState(false);
    let [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false);
    let dispatch = useDispatch();

    const handleModal = () => {
        setShowModal(previous => !previous)
    }

    const handleOrderSuccessModal = () => {
        setShowModal(false);
        dispatch({
            type: 'CLEAR_CART'
        })
        setShowOrderSuccessModal(previous => !previous)
    }

    return (
        <>
            <div className="cart-container">
                <CartButton handleModal={handleModal} />
            </div>
            {
                sohwModal && <CartModal handleModal={handleModal} handleOrderSuccessModal={handleOrderSuccessModal} />

            }
            {

                showOrderSuccessModal && <OrderSuccess handleOrderSuccessModal={handleOrderSuccessModal} />
            }
        </>

    )
}

export default Cart;