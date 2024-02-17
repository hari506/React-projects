import { useState } from "react";
import CartModal from "./Modal";
import CartButton from './Button.js'

const Cart = ({ cartItems, addItem, removeItem }) => {
    let [sohwModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(previous => !previous)
    }

    return (
        <>
            <div className="cart-container">
                <CartButton cartItems={cartItems} handleModal={handleModal}/>
            </div>
            {
                sohwModal && <CartModal cartItems={cartItems} handleModal={handleModal} addItem={addItem} removeItem={removeItem} setShowModal={setShowModal} />

            }
        </>

    )
}

export default Cart;