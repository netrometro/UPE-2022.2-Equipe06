import {createContext, useState} from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) =>{
const [cart, setCart] = useState([]);

function handleAddItemToCart(name, price){
    const itemObject = {name, price};
    setCart([...cart, itemObject]);
}

function handleRemoveItemFromCart(clicledItemIndex){
    const filteredCart = cart.filter(
        (cartItem) => cart.indexOf(cartItem) !== clicledItemIndex

    );
    setCart(filteredCart);
}

function clearCart(){
    setCart([]);
}
    return (
        <CartContext.Provider value = {{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart }}
        >{children}
        </CartContext.Provider>
    )
}