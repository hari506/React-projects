import React from 'react'

const Footer = ({ cartItems, handleOrderSuccessModal }) => {
    return (
        <>
            {
                cartItems.length > 0
                &&
                <div className="checkout-modal_footer">
                    <div className="totalAmount">
                        <h4>Total Amount: </h4>
                        <h4>
                            {
                                cartItems.reduce((previous, current) => {
                                    return previous + (current.discountedPrice * current.quantity)
                                }, 0)
                            }
                            <span style={{ marginLeft: "4px" }}>INR</span>
                        </h4>
                    </div>
                    <button onClick={handleOrderSuccessModal}>Order Now</button>
                </div>
            }
        </>

    )
}

export default Footer
