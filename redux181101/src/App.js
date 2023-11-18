import Items from "./components/Items";
import { addItemToList, removeItemFromList } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  let dispatch = useDispatch()
  let handleAddItem = (e) => {
    e.preventDefault();
    console.log("add item event called");
    dispatch(addItemToList({
      name: 'giri',
      age: 34
    }));
  }

  let handleRemoveItem = (e) => {
    e.preventDefault();
    console.log("remove item event is called");
    dispatch(removeItemFromList({ name: 'hari'}));
  }

  return (
    <div className="App">
      react with redux proudct on 18-11-2023
      <Items />
      <button onClick={handleAddItem}> Add Item</button>
      <button onClick={handleRemoveItem}> Remove Item</button>
    </div>
  );
}

export default App;
