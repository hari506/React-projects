import { useEffect, useState } from "react";
import ListItem from "./listitems/ListItem";
import axios from "axios";
import Loader from "./UI/Loader";

const Products = ({ AddItemToCart, RemoveItemFromCart, changeItem, clearCart }) => {

    let [items, setItems] = useState([]);
    let [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        async function fetchItems() {
            try {
                let result = await axios.get('https://react-ecommerce-565a4-default-rtdb.firebaseio.com/items/items.json');
                let data = result.data;
                let transfomedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index,
                        quantity: 0
                    }
                })

                setItems(transfomedData)
            } catch (error) {
                console.log(error)
            } finally {
                setShowLoader(false)
            }

        }

        fetchItems();

    }, [])

    useEffect(() => {
        if (changeItem) {
            let products = [...items];
            let index = products.findIndex(item => item.id === changeItem.id);
            if (index > -1) {
                products[index].quantity = changeItem.quantity;
                setItems([...products])
            }
        }
    }, [changeItem])

    useEffect(() => {
        //if (clearCart) {
            let products = [...items];
            products.forEach(item => {
                item.quantity = 0;
            })
            setItems([...products])
       // }

    }, [clearCart])

    return (
        <>
            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        items.map(item => <ListItem key={item.id} data={item} AddItemToCart={AddItemToCart} RemoveItemFromCart={RemoveItemFromCart} />)
                    }
                </div>
            </div>
            {
                showLoader && <Loader />
            }
        </>

    );
}

export default Products;