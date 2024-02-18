import NavBrand from "./Header/NavBrand";
import Search from "./Header/Search";
import Cart from "./Cart";

const Header = ({ cartItems, AddItemToCart,  RemoveItemFromCart, clearCart}) => {
    return (
        <header>
            <NavBrand />
            <Search />
            <Cart cartItems={cartItems} addItem={AddItemToCart} removeItem={RemoveItemFromCart} clearCart={clearCart}/>
        </header >
    );
}

export default Header;