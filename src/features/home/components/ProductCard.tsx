import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useMemo } from "react";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { AppTheme } from "../../../theme";
import { type Product } from "@/types/products";
import Chip from "@/components/Chip";

export default function ProductCard({
  name,
  badge,
  currency,
  price,
  rating,
  reviewCount,
  isFavorite,
  images,
}: Product) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  const favoriteIcon = isFavorite ? "heart" : "heart-outline";
  const iconColor = isFavorite ? appTheme.colors.error : appTheme.colors.border;
  return (
    <View style={styles.container}>
      {/* card header containg image, badge and favorite icon */}
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: images[0] }}
          resizeMode="cover"
          style={styles.backgroundImage}
        ></Image>
        {/* chip and badge */}
        <View style={[styles.row,{ marginLeft: appTheme.spacing.xs }]}>
          <View>
            <Chip textContext={badge} hasIcon={false} textSize={10} />
          </View>
          <View style={styles.heartContainer}>
            <Ionicons name={favoriteIcon} size={22} color={iconColor} />
          </View>
        </View>
      </View>
      {/* card body containing rating, review count, name, currency and price  */}
      <View style={styles.cardBody}>
        <View
          style={{ flexDirection: "row", marginRight: appTheme.spacing.md }}
        >
          <Ionicons
            name="star"
            color={appTheme.colors.primaryAction}
            size={14}
            style={{ marginRight: appTheme.spacing.xs }}
          ></Ionicons>
          <Text
            style={{
              color: appTheme.colors.primaryAction,
              marginRight: appTheme.spacing.sm,
              fontSize: appTheme.typography.fontSize.xs,
            }}
          >
            {rating}
          </Text>
          <Text
            style={{
              color: appTheme.colors.textSecondary,
              fontSize: appTheme.typography.fontSize.xs,
            }}
          >{`(${reviewCount})`}</Text>
        </View>
        <Text style={styles.nameStyle}>{name}</Text>
        <View style={[styles.row,{paddingTop:appTheme.spacing.sm,}]}>
          <Text style={styles.priceStyle}>
            {price} {currency}
          </Text>
          <View style={[styles.heartContainer,{backgroundColor:appTheme.colors.primaryAction}]}>
            <Ionicons name="add" size={16} color={appTheme.colors.primaryActionText}></Ionicons>
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (apptheme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: apptheme.colors.surface,
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
      width: "100%",
      height: "100%",
      borderRadius: apptheme.radii.lg,
      position: "absolute",
    },
    cardHeader: {
      height: 150,
      width: 130,
      borderRadius: apptheme.radii.lg,
      position: "relative",
      overflow: "hidden",
    },
    cardBody: {
      marginVertical: apptheme.spacing.sm,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap:"wrap",
      //paddingTop:apptheme.spacing.md,
    },
    heartContainer: {
      borderRadius: apptheme.radii.pill,
      width: 30,
      height: 30,
      backgroundColor: apptheme.colors.card,
      justifyContent: "center",
      alignItems: "center",
      padding: apptheme.spacing.xs,
      alignSelf: "center",
      marginHorizontal: apptheme.spacing.xs,
    },
    nameStyle: {
      color: apptheme.colors.textPrimary,
      fontSize: apptheme.typography.fontSize.sm,
      fontWeight: apptheme.typography.fontWeight.bold,
      marginTop: apptheme.spacing.sm,
      marginBottom: apptheme.spacing.lg,
    },
    priceStyle: {
      color: apptheme.colors.primaryAction,
      fontSize: apptheme.typography.fontSize.sm,
      fontWeight: apptheme.typography.fontWeight.bold,
      paddingTop:apptheme.spacing.xs,
    },
  });
