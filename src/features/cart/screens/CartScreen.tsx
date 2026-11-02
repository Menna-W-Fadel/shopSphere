import { View, Text,StyleSheet, FlatList } from 'react-native'
import React ,{useMemo}from 'react'
import {AppTheme} from "../../../theme"
import {useAppTheme} from"../../../hooks/useAppTheme";
import {useAppSelector} from"@/store/hooks";
import CartCardComponent from '../components/cartCard/CartCardComponent';

export default function CartScreen() {
    const {appTheme} =useAppTheme();
    const styles = useMemo(()=>createStyles(appTheme),[appTheme]);
    const cartItems = useAppSelector((state)=>state.cart.items);

  return (
    <View style={styles.container}>
     <FlatList 
     data={cartItems}
    keyExtractor={(item)=>item.id}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=><CartCardComponent {...item} />}
    ListEmptyComponent={()=><Text style={{color:appTheme.colors.textPrimary}}>Your cart is empty</Text>}
    ListHeaderComponent={()=><Text style={{color:appTheme.colors.textPrimary,fontSize:appTheme.typography.fontSize.lg}}>My Cart</Text>}   
     />
    </View>
  )
}

const createStyles = (appTheme:AppTheme)=> StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:appTheme.spacing.md,
        backgroundColor:appTheme.colors.background,
    }
})
