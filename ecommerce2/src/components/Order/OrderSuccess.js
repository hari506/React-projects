import Modal from '../UI/Modal'
import OrderSuccessImage from '../../images/icons/order_success.svg'

const OrderSuccess = ({ handleOrderSuccessModal }) => {
    return (
        <Modal onClose={handleOrderSuccessModal}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessImage} alt="Success" className="img-fluid" />
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderID #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccess