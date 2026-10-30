import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import Skeleton from "@/components/Skeleton";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";

export default function ProductCardSkeleton() {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View style={styles.container}>
      <Skeleton style={styles.cardHeader} />
      <Skeleton style={styles.row} />
      <Skeleton style={styles.nameStyle}></Skeleton>
      <Skeleton style={styles.priceStyle}></Skeleton>
    </View>
  );
}

const createStyles = (apptheme: AppTheme) =>
  StyleSheet.create({
    container: {
        backgroundColor:apptheme.colors.surface,
      borderRadius: apptheme.radii.lg,
      borderColor: apptheme.colors.border,
      padding: apptheme.spacing.md,
      marginRight: apptheme.spacing.lg,
      width: 155,
      height: 295,
      elevation: 5,
      shadowColor: apptheme.colors.overlay,
    },
    backgroundImage: {
      width:130,
      height: 150,
      borderRadius: apptheme.radii.lg,
      position: "absolute",
      paddingHorizontal:apptheme.spacing.sm,
    },
    cardHeader: {
      height: 150,
      width: 130,
      borderRadius: apptheme.radii.lg,
      marginBottom:apptheme.spacing.lg

    },
    row: {
      flexDirection: "row",
      width:"100%",
      height:22,

    },
    nameStyle: {
      fontSize: apptheme.typography.fontSize.xxl,
      fontWeight: apptheme.typography.fontWeight.bold,
      marginTop: apptheme.spacing.md,
      marginBottom: apptheme.spacing.lg,
    },
    priceStyle: {
      fontSize: apptheme.typography.fontSize.xxl,
      fontWeight: apptheme.typography.fontWeight.bold,
      paddingTop: apptheme.spacing.sm,
    },
  });
