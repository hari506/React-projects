import Modal from "../../UI/Modal";
import { useState } from "react";
import Footer from "../View/Footer";
import CartItemsList from "../View/CartItemsList";
import OrderSuccess from "../../Order/OrderSuccess";

const CartModal = ({ handleModal, cartItems, addItem, removeItem, setShowModal }) => {
    let [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false)
    const handleOrderSuccessModal = () => {
        setShowModal(false);
        setShowOrderSuccessModal(previous => !previous)
    }

    return (
        <>
            <Modal onClose={handleModal}>
                <div className="checkout-modal">
                    <h2>Checkout Modal</h2>
                    <div className="checkout-modal_list">
                        <CartItemsList cartItems={cartItems} addItem={addItem} removeItem={removeItem}/>
                    </div>
                    <Footer cartItems={cartItems} handleOrderSuccessModal={handleOrderSuccessModal} />
                </div>
            </Modal>

            {
                showOrderSuccessModal && <OrderSuccess handleOrderSuccessModal={handleOrderSuccessModal} />
            }
        </>

    )
}

export default CartModal;