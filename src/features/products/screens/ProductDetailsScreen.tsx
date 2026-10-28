import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import ProductHeader from '../components/ProductHeader'
import { useProductById } from '@/hooks/useProductBtId'
import { useAppTheme } from '@/hooks/useAppTheme'
import { AppTheme } from '@/theme'
import Navbar from '@/components/Navbar'
import ImageSlider from '../components/ImageSlider'
import RatingRow from '../components/RatingRow'


export default function ProductDetailsScreen({route}:any) {
    const {prodId}=route.params;
    const {appTheme}=useAppTheme()
    const styles = useMemo(()=>createStyles(appTheme),[appTheme])
    const {data:product,isEnabled,error,isFetching,refetch,isPending}= useProductById(prodId)
  return (
    <View style={styles.container}>
      <Navbar screenName='Product Details'></Navbar>
      {product &&(
       <>
       <ProductHeader {...product} />
       <ImageSlider {...product} />
       <View style={styles.row}>
        <View style={{width:"50%"}}>
            <Text style={styles.nameStyle}>{product.name}</Text>
            <Text style={styles.subtitleStyle}>{product.subtitle}</Text>
        </View>

        <View>
          <Text style={styles.priceStyle}>{product.price} {product.currency}</Text>
        </View>
       </View>
       <RatingRow {...product}></RatingRow>
       {/* <Text>{product.description}</Text> */}
       </>
      )
       }
    </View>
  )
}
const createStyles = (apptheme:AppTheme)=>StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:apptheme.colors.background
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start",
    flexWrap:"wrap",
    marginVertical:apptheme.spacing.md,
  },
  nameStyle:{
    color:apptheme.colors.textPrimary,
    fontSize:apptheme.typography.fontSize.lg,
    fontWeight:apptheme.typography.fontWeight.bold,
  },
  subtitleStyle:{
color:apptheme.colors.textSecondary,
    fontSize:apptheme.typography.fontSize.sm,
    fontWeight:apptheme.typography.fontWeight.regular,
  },
  priceStyle:{
        color:apptheme.colors.textPrimary,
    fontSize:apptheme.typography.fontSize.xl,
    fontWeight:apptheme.typography.fontWeight.bold,
  }
})