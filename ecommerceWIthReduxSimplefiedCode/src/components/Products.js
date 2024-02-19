import { useEffect, useState } from "react";
import ListItem from "./listitems/ListItem";
import axios from "axios";
import Loader from "./UI/Loader";

const Products = () => {

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

    return (
        <>
            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        items.map(item => <ListItem key={item.id} data={item} />)
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