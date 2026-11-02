import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useMemo } from "react";
import { images } from "../constants/images";
import { useAppTheme } from "../hooks/useAppTheme";
import { type AppTheme } from "../theme/index";
import AvatarPhoto from "./AvatarPhoto";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from "@/store/hooks";
import { selectCartQuantity } from "@/store/selectors/cartSelectors";
import { useNavigation } from "@react-navigation/native";
type NavbarProps = {
  screenName: string;
};

export default function Navbar({ screenName }: NavbarProps) {
  const theme = useAppTheme();
  const styles = useMemo(() => createStyles(theme.appTheme), [theme.appTheme]);
  const cartQuantity = useAppSelector(selectCartQuantity);
  //const isCartNotEmpty = cartQuantity !== 0;
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <Image source={images.logo} style={styles.image} />
        <Text style={styles.textHeader}>{screenName}</Text>
      </View>
      <View style={styles.rowStyle}>
        <Pressable
          onPress={() => navigation.navigate("cartScreen")}
          style={styles.cartButton}
        >
          <Ionicons
            name="cart-outline"
            size={theme.appTheme.spacing.xl}
            color={theme.appTheme.colors.textPrimary}
          />

          {cartQuantity > 0 && (
            <View style={styles.cartIconContainer}>
              <Text style={styles.cartIconText}>
                {cartQuantity > 99 ? "99+" : cartQuantity}
              </Text>
            </View>
          )}
        </Pressable>
        {/* )} */}
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
    cartButton: {
      position: "relative",
      marginRight: theme.spacing.xl,
      paddingTop: theme.spacing.sm,
    },

    cartIconContainer: {
      position: "absolute",
      top: 0,
      right: -8,
      minWidth: 18,
      height: 18,
      paddingHorizontal: 4,
      backgroundColor: theme.colors.primaryAction,
      borderRadius: theme.radii.pill,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
    },

    cartIconText: {
      color: theme.colors.primaryActionText,
      fontWeight: theme.typography.fontWeight.bold,
      fontSize: 10,
      textAlign: "center",
    },
  });
