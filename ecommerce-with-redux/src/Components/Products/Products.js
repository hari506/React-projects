import ListItem from "./ListItems/ListItems";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../UI/Loader";

const Products = () => {
  // const itme = ;
  const [items, setItem] = useState([]);
  const[loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://react-ecommerce-565a4-default-rtdb.firebaseio.com/items.json');
        const transFormedData = res.data.map((item, index) => {
          return {
            ...item,
            id: index
          }
        });

        setItem(transFormedData)
      } catch (err) {
        console.log(err);
      } finally{
        setLoader(false);
      }
    }

    fetchData();
  }, [])

  return (
    <>
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {
          items.map(item => <ListItem key={item.id} data={item}/>)
        }
      </div>
    </div>

        {
          loader && <Loader />
        }
    </>
  );
}

export default Products;