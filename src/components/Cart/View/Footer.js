import React from 'react'
import { useSelector } from 'react-redux'

const Footer = ({ handleOrderSuccessModal }) => {
    let cartItems = useSelector(state => state.items);
    let totalAmount = useSelector(state => state.totalAmount);
    return (
        <>
            {
                cartItems.length > 0
                &&
                <div className="checkout-modal_footer">
                    <div className="totalAmount">
                        <h4>Total Amount: </h4>
                        <h4>{totalAmount}<span style={{ marginLeft: "4px" }}>INR</span>
                        </h4>
                    </div>
                    <button onClick={handleOrderSuccessModal}>Order Now</button>
                </div>
            }
        </>

    )
}

export default Footer
