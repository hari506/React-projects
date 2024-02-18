import Products from "./components/Products";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import { useState } from "react";

const App = () => {
  let [cartItems, setCartItems] = useState([]);
  let [changeItem, setChangeItem] = useState({});
  let [clearCart, setClearCart] = useState(false);

  const AddItemToCart = (item) => {
    let items = [...cartItems];
    let index = items.findIndex(item1 => item1.id === item.id);
    let changedQty = 0;
    if(index > -1){
      items[index].quantity++;
      changedQty = items[index].quantity;
    }else{
      item.quantity = changedQty =1;
      items.push(item)
    }
    
    setChangeItem({
      id: item.id,
      quantity: changedQty
    })
    setCartItems([...items])
  }

  const RemoveItemFromCart = (item) => {
    let items = [...cartItems];
    let index = items.findIndex(item1 => item1.id === item.id);
    if (index > -1) {
      items[index].quantity--;

      setChangeItem({
        id: item.id,
        quantity: items[index].quantity
      })

      if (items[index].quantity === 0) {
        items.splice(index, 1)
      }

      setCartItems([...items])
    }
  }

  const clearCartItems = () => {
    setClearCart(prev => !prev)
    setCartItems([]);
  }

  return (
    <div className="App">
      <Header cartItems={cartItems} AddItemToCart={AddItemToCart} RemoveItemFromCart={RemoveItemFromCart} clearCart={clearCartItems}/>
      <SubHeader />
      <Products AddItemToCart={AddItemToCart} RemoveItemFromCart={RemoveItemFromCart} changeItem={changeItem} clearCart={clearCart}/>
    </div>
  );
}

export default App;
