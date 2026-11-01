import { View, Text ,StyleSheet} from 'react-native'
import React,{useMemo} from 'react';
import { useAppTheme } from '@/hooks/useAppTheme';
import { AppTheme } from '@/theme';

export default function VariantHeader() {
    const { appTheme } = useAppTheme();
    const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.primaryText}>Select Your Prefrence</Text>
        </View>
    </View>
  )
}


const createStyles = (apptheme: AppTheme) => StyleSheet.create({
    container:{
        justifyContent:"center",
        width:"100%",
        alignItems:"flex-start",
        marginVertical:apptheme.spacing.xs
    },
    primaryText:{
        color:apptheme.colors.textPrimary,
        fontSize:apptheme.typography.fontSize.md,
        fontWeight:apptheme.typography.fontWeight.semibold,
    },
})