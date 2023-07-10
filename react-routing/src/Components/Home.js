import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    let navigate = useNavigate();
    const handleRedirection = () => {
        navigate("/product?query=button-click")
    }

    return (
        <>
          <Link to={"/product"}> Product </Link><br />
          <Link to={{
            pathname: "/product",
            search: "query=some-query&params=param-1"
          }}> Product with queyr </Link><br />

          <Link to={"/product?query=mobile"}> Product with mobile search </Link><br />
          <button onClick={handleRedirection}> go to product</button>
        </>
        
    )
}

export default Home;