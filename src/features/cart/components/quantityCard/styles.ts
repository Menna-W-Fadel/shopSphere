import { StyleSheet } from "react-native";
import type { AppTheme } from "@/theme";

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 40,
      backgroundColor: appTheme.colors.surface,
      borderRadius: appTheme.radii.md,
      borderWidth: 1,
      borderColor: appTheme.colors.border,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },

    quantityText: {
      fontSize: appTheme.typography.fontSize.md,
      fontWeight: appTheme.typography.fontWeight.regular,
      color: appTheme.colors.textPrimary,
    },
  });

export default createStyles;
