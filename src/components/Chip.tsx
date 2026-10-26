import { View, Text, StyleSheet } from "react-native";
import React, { ComponentProps, useMemo } from "react";
import { type AppTheme } from "../theme";
import { useAppTheme } from "../hooks/useAppTheme";
import { Ionicons } from "@expo/vector-icons";

type ChipProps = {
  textContext: string;
  hasIcon: boolean;
  icon?: ComponentProps<typeof Ionicons>["name"];
};

export default function Chip({ textContext, hasIcon, icon }: ChipProps) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View style={styles.container}>
      {hasIcon && icon && (
        <Ionicons
          name={icon}
          size={appTheme.spacing.lg}
          color={appTheme.colors.textSecondary}
          style={{ marginRight: appTheme.spacing.xs }}
        />
      )}
      <Text style={styles.textContent}>
        {textContext}
      </Text>
    </View>
  );
}

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.accent,
      paddingHorizontal: theme.spacing.sm,
      height: theme.spacing.xxl,
      borderRadius: theme.radii.pill,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width:"40%",
      marginVertical: theme.spacing.sm,
    },
    textContent:{
      color:theme.colors.textSecondary,
      fontSize:theme.typography.fontSize.xs,
      lineHeight:theme.typography.lineHeight.xs,
      fontWeight:theme.typography.fontWeight.bold,
    }
  });

