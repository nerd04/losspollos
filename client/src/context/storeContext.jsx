import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        console.log(cartItems);
        for(const itemId in cartItems){
            if (cartItems[itemId] > 0) {
                let itemInfo = food_list.find((product)=>product._id===itemId);
                totalAmount += itemInfo.price*cartItems[itemId];
            }
        }
        return totalAmount;
    }

    
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;