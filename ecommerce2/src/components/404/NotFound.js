import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div class="error-container">
            <h1> 404 </h1>
            <p>
                Oops! The page you're
                looking for is not here.
            </p>
            <Link to={'/'}> Goto Home Page! </Link>
        </div>
    )
}


export default NotFound;