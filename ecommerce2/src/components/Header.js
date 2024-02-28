import NavBrand from "./Header/NavBrand";
import Search from "./Header/Search";
import Cart from "./Cart";
import LoginBtn from "./auth/LoginBtn";

const Header = () => {
    return (
        <header>
            <NavBrand />
            <Search />
            <LoginBtn />
            <Cart />
        </header >
    );
}

export default Header;