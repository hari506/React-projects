import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

let Items = () => {
    let [items, setItems] = useState([]);
    let newItems = useSelector(state => state.items);
    console.log(newItems);

    useEffect(() => {
        let getItems = (newItems) => {
            setItems(newItems)
        }

        getItems(newItems)
    }, [newItems])
    return (
        <div>
            <ul>
                {
                    items.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Items
