import { useLocation, useNavigate, useParams } from "react-router";
const ProductItem = ({id}) => {
    let location = useLocation()
    let history = useNavigate()
    let params = useParams();

    const handleGoback = () => {
        history("/product")
    }

    console.log(params)
    return (
        <>
         <div> this is product Items : {params.id}</div>
         <button onClick={handleGoback}> Go Back</button>
        </>
        
    )
}

export default ProductItem;