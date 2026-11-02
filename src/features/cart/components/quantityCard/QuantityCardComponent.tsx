import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { useAppTheme } from "@/hooks/useAppTheme";
import createStyles from "./styles";

type QuantityCardProps = {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
};

export default function QuantityCardComponent({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QuantityCardProps) {
  const { appTheme } = useAppTheme();

  const styles = useMemo(
    () => createStyles(appTheme),
    [appTheme],
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={decreaseQuantity}>
        <Text style={styles.quantityText}>-</Text>
      </Pressable>

      <Text style={styles.quantityText}>{quantity}</Text>

      <Pressable onPress={increaseQuantity}>
        <Text style={styles.quantityText}>+</Text>
      </Pressable>
    </View>
  );
}
