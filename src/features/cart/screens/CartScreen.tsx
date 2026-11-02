import { View, Text,StyleSheet, FlatList } from 'react-native'
import React ,{useMemo}from 'react'
import {AppTheme} from "../../../theme"
import {useAppTheme} from"../../../hooks/useAppTheme";
import {useAppSelector} from"@/store/hooks";
import CartCardComponent from '../components/cartCard/CartCardComponent';
import { selectCartItems,selectCartTotalPrice} from '@/store/selectors/cartSelectors';

export default function CartScreen() {
    const {appTheme} =useAppTheme();
    const styles = useMemo(()=>createStyles(appTheme),[appTheme]);
    const cartItems = useAppSelector(selectCartItems);
    const totalPrice =useAppSelector(selectCartTotalPrice);

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
     { totalPrice>0 &&(<Text>total price: {`$${totalPrice}`}</Text>)}
     
    </View>
  )
}

const createStyles = (appTheme:AppTheme)=> StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        paddingVertical:appTheme.spacing.md,
        backgroundColor:appTheme.colors.background,
    }
})
