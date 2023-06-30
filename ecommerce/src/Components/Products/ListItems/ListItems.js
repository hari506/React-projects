import AddToCartIcon from '../../../assets/icons/add_cart.svg';
import React, { useState } from 'react';

const ListItem = ({ data }) => {
    const [counter, setCounter] = useState(0);

    const handleIncreamentCounter = e => {
        if(counter > 5){
            return;
        }
        setCounter(counter+1);
    }

    const handleDecreamentCounter = e => {
        setCounter(counter-1);
    }

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbNail}`} alt="product image" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.price}</span>
                    <small>
                        <strike>₹{data.discountPrice}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            {
                counter <= 0 ?
                    <button className={"cart-add"} onClick={handleIncreamentCounter}>
                        <span>Add to Cart</span>
                        <img src={AddToCartIcon} alt="Cart Icon" />
                    </button>
                    :
                    <div className='cart-addon'>
                        <button onClick={handleDecreamentCounter} style={{backgroundColor: "#E96125"}}><span>-</span></button>
                        <span style={{marginLeft: "90px"}}>{counter}</span>
                        <button onClick={handleIncreamentCounter} style={{float:"right", backgroundColor: "#E96125"}}><span>+</span></button>
                    </div>
            }
        </div>
    );
}

export default ListItem;