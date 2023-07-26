import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./Components/NotFound";

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
       </Routes>
    </>
  );
}

export default App;
