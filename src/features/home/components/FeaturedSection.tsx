import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";

export default function FeaturedSection() {
  const {
    data: products,
    error,
    isError,
    isFetching,
    isPending,
    refetch,
  } = useProducts();
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);
  return (
    <View>
      <View>
        <View>
          <Text>Featured Products</Text>
          <Text>Mindfully picked for your interior</Text>
        </View>
        <View>
          {/* onPress navigation */}
          <Pressable>
            <Text>See All</Text>
          </Pressable>
          <Ionicons name="arrow-back" style={styles.icon}></Ionicons>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard {...item} />}
        numColumns={2}
        ItemSeparatorComponent={<View style={{height:appTheme.spacing.lg}}/>}
      />
    </View>
  );
}

const createStyles = (appTheme: AppTheme) =>
  StyleSheet.create({
    icon: {},
  });
