import { useParams } from "react-router-dom"
import ProductItem from "./ProductItem";
import ProductCategory from "./ProductCategory";
import NotFound from "./NotFound";

const ValidatRoutes = () => {
    let params = useParams();
    console.log(params);

    if (params.id?.match(/^([0-9]+)$/)) {
        return <ProductItem />
    } else if (params.id?.match(/^([a-zA-Z]+)$/)) {
        console.log("this is category route");
        return <ProductCategory />
    } else {
        return <NotFound />
    }


}

export default ValidatRoutes;