import { View, Text, StyleSheet} from 'react-native'
import React, { useMemo } from 'react'
import { useAppTheme } from '@/hooks/useAppTheme';
import IconComponent from '@/components/IconComponent';
import { AppTheme } from '@/theme';

export default function ImageSlider() {
   const {appTheme}=useAppTheme()
    const styles = useMemo(()=>createStyles(appTheme),[appTheme])
  return (
    <View style={styles.container}>

    </View>
  )
}

const createStyles =(apptheme:AppTheme) => StyleSheet.create({
  container:{
    height:300,
    overflow:"hidden",
    position:"relative",
    borderRadius:apptheme.radii.lg,
    
  }
})