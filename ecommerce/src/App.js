
import Products from "./Components/Products/Products";
import Header from "./Components/Layout/Header";
import SubHeader from "./Components/Layout/SubHeader/SubHeader";
import React, { useDebugValue, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Authentication from "./Components/Auth";
import {checkUserSignedIn} from "./actions/auth"
import { useDispatch, useSelector } from "react-redux";

const App = () => {
   let dispatch = useDispatch();
   let auth = useSelector(state => state.auth)
   useEffect(()=>{
      dispatch(checkUserSignedIn(() =>{}))
   }, [])
   return (
      <>
         <Header></Header>
         <SubHeader></SubHeader>
         <Routes>
            <Route path="/login" element={auth.idToken ? <Navigate to="/" replace/> : <Authentication />} />
            <Route path="/signup" element={auth.idToken ? <Navigate to="/" replace/> : <Authentication />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/:category?" element={<Products />} />
            <Route path="*" to="/404" />
         </Routes>
      </>
   );
}

export default App;
