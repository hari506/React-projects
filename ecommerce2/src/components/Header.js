import NavBrand from "./Header/NavBrand";
import Search from "./Header/Search";
import Cart from "./Cart";

const Header = ({ cartItems, AddItemToCart,  RemoveItemFromCart}) => {
    return (
        <header>
            <NavBrand />
            <Search />
            <Cart cartItems={cartItems} addItem={AddItemToCart} removeItem={RemoveItemFromCart}/>
        </header >
    );
}

export default Header;