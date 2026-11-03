import { View, Text } from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { loadCart, saveCart } from "../cartStorage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/selectors/cartSelectors";
import {setCartItems} from "@/store/slices/cartSlice"
type CartPersistanceProps = {
  children: ReactNode;
};

export default function CartPersistance({ children }: CartPersistanceProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [isReady,setIsReady]=useState(false);
  const [canSave,setCanSve]=useState(false);

    //1) to load the cart onMount
    useEffect(() => {
      const intializeCart = async () => {
        try {
          const savedCart = await loadCart();
          dispatch(setCartItems(savedCart));
          setCanSve(true)
        } catch (error) {
          throw error;
        }
        finally{
            setIsReady(true)
        }
      };
      intializeCart();
    }, []);

  //2) to save when state changes
  useEffect(() => {
    if(!canSave) return;
    try {
        saveCart(cartItems)
    } catch (error) {
        throw error;
    }
  }, [cartItems,canSave]);

  if(!isReady) return null;
  
  return <>{children}</>;
}
