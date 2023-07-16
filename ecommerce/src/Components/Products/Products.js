import ListItem from "./ListItems/ListItems";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Products = () => {
  // const itme = ;
  const [items, setItem] = useState([]);
  const[loader, setLoader] = useState(true);
  const location = useLocation();
  const params = useParams();
  let searchParams = new URLSearchParams(location.search).get("search");
  let navigater = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      try {
        let productTypes = "items/items";
        if(params?.category){
          productTypes = `items/items-${params.category}`;
        }

        if(searchParams){
         // productTypes += `?search=${searchParams}`;
        }

        const res = await axios.get(`https://react-ecommerce-565a4-default-rtdb.firebaseio.com/${productTypes}.json`);
       
        if(!res.data){
          navigater("/404");
          return;
        }

        if(!res.data.items){
          res.data.items = res.data;
        }
        const transFormedData = res.data.items.map((item, index) => {
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
    return () => {
      setItem([]);
      setLoader(true)
    }
  }, [params.category, searchParams])

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