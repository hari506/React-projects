import { useNavigate, useParams } from "react-router-dom";


const ProductCategory = ({category}) => {
    let history = useNavigate();
    let params = useParams();
    const handleHistory = () => {
        history("/product")
    }

    console.log(params);

    return (
        <>
          {
            params.subcategory ? <div> this is subcategory </div> : <></>
          }
          <div> product category {params.id}</div>
          <button onClick={handleHistory} > Go Back</button>
        </>
    )
}

export default ProductCategory;