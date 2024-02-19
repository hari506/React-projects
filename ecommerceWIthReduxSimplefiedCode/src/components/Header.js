import NavBrand from "./Header/NavBrand";
import Search from "./Header/Search";
import Cart from "./Cart";

const Header = () => {
    return (
        <header>
            <NavBrand />
            <Search />
            <Cart />
        </header >
    );
}

export default Header;