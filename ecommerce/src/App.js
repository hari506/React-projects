
import Products from "./Components/Products/Products";
import Header from "./Components/Layout/Header";
import SubHeader from "./Components/Layout/SubHeader/SubHeader";
import React, {useState} from "react";
const App = () => {

  const [cartItmes, setCartItems] = useState([]);
  const [eventItmes, setEventItems] = useState({
   id: "",
   type: ""
  })

  const handleItemCountIncrease = data => {
   console.log("cart items increase", data.quantity);
     let items = [...cartItmes];
     let index = items.findIndex(item => item.id === data.id);
     if(index > -1){
      items[index] = data;
      setCartItems(items);
     }else{
      setCartItems([...items, data])
     }
  }

  const handleItemCountDecrease = data => {
   console.log(" app js cart items count decrease ");
   let items = [...cartItmes];
   let index = items.findIndex(item => item.id === data.id);
   if(index > -1){
      if(data.quantity === 0){
         items.splice(index, 1);
      }
      
      setCartItems([...items])
   }
  }

  const handleCartItemClick = (id, type) => {
   console.log("cart clicked id", id);
   console.log("event items", eventItmes);
     setEventItems({
      id,
      type
     })
  }

  return (
      <>
         <Header items={cartItmes} cartItemClick={handleCartItemClick}></Header>
         <SubHeader></SubHeader>
         <Products increaseItemsCount={handleItemCountIncrease} decreaseItemsCount={handleItemCountDecrease} eventQueue={eventItmes}></Products>
      </>
   );
}

export default App;
