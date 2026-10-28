import { View, Text ,StyleSheet} from 'react-native'
import React, { ComponentProps, useMemo } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AppTheme, typography,ColorTheme } from '@/theme';
import { useAppTheme } from '@/hooks/useAppTheme';
type ChipProps = {
  name: string;
  icon: string;
  textSize?:number;
  productCount:number;
};
export default function CategoryChip({ name, icon ,textSize=typography.fontSize.xs,productCount}: ChipProps){
    
const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View style={[styles.container]}>
        <Ionicons
          name={icon as ComponentProps<typeof Ionicons>['name']}
          size={appTheme.spacing.lg}
          color={appTheme.colors.primaryActionText}
          style={{ marginRight: appTheme.spacing.xs }}
        />
      <Text style={[styles.textContent,{fontSize:textSize}]}>
        {name}
      </Text>
      <View style={styles.countContainer}>
        <Text style={styles.countStyle}>{productCount}</Text>
      </View>
    </View>
  );
}

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primaryAction,
      paddingHorizontal: theme.spacing.md,
      height: theme.spacing.xxl,
      borderRadius: theme.radii.pill,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: theme.spacing.lg,
      //Force container to shrink-wrap around the text
      //CONTAINER fits the text inside it 
    alignSelf: 'flex-start', 
    marginRight:theme.spacing.xs
    },
    textContent:{
      color:theme.colors.primaryActionText,
      lineHeight:theme.typography.lineHeight.xs,
      fontWeight:theme.typography.fontWeight.bold,
    },
    countContainer:{
        width:24,
        height:24,
        borderRadius:theme.radii.pill,
        backgroundColor:theme.colors.textPrimary,
        justifyContent:"center",
        alignItems:"center",
        padding:theme.spacing.xs,
        marginLeft:theme.spacing.xs,

    },
    countStyle:{
        color:theme.colors.textSecondary,
         lineHeight:theme.typography.lineHeight.xs,
      fontWeight:theme.typography.fontWeight.bold,
      fontSize:theme.typography.fontSize.xs
    }
  });