import { View, Text, Image, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { images } from "../constants/images";
import { useAppTheme } from "../hooks/useAppTheme";
import { type AppTheme } from "../theme/index";
import AvatarPhoto from "./AvatarPhoto";
import { Ionicons } from "@expo/vector-icons";
type NavbarProps = {
  screenName: string;
};

export default function Navbar({ screenName }: NavbarProps) {
  const theme = useAppTheme();
  const styles = useMemo(() => createStyles(theme.appTheme), [theme.appTheme]);

  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <Image source={images.logo} style={styles.image} />
        <Text style={styles.textHeader}>{screenName}</Text>
      </View>
      <View style={styles.rowStyle}>
        <Ionicons
          name="notifications-outline"
          size={theme.appTheme.spacing.xl}
          color={theme.appTheme.colors.textPrimary}
          style={{
            marginRight: theme.appTheme.spacing.xl,
            paddingTop: theme.appTheme.spacing.sm,
          }}
        />
        <AvatarPhoto />
      </View>
    </View>
  );
}

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    textHeader: {
      color: theme.colors.textPrimary,
      fontSize: theme.typography.fontSize.lg,
      fontWeight: theme.typography.fontWeight.bold,
    },
    image: {
      height: theme.spacing.xxxl,
      width: theme.spacing.xxxl,
      borderRadius: theme.radii.pill,
      marginRight: theme.spacing.sm,
    },
    rowStyle: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
