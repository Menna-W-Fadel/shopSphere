import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { useAppTheme } from "@/hooks/useAppTheme";
import StarRating from "react-native-star-rating-widget";
import { AppTheme } from "@/theme";
import { Product } from "@/types/products";
import { Ionicons } from "@expo/vector-icons";

export default function RatingRow({ rating, reviewCount, stock }: Product) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <StarRating
          rating={rating}
          onChange={() => {}}
          starSize={14}
          color={appTheme.colors.primaryAction}
          starStyle={styles.customStar}
        />
        <Text style={styles.ratingText}>{rating}</Text>
        <Text style={styles.reviewText}>{`(${reviewCount})`}</Text>
      </View>
      {stock < 10 && (
        <View style={styles.stockContainer}>
          <Ionicons
            name="ellipse"
            color={appTheme.colors.error}
            size={12}
            style={{ marginTop: appTheme.spacing.xs }}
          ></Ionicons>
          <Text style={styles.stockText}>Only {stock} left</Text>
        </View>
      )}
    </View>
  );
}

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: appTheme.spacing.sm,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: appTheme.colors.surface,
      alignSelf: "flex-start",
      paddingVertical: appTheme.spacing.lg,
      paddingHorizontal: appTheme.spacing.lg,
      borderRadius: appTheme.radii.lg,
      width: "100%",
    },
    stockContainer: {
      alignSelf: "flex-start",
      paddingHorizontal: appTheme.spacing.lg,
      paddingVertical: appTheme.spacing.sm,
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: appTheme.colors.errorLight,
      color: appTheme.colors.error,
      borderRadius: appTheme.radii.lg,
    },
    stockText: {
      color: appTheme.colors.error,
      fontSize: appTheme.typography.fontSize.sm,
      fontWeight: appTheme.typography.fontWeight.semibold,
      marginLeft: appTheme.spacing.sm,
    },
    customStar: {
      marginHorizontal: 1,
      marginTop: appTheme.spacing.xs,
    },
    ratingText: {
      color: appTheme.colors.textPrimary,
      fontSize: appTheme.typography.fontSize.md,
      fontWeight: appTheme.typography.fontWeight.bold,
      marginHorizontal: appTheme.spacing.xs,
    },
    reviewText: {
      color: appTheme.colors.textSecondary,
      fontSize: appTheme.typography.fontSize.sm,
      fontWeight: appTheme.typography.fontWeight.regular,
    },
  });
