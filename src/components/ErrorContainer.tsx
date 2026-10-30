import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { palette, spacing, radii, typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
type ErrorProps={
    error:string,
}
export default function ErrorContainer({error}: ErrorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Ionicons
            name="alert-circle-outline"
            color={palette.error}
            size={14}
          ></Ionicons>
        </View>
        <View>
          <Text style={styles.errorTitle}>Something went wrong</Text>
        </View>
      </View>
      <Text style={styles.erroMessage}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.errorLight,
    borderColor: palette.errorBorder,
    borderRadius: radii.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderWidth:1,
    boxSizing: "content-box",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  erroMessage: {
    color: palette.error,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    marginTop: spacing.sm,
  },
  errorTitle: {
    color: palette.error,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    paddingLeft: spacing.xs,
  },
});
