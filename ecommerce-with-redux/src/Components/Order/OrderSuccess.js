import Modal from "../UI/Model";
import OrderSuccessImage from '../../assets/icons/order_success.svg'
const OrderSuccess = ({handleOrderSuccessModal}) => {
    return (
        <Modal handleModal1={handleOrderSuccessModal}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessImage} alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderID #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default OrderSuccess;