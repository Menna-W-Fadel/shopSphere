import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useMemo, useState } from "react";
import { ProductVariant } from "@/types/products";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";

type VariantCardProps = {
  variants: ProductVariant;
  selectedVariant: String | undefined;
  onSelect: (id: string) => void;
};

export default function VariantCard({
  variants,
  selectedVariant,
  onSelect,
}: VariantCardProps) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  const selected = selectedVariant === variants.id;

  return (
    <Pressable onPress={() => onSelect(variants.id)}>
      <View
        style={[
          styles.container,
          selected && { backgroundColor: appTheme.colors.primaryAction },
        ]}
      >
        <View style={selected && styles.row}>
          <Text
            style={[
              styles.labelStyle,
              selected && {
                color: appTheme.colors.primaryActionText,
                marginRight: appTheme.spacing.xs,
              },
            ]}
          >
            {variants.label}
          </Text>
          {selected && (
            <Ionicons
              name="checkmark-circle"
              size={16}
              color={appTheme.colors.primaryActionText}
            ></Ionicons>
          )}
        </View>

        <Text style={styles.pricelStyle}>{`$${variants.price}`}</Text>
      </View>
    </Pressable>
  );
}

const createStyles = (apptheme: AppTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: apptheme.colors.surface,
      borderRadius: apptheme.radii.md,
      borderColor: apptheme.colors.border,
      padding: apptheme.spacing.md,
      width: 80,
      height: 90,
      marginHorizontal: apptheme.spacing.xs,
      marginVertical: apptheme.spacing.sm,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    labelStyle: {
      color: apptheme.colors.textPrimary,
      fontSize: apptheme.typography.fontSize.sm,
      fontWeight: apptheme.typography.fontWeight.semibold,
    },
    pricelStyle: {
      color: apptheme.colors.textSecondary,
      fontSize: apptheme.typography.fontSize.xs,
      fontWeight: apptheme.typography.fontWeight.regular,
    },
  });
