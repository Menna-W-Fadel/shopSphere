import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";

type IconProps = {
  name: string;
  iconColor: string;
  size: number;
  bgColor: string;
};

export default function IconComponent({
  name,
  iconColor,
  size,
  bgColor,
}: IconProps) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyle(appTheme), [appTheme]);
  const iconName = name as React.ComponentProps<typeof Ionicons>["name"];
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Ionicons name={iconName} size={size} color={iconColor} />
    </View>
  );
}
const createStyle = (apptheme: AppTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: apptheme.radii.pill,
      justifyContent: "center",
      alignItems: "center",
      padding: apptheme.spacing.sm,
      alignSelf: "flex-start",
      marginHorizontal: apptheme.spacing.xs,
    },
  });
