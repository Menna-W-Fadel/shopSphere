import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import ProductHeader from '../components/ProductHeader'
import { useProductById } from '@/hooks/useProductBtId'
import { useAppTheme } from '@/hooks/useAppTheme'
import { AppTheme } from '@/theme'
import Navbar from '@/components/Navbar'
export default function ProductDetailsScreen({route}:any) {
    const {prodId}=route.params;
    const {appTheme}=useAppTheme()
    const styles = useMemo(()=>createStyles(appTheme),[appTheme])
    const {data:product,isEnabled,error,isFetching,refetch,isPending}= useProductById(prodId)
  return (
    <View style={styles.container}>
      <Navbar screenName='Product Details'></Navbar>
      {product && <ProductHeader {...product} />}
    </View>
  )
}
const createStyles = (apptheme:AppTheme)=>StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:apptheme.colors.background
  }
})