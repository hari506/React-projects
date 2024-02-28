import { NavLink } from "react-router-dom";

const SubHeader = () => {
    return (
        <div className="subheader-container">
            <ul>
                <li><NavLink to={'/'}> Home </NavLink></li>
                <li><NavLink to={'/products/category-1'}>Category 1</NavLink></li>
                <li><NavLink to={'/products/category-2'}>Category 2</NavLink></li>
                <li><NavLink to={'/products/category-3'}>Category 3</NavLink></li>
                <li><NavLink to={'/products/category-4'}>Category 4</NavLink></li>
            </ul>
        </div>
    )
}

export default SubHeader;