import Modal from "../../UI/Modal";
import Footer from "../View/Footer";
import CartItemsList from "../View/CartItemsList";

const CartModal = ({ handleModal, cartItems, addItem, removeItem, handleOrderSuccessModal}) => {
    return (
        <Modal onClose={handleModal}>
            <div className="checkout-modal">
                <h2>Checkout Modal</h2>
                <div className="checkout-modal_list">
                    <CartItemsList cartItems={cartItems} addItem={addItem} removeItem={removeItem} />
                </div>
                <Footer cartItems={cartItems} handleOrderSuccessModal={handleOrderSuccessModal} />
            </div>
        </Modal>

    )
}

export default CartModal;