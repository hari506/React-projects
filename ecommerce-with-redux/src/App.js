
import Products from "./Components/Products/Products";
import Header from "./Components/Layout/Header";
import SubHeader from "./Components/Layout/SubHeader/SubHeader";
import React, {useState} from "react";
const App = () => {
  return (
      <>
         <Header></Header>
         <SubHeader></SubHeader>
         <Products />
      </>
   );
}

export default App;
