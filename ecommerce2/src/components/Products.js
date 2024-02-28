import { useEffect, useState } from "react";
import ListItem from "./listitems/ListItem";
import axios from "axios";
import Loader from "./UI/Loader";
import { useParams } from "react-router-dom";

const Products = () => {
console.log("products component");
    let [products, setProducts] = useState([]);
    let [showLoader, setShowLoader] = useState(true)
    let params = useParams();

    useEffect(() => {
        console.log("use effect in products");
        async function fetchItems() {
            try {
                let jsonStr = 'items';
                if(params.category){
                    jsonStr = 'items-'+ params.category;
                }

                let result = await axios.get(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/items/${jsonStr}.json`);
                let data = result.data;
                let transfomedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0
                    }
                })

                setProducts(transfomedData)
            } catch (error) {
                console.log(error)
            } finally {
                setShowLoader(false)
            }

        }

        fetchItems();

        return () => {
            setProducts([])
            setShowLoader(true)
        }

    }, [params.category])

    return (
        <>
            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        products.map(item => <ListItem key={item.id} data={item} />)
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