import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import Home from './Components/Home';
import ProductCategory from './Components/ProductCategory';
import NotFound from './Components/NotFound';
import ValidatRoutes from './Components/ValidatRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/*" element={<Product />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
