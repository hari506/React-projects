import ListItem from "./ListItems/ListItems";
import React, {useState} from "react";
import Form from "../Form";

const Products = () => {
   // const itme = ;
    const [items, setItem] = useState([{
      id: 1,
      price : 340,
      discountPrice: 400,
      thumbNail: 'placeholder.png',
      title: 'Produce Title 1'
    },
    {
      id: 2,
      price : 340,
      discountPrice: 400,
      thumbNail: 'placeholder.png',
      title: 'Produce Title 2'
    },
    {
      id: 3,
      price : 340,
      discountPrice: 400,
      thumbNail: 'placeholder.png',
      title: 'Produce Title 3'
    },
    {
      id: 4,
      price : 340,
      discountPrice: 400,
      thumbNail: 'placeholder.png',
      title: 'Produce Title 4'
    }]);
    
    {/*}
    const handleInput = (e) => {
      setItem({
        ...item,
        [e.target.name]: e.target.value
      });
    }

    const hadnleFormSubmit = e => {
      e.preventDefault();
      console.log(item);
      if(item.price > item.discountPrice){
        alert("the discount price must be greater than price");
        return;
      }
    }
  */}

      return (
        <div className={"product-list"}>
            {/*<div>
              <Form item={item} onChangeInput={handleInput} onFormSubmit={hadnleFormSubmit} />
      </div>*/}
            <div className={"product-list--wrapper"}>
            {
                items.map(item => <ListItem key={item.id} data={item}/>)
             }
            </div>
        </div>
      );
}

export default Products;