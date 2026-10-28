import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import Chip from "@/components/Chip";
import { Product } from "@/types/products";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
import IconComponent from "@/components/IconComponent";

export default function ProductHeader({
  badge,
  categoryName,
  isFavorite,
}: Product) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const favoriteIcon = isFavorite ? "heart" : "heart-outline";
  const iconColor = isFavorite
    ? appTheme.colors.error
    : appTheme.colors.primaryAction;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Chip textContext={badge} hasIcon={false} />
        <Text style={styles.textStyle}>{categoryName}</Text>
      </View>
      <View style={styles.container}>
        <IconComponent
          name="share"
          iconColor={appTheme.colors.primaryAction}
          size={22}
          bgColor={appTheme.colors.card}
        />
        <IconComponent
          name={favoriteIcon}
          iconColor={iconColor}
          size={22}
          bgColor={appTheme.colors.card}
        />
      </View>
    </View>
  );
}

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginVertical: appTheme.spacing.md,
    },
    container: {
      flexDirection: "row",
      //justifyContent: "flex-end",
      alignItems: "center",
    },
    textStyle:{
        color:appTheme.colors.textSecondary,
        fontSize:appTheme.typography.fontSize.md,
        fontWeight:appTheme.typography.fontWeight.regular,
        marginLeft:appTheme.spacing.sm,
    },
  });
