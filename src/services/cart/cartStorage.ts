import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartItem } from "@/store/slices/cartSlice";

const cartKey="SHOPSPHERE_CART";

export const loadCart= async ():Promise<CartItem[]> => {
    try {
        const restoreCart = await AsyncStorage.getItem(cartKey);

        if(!restoreCart) return [];

        return JSON.parse(restoreCart) as CartItem[];

    } catch (error) {

        throw error;
    }
}


export const saveCart = async (cart:CartItem[])=>{
    try {
        const cartItems = JSON.stringify(cart)
        await AsyncStorage.setItem(cartKey,cartItems)
    } catch (error) {
        throw error;
    }
}