import { useState } from "react";
import CartModal from "./Modal";
import CartButton from './Button.js'
import OrderSuccess from "../Order/OrderSuccess.js";

const Cart = ({ cartItems, addItem, removeItem, clearCart }) => {
    let [sohwModal, setShowModal] = useState(false);
    let [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false)

    const handleModal = () => {
        setShowModal(previous => !previous)
    }

    const handleOrderSuccessModal = () => {
        setShowModal(false);
        clearCart();
        setShowOrderSuccessModal(previous => !previous)
    }

    return (
        <>
            <div className="cart-container">
                <CartButton cartItems={cartItems} handleModal={handleModal} />
            </div>
            {
                sohwModal && <CartModal cartItems={cartItems} handleModal={handleModal} addItem={addItem} removeItem={removeItem} handleOrderSuccessModal={handleOrderSuccessModal} />

            }
            {

                showOrderSuccessModal && <OrderSuccess handleOrderSuccessModal={handleOrderSuccessModal} />
            }
        </>

    )
}

export default Cart;