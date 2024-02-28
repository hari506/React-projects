import { useState } from "react";
import CartModal from "./Modal";
import CartButton from './Button.js'
import OrderSuccess from "../Order/OrderSuccess.js";
import { useDispatch } from "react-redux";
import { handlePlaceOrder } from "../../Actions/auth.js";

const Cart = () => {
    let [sohwModal, setShowModal] = useState(false);
    let [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false);
    let dispatch = useDispatch();
    let [orderId, setOrderId] = useState('')

    const handleModal = () => {
        setShowModal(previous => !previous)
    }

    const handleOrderSuccessModal = () => {
        setShowModal(false);
        dispatch(handlePlaceOrder((response) => {
            if (response.error) {
                alert(response.data?.error || 'Some thing went wrong while place the order!')
            } else {
                console.log("order", response)
                setShowOrderSuccessModal(previous => !previous)
                setOrderId(response?.name)
            }

        }))

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

                showOrderSuccessModal && <OrderSuccess handleOrderSuccessModal={handleOrderSuccessModal} orderId={orderId}/>
            }
        </>

    )
}

export default Cart;