import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { type AppTheme } from "../../../theme/index";
import {Ionicons} from "@expo/vector-icons";

export default function Header() {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textPrimary}>Good morning, Sara!</Text>
        <Text style={styles.textSecondary}>Discover what's new today</Text>
      </View>
      <View style={styles.clipboardIcon}>
        <Ionicons
          name="sparkles-outline"
          size={appTheme.spacing.xl}
          color={appTheme.colors.textSecondary}
        />
      </View>
    </View>
  );
}

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    textPrimary: {
      color: appTheme.colors.textPrimary,
      fontSize: appTheme.typography.fontSize.xl,
      fontWeight: appTheme.typography.fontWeight.bold,
    },
    textSecondary: {
      color: appTheme.colors.textSecondary,
      fontSize: appTheme.typography.fontSize.md,
      fontWeight: appTheme.typography.fontWeight.regular,
      paddingTop: appTheme.spacing.xs,
    },
    clipboardIcon: {
      backgroundColor: appTheme.colors.border,
      borderRadius: appTheme.radii.pill,
      borderColor: appTheme.colors.border,
      width: appTheme.spacing.xxl,
      height: appTheme.spacing.xxl,
      alignItems: "center",
      justifyContent: "center",
      padding: appTheme.spacing.sm,
      boxSizing:"content-box",
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
