import { Link, NavLink, Routes, Route, useParams, useLocation, generatePath } from "react-router-dom";
import ValidatRoutes from '../Components/ValidatRoutes'
const Product = () => {

  let params = useParams();
  let location = useLocation();

  let search = new URLSearchParams(location.search);

  console.log(search.get("query"));
  console.log(search.get("param1"));

    return (
        <>
          <div>
            {search.get("query") ? <div> the search params are : {search.get("query")} --- {search.get("param1")}</div> : <></>}
            <Routes>
              <Route path="/:id" element={<ValidatRoutes />} />
              <Route path="/:id/:subcategory?" element={<ValidatRoutes />} />
              <Route path="/" element={
                <>
                <ul>
                  <li> <NavLink to={location.pathname + "/1"}> Product 1</NavLink></li>
                  <li> <NavLink to={location.pathname + "/2"}> Product 2</NavLink></li>
                  <li> <NavLink to={location.pathname + "/3"}> Product 3</NavLink></li>
                  <li> <NavLink to={location.pathname + "/4"}> Product 4</NavLink></li>
                  <li> <NavLink to={location.pathname + "/5"}> Product 5</NavLink></li>
                </ul>

                <ul>
                    <li> <NavLink to={location.pathname + "/abc"}> category 1</NavLink></li>
                    <li> <NavLink to={location.pathname + "/abcd"}> category 2</NavLink></li>
                    <li> <NavLink to={location.pathname + "/abcde"}> category 3</NavLink></li>
                    <li> <NavLink to={location.pathname + "/abcdef"}> category 4</NavLink></li>
                    <li> <NavLink to={generatePath(`${location.pathname}/:id/:subcategory?`,{
                      id: "abcdefg",
                      subcategory: "subcategory123"
                    })}> category 5</NavLink></li>
                </ul>
                </>
              } />
            </Routes>
          </div>
        </>

    )
}

export default Product;