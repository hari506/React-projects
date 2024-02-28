import Products from "./components/Products";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import LoginORSignup from "./components/auth";

const App = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Routes>
        <Route path={'/'} element={<Products />} />
        <Route path={'/:type?'} element={<LoginORSignup />} />
        <Route path={'/products/:category'} element={<Products />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
