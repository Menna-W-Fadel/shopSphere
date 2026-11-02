import { StyleSheet } from "react-native";
import type { AppTheme } from "@/theme";

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 125,
      backgroundColor: appTheme.colors.card,
      borderRadius: appTheme.radii.lg,
      borderWidth: 1,
      borderColor: appTheme.colors.border,
      padding: appTheme.spacing.md,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: appTheme.spacing.sm,
    },
    imageContainer: {
      overflow: "hidden",
      width: 80,
      height: 100,
      borderRadius: appTheme.radii.md,
    },
    image: {
      objectFit: "contain",
      width: "100%",
      height: "100%",
    },
    icon: {
      color: appTheme.colors.error,
      //appTheme.colors.error
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

export default createStyles;
