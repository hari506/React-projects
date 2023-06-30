
import Products from "./Components/Products/Products";
import Header from "./Components/Layout/Header";
import SubHeader from "./Components/Layout/SubHeader/SubHeader";
import User from "./Components/User/User";
import Timer from "./Timer/Timer";
import React, {useState} from "react";
const App = () => {
  {/*} return (
      <>
         <Header></Header>
         <SubHeader></SubHeader>
         <Products></Products>
      </>
   );

  */}

const [isToggle, setToggle] = useState(false);

const handleToggle = () => {
   setToggle(!isToggle);
}
  return (
   <>
      {
         isToggle ?  <div>Welcom</div> : <Timer/>
      }
     <button onClick={handleToggle}> Toggle</button>
   
   </>
   
  );
}

export default App;
