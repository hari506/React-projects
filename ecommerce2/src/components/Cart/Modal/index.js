import Modal from "../../UI/Modal";
import Footer from "../View/Footer";
import CartItemsList from "../View/CartItemsList";

const CartModal = ({ handleModal, handleOrderSuccessModal}) => {
    return (
        <Modal onClose={handleModal}>
            <div className="checkout-modal">
                <h2>Checkout Modal</h2>
                <div className="checkout-modal_list">
                    <CartItemsList />
                </div>
                <Footer handleOrderSuccessModal={handleOrderSuccessModal} />
            </div>
        </Modal>

    )
}

export default CartModal;