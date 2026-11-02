import { View, Text, Image } from "react-native";
import React, { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import QuantityCardComponent from "../quantityCard/QuantityCardComponent";
import { useAppDispatch } from "@/store/hooks";
import { increaseQuantity, decreaseQuantity,removeFromCart } from "@/store/slices/cartSlice";
import createStyles from "./styles";
import { useAppTheme } from "@/hooks/useAppTheme";
type CartCardProps = {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  quantity: number;
};
export default function CartCardComponent({
  id,
  image,
  title,
  subtitle,
  price,
  quantity,
}: CartCardProps) {
  const dispatch = useAppDispatch();

  const handleIncrease = () => dispatch(increaseQuantity(id));
  const handleDecrease = () => dispatch(decreaseQuantity(id));
  const handleRemove = () => dispatch(removeFromCart(id));
const { appTheme } = useAppTheme();

  const styles = useMemo(
    () => createStyles(appTheme),
    [appTheme],
  );
  return (
    <View style={styles.container}>
      {/* image part */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      {/* details part */}
      <View>
        {/* title, subtitle and delete */}
        <View style={styles.row}>
          {/* title and subtitle */}
          <View>
            <Text>{title}</Text>
            {subtitle && <Text>{subtitle}</Text>}
          </View>
          {/* delete icon */}
          <View>
            <Ionicons name="trash-outline" size={24} onPress={handleRemove}  style={styles.icon}/>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text>{`$${price}`}</Text>
          </View>
          <View style={styles.row}>
            <QuantityCardComponent
              quantity={quantity}
              increaseQuantity={handleIncrease}
              decreaseQuantity={handleDecrease}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
