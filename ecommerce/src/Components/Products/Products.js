import ListItem from "./ListItems/ListItems";
import React, { useState, useEffect } from "react";
import Form from "../Form";
import axios from "axios";
import Loader from "../UI/Loader";
import Modal from "../UI/Model";

const Products = ({increaseItemsCount, decreaseItemsCount, eventQueue}) => {
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
            quantity: 0,
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

  useEffect(()=> {
    let index = items.findIndex(item => item.id == eventQueue.id);
    console.log("product js event queue", eventQueue);
    if(index > -1){
      if(eventQueue.type == 1){
        handleIncreamentItmes1(items[index]);
      }else{
        handleDecreamentItmes1(items[index]);
      }
    }
  }, [eventQueue])

  {/* 

  const updateItemTitle1 = async (id) => {
    try{
      const title = `Updated Title For item-${id}`;
     const updateItem = axios.patch(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/items/${id}.json`, {
       title: title
     });

     const data = [...items];
     const index1 = data.findIndex(e => e.id === id)
     data[index1]['title'] = title;
     setItem(data);
    }catch(err){
       console.log(err);
    }       
   }


 */}

 const handleIncreamentItmes1 = (item) => {
    let data = [...items];
    let index = data.findIndex( item1 => item1.id == item.id);
    if(index > -1){
      if(data[index].quantity <= 5){
        data[index].quantity++;
        setItem(data);
      }
    }

    increaseItemsCount(item);
 }

 const handleDecreamentItmes1 = (item) => {
  let data = [...items];
  let index = data.findIndex( item1 => item1.id == item.id);
  if(index > -1){
    if(data[index].quantity > 0){
      data[index].quantity--;
      decreaseItemsCount(item);
      setItem(data);
    }
  }
}

  return (
    <>
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {
          items.map(item => <ListItem key={item.id} data={item} handleIncreamentItmes={handleIncreamentItmes1} handleDecreamentItmes={handleDecreamentItmes1} />)
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