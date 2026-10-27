import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useMemo } from "react";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";
import { AppTheme } from "../../../theme";
import { type Product } from "@/types/products";

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardHeader}>
          <Image
            source={{ uri: images[0] }}
            resizeMode="cover"
            style={styles.backgroundImage}
          ></Image>
        </View>
        <View style={styles.cardBody}>
          <View
            style={{ flexDirection: "row", marginRight: appTheme.spacing.md }}
          >
            <Ionicons
              name="star"
              color={appTheme.colors.primaryAction}
              size={18}
              style={{ marginRight: appTheme.spacing.xs }}
            ></Ionicons>
            <Text style={{color:appTheme.colors.primaryAction,marginRight:appTheme.spacing.sm}}>{rating}</Text>
            <Text style={{color:appTheme.colors.textSecondary}}>{`(${reviewCount})`}</Text>
          </View>
          <Text>{name}</Text>
          <View>
              <Text>{currency}{price}</Text>
          </View>
      
        </View>
      </View>
    </ScrollView>
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
      width: 170,
      height: 295,
    },
    backgroundImage: {
      ...StyleSheet.absoluteFill,
      width: undefined,
      height: undefined,
      borderRadius: apptheme.radii.lg,
    },
    cardHeader: {
      height: 150,
      width: 150,
      borderRadius: apptheme.radii.lg,
    },
    cardBody: {
      marginVertical:apptheme.spacing.sm
    },
  });
