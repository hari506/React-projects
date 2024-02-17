import { useEffect, useState } from "react";
import ListItem from "./listitems/ListItem"

const Products = () => {

    let [items, setItems] = useState([
        {
            id: 1,
            name: 'Item 1',
            title: 'Title Of The Item1',
            price: 340,
            strickPrice: '450',
            productImg: 'placeholder.png'
        },
        {
            id: 2,
            name: 'Item 2',
            title: 'Title Of The Item2',
            price: 340,
            strickPrice: '450',
            productImg: 'placeholder.png'
        },
        {
            id: 3,
            name: 'Item 3',
            title: 'Title Of The Item3',
            price: 340,
            strickPrice: '450',
            productImg: 'placeholder.png'
        }
    ]);

    useEffect(() => {
        fetch('https://react-ecommerce-565a4-default-rtdb.firebaseio.com/items/items.json')
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
            })
    }, [])


    /**
     * Updating the item with specific item id
     * @param {*} itemId - type : integer
     * @returns {void}
     */
    /*const updateItemData = async (itemId) => {
        let title = `updated title for items - ${itemId}`;
        await axios.patch(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/items/items/${itemId}.json`, {
            title: title
        })

        let data = [...items];
        let index = data.findIndex(item => item.id === itemId);
        data[index]['title'] = title;
        setItems(data)
    }*/

    return (
        <div className="product-list">
            <div className="product-list--wrapper">
                {
                    items.map(item => <ListItem key={item.id} data={item} />)
                }
            </div>
        </div>

    );
}

export default Products;