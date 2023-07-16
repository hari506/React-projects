import Modal from "../UI/Model";
import OrderSuccessImage from '../../assets/icons/order_success.svg'
const OrderSuccess = ({handleOrderSuccessModal, OrderId}) => {
    return (
        <Modal handleModal1={handleOrderSuccessModal}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessImage} alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderID #{OrderId}</span>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default OrderSuccess;